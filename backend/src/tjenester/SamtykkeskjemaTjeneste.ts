import { classToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { Connection, Repository } from 'typeorm'
import { ISamtykkeskjema } from '../modeller/Samtykkeskjema/ISamtykkeskjema'
import { Samtykkeskjema } from '../modeller/Samtykkeskjema/SamtykkeskjemaEntitet'
import { IkkeFunnetError } from '../lib/errors/database/IkkeFunnetError'
import { FeilIEntitetError } from '../lib/errors/validering/FeilIEntitetError'

export class SamtykkeskjemaTjeneste {
    private database: Connection
    private samtykkeskjemaOppbevaringssted: Repository<Samtykkeskjema>

    constructor(database: Connection) {
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
        if (await this.erDuplikat(nyttSamtykkeskjema)) {
            throw new Error('Samtykkeskjemaet finnes allerede!')
        }

        const samtykkeskjemaEntitet = this.samtykkeskjemaOppbevaringssted.create(nyttSamtykkeskjema)
        return await this.samtykkeskjemaOppbevaringssted.save(samtykkeskjemaEntitet)
    }

    // Legge inn sjekk for eieren av samtykkeskjemaet
    private async hentSamtykkeskjemaEtterId(id: number): Promise<Samtykkeskjema> {
        const samtykkeskjema = await this.samtykkeskjemaOppbevaringssted.findOne(id)

        if (!samtykkeskjema) {
            throw new IkkeFunnetError('Fant ikke samtykkeskjemet')
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

        // TODO: FJERNE DISSE NÅR VI HAR DATO RAMMEVERK PÅ PLASS
        oppdatertSamtykkeskjema.startDato = new Date()
        oppdatertSamtykkeskjema.sluttDato = new Date()

        await validate(oppdatertSamtykkeskjema).then((feil) => {
            if (feil.length > 0) {
                console.log(feil)
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
}
