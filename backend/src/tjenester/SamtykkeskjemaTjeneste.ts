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

export class SamtykkeskjemaTjeneste implements IHarEier<Samtykkeskjema> {
    eier: Administrator | undefined
    private database: Connection
    private samtykkeskjemaOppbevaringssted: Repository<Samtykkeskjema>

    constructor(database: Connection, eier?: Administrator) {
        this.eier = eier
        this.database = database
        this.samtykkeskjemaOppbevaringssted = this.database.getRepository(Samtykkeskjema)
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

    // TODO: Legge inn sjekk for start og slutt dato
    private async lagSamtykkeskjema(nyttSamtykkeskjema: ISamtykkeskjema): Promise<Samtykkeskjema | undefined> {
        const administratorTjeneste = new AdministratorTjeneste(this.database)

        if (!this.eier) {
            throw new IngenEierError('Ingen eier er lagt ved')
        }

        if (await this.erDuplikat(nyttSamtykkeskjema)) {
            throw new DuplikatError('Samtykkeskjemaet finnes allerede!')
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

    verifiserEier(entitet: ISamtykkeskjema): void {
        if (entitet.administrator !== this.eier) {
            throw new FeilEierError('Ingen eier')
        }
    }

    private verifiserSamtykkeskjema(samtykkeskjema: ISamtykkeskjema) {
        // 1. administratoren lagt med må være i databasen
        // 2. ikke duplisert -> tittel og type samtykkeskjema
        // 3. deltakerne i samtykkeskjemaet må eksistere
        // 4. deltakerne er ikke duplikate
        // 5. start dato er før slutt dato
    }
}
