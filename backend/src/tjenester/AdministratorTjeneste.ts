import { IkkeFunnetError } from '@/lib/errors/database/IkkeFunnetError'
import { Administrator } from '@/modeller/Administrator/AdministratorEntitet'
import { IAdministrator } from '@/modeller/Administrator/IAdministrator'
import { classToClass } from 'class-transformer'
import { Connection, Repository } from 'typeorm'
import { DuplikatError } from '../lib/errors/database/DuplikatError'

export class AdministratorTjeneste {
    private database: Connection
    private administratorOppbevaringssted: Repository<Administrator>

    constructor(db: Connection) {
        this.database = db
        this.administratorOppbevaringssted = this.database.getRepository(Administrator)
    }

    async lag(dto: IAdministrator): Promise<Administrator | undefined> {
        return classToClass(await this.lagAdministrator(dto))
    }

    async hent(id: number): Promise<Administrator | undefined> {
        return classToClass(await this.hentAdministratorEtterId(id))
    }

    private async lagAdministrator(nyAdministrator: IAdministrator): Promise<Administrator | undefined> {
        if (await this.erDuplikat(nyAdministrator)) {
            throw new DuplikatError('Administratoren er allerede registrert!')
        }

        const administratorEntitet = this.administratorOppbevaringssted.create(nyAdministrator)
        return await this.administratorOppbevaringssted.save(administratorEntitet)
    }

    private async hentAdministratorEtterId(id: number): Promise<Administrator | undefined> {
        const administrator = await this.administratorOppbevaringssted.findOne(id)

        if (!administrator) {
            throw new IkkeFunnetError('Fant ikke administratoren')
        }

        return administrator
    }

    private async erDuplikat(administrator: IAdministrator): Promise<boolean> {
        const { epost } = administrator

        const duplikat = await this.administratorOppbevaringssted.find({ where: { epost } })

        return duplikat.length > 0
    }
}
