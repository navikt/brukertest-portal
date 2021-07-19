import { classToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { Connection, Repository } from 'typeorm'
import { ISamtykkeskjema } from '../modeller/Samtykkeskjema/ISamtykkeskjema'
import { Samtykkeskjema } from '../modeller/Samtykkeskjema/SamtykkeskjemaEntitet'
import { IkkeFunnetError } from '../lib/errors/database/IkkeFunnetError'
import { DuplikatError } from '../lib/errors/database/DuplikatError'
import { FeilIEntitetError } from '../lib/errors/validering/FeilIEntitetError'
import { AdministratorTjeneste } from './AdministratorTjeneste'
import { IngenEierError } from '../lib/errors/IngenEierError'
import { IHarEier } from '../interfaces/IHarEier'
import { FeilEierError } from '../lib/errors/FeilEierError'
import { Administrator } from '@/modeller/Administrator/AdministratorEntitet'
import { isBefore } from 'date-fns'
import { DårligForespørselError } from '@/lib/errors/rest/DårligForespørselError'

export class SamtykkeskjemaTjeneste implements IHarEier<Samtykkeskjema> {
    eier: Administrator | undefined
    private database: Connection
    private samtykkeskjemaOppbevaringssted: Repository<Samtykkeskjema>

    constructor(database: Connection, eier?: Administrator) {
        this.eier = eier
        this.database = database
        this.samtykkeskjemaOppbevaringssted = this.database.getRepository(Samtykkeskjema)
    }

    verifiserEier(entitet: Samtykkeskjema): void {
        throw new Error('Method not implemented.')
    }

    async lag(dto: ISamtykkeskjema): Promise<Samtykkeskjema | undefined> {
        return classToClass(await this.lagSamtykkeskjema(dto))
    }

    async hent(id: number): Promise<Samtykkeskjema | undefined> {
        return classToClass(await this.hentSamtykkeskjemaEtterId(id))
    }

    async oppdater(id: number, dto: ISamtykkeskjema): Promise<Samtykkeskjema | undefined> {
        return classToClass(await this.oppdaterSamtykkeskjemaEtterId(id, dto))
    }

    async slett(id: number): Promise<void> {
        return classToClass(await this.slettSamtykkeskjemaEtterId(id))
    }

    private async lagSamtykkeskjema(nyttSamtykkeskjema: ISamtykkeskjema): Promise<Samtykkeskjema | undefined> {
        const administratorTjeneste = new AdministratorTjeneste(this.database)

        await administratorTjeneste.hent(nyttSamtykkeskjema.administrator.id)

        // Vi må serialisere datoene, siden class-validator forventer et date objekt, ikke string.
        this.serialisereDatoer(nyttSamtykkeskjema)

        if (nyttSamtykkeskjema.administrator !== this.eier) {
            throw new IkkeFunnetError('Ingen eier')
        }

        if (!isBefore(nyttSamtykkeskjema.startDato, nyttSamtykkeskjema.sluttDato)) {
            throw new DårligForespørselError('Sluttdato er før startdato')
        }

        const samtykkeskjemaEntitet = this.samtykkeskjemaOppbevaringssted.create(nyttSamtykkeskjema)
        return await this.samtykkeskjemaOppbevaringssted.save(samtykkeskjemaEntitet)
    }

    // Legge inn sjekk for eieren av samtykkeskjemaet
    private async hentSamtykkeskjemaEtterId(id: number): Promise<Samtykkeskjema | undefined> {
        let samtykkeskjema: Samtykkeskjema | undefined

        if (this.eier) {
            samtykkeskjema = await this.samtykkeskjemaOppbevaringssted.findOne(id, {
                relations: ['administrator'],
                where: {
                    administrator: this.eier
                }
            })
        }

        if (!samtykkeskjema) {
            throw new IkkeFunnetError('Fant ikke samtykkeskjemaet')
        }

        return samtykkeskjema
    }

    // Legge inn sjekk for eieren av samtykkeskjemaet
    private async oppdaterSamtykkeskjemaEtterId(
        id: number,
        samtykkeskjema: ISamtykkeskjema
    ): Promise<Samtykkeskjema | undefined> {
        const eksisterendeSamtykkeskjema = await this.samtykkeskjemaOppbevaringssted.findOne(id)

        if (!eksisterendeSamtykkeskjema) {
            throw new IkkeFunnetError('Fant ikke samtykkeskjemaet')
        }

        const oppdatertSamtykkeskjema = this.samtykkeskjemaOppbevaringssted.create(samtykkeskjema)
        oppdatertSamtykkeskjema.id = eksisterendeSamtykkeskjema.id

        await validate(oppdatertSamtykkeskjema).then((feil) => {
            if (feil.length > 0) {
                throw new FeilIEntitetError('Entititen er ikke valid')
            }
        })

        return await this.samtykkeskjemaOppbevaringssted.save(oppdatertSamtykkeskjema)
    }

    // Legge inn sjekk for eieren av samtykkeskjemaet
    private async slettSamtykkeskjemaEtterId(id: number): Promise<void> {
        const samtykkeskjema = await this.samtykkeskjemaOppbevaringssted.findOne(id)

        if (!samtykkeskjema) {
            throw new IkkeFunnetError('Fant ikke samtykkeskjemet')
        }

        await this.samtykkeskjemaOppbevaringssted.remove(samtykkeskjema)
    }

    private async erDuplikat(samtykkeskjema: ISamtykkeskjema): Promise<boolean> {
        const { tittel, typeSamtykkeskjema } = samtykkeskjema

        const duplikat = await this.database.getRepository(Samtykkeskjema).find({
            where: {
                tittel,
                typeSamtykkeskjema
                // Legge inn sjekk for eieren av samtykkeskjemaet
            }
        })

        return duplikat.length > 0
    }

    private serialisereDatoer(samtykkeskjema: ISamtykkeskjema) {
        samtykkeskjema.startDato = new Date(samtykkeskjema.startDato)
        samtykkeskjema.sluttDato = new Date(samtykkeskjema.sluttDato)
    }
}
