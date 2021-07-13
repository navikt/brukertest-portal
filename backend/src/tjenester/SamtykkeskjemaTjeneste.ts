import { classToClass } from 'class-transformer'
import { Connection, Repository } from 'typeorm'
import { ISamtykkeskjema } from '../modeller/Samtykkeskjema/ISamtykkeskjema'
import { Samtykkeskjema } from '../modeller/Samtykkeskjema/SamtykkeskjemaEntitet'

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

    // TODO: Legge inn sjekk for start og slutt dato
    private async lagSamtykkeskjema(nyttSamtykkeskjema: ISamtykkeskjema): Promise<Samtykkeskjema | undefined> {
        if (await this.erDuplikat(nyttSamtykkeskjema)) {
            throw new Error('Samtykkeskjemaet finnes allerede!')
        }

        const samtykkeskjemaEntitet = this.samtykkeskjemaOppbevaringssted.create(nyttSamtykkeskjema)
        return await this.samtykkeskjemaOppbevaringssted.save(samtykkeskjemaEntitet)
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
