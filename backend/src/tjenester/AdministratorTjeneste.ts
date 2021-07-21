import { validerEntitet } from '@/hjelpere/validerEntitet'
import { IkkeFunnetError } from '@/lib/errors/database/IkkeFunnetError'
import { Administrator } from '@/modeller/Administrator/AdministratorEntitet'
import { IAdministrator } from '@/modeller/Administrator/IAdministrator'
import { classToClass } from 'class-transformer'
import { Connection, Repository } from 'typeorm'
import { DuplikatError } from '../lib/errors/database/DuplikatError'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { FeilIEntitetError } from '@/lib/errors/validering/FeilIEntitetError'

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

    async hentEtterId(id: number): Promise<Administrator | undefined> {
        return classToClass(await this.hentAdministratorEtterId(id))
    }

    async oppdater(id: number, dto: IAdministrator): Promise<Administrator | undefined> {
        return classToClass(await this.oppdaterAdministratorEtterId(id, dto))
    }

    async slett(id: number): Promise<void> {
        return classToClass(await this.slettAdministratorEtterId(id))
    }

    private async lagAdministrator(nyAdministrator: IAdministrator): Promise<Administrator | undefined> {
        if (await this.erDuplikat(nyAdministrator)) {
            throw new DuplikatError('Administratoren er allerede registrert!')
        }

        const administratorEntitet = this.administratorOppbevaringssted.create(nyAdministrator)

        await validerEntitet(administratorEntitet, { strictGroups: true })

        return await this.administratorOppbevaringssted.save(administratorEntitet)
    }

    private async hentAdministratorEtterId(id: number): Promise<Administrator | undefined> {
        const administrator = await this.administratorOppbevaringssted.findOne(id)

        if (!administrator) {
            throw new IkkeFunnetError('Fant ikke administratoren')
        }

        return administrator
    }

    private async oppdaterAdministratorEtterId(
        id: number,
        administrator: IAdministrator
    ): Promise<Administrator | undefined> {
        let eksisterendeAdministrator: Administrator | undefined

        eksisterendeAdministrator = await this.administratorOppbevaringssted.findOne(id)

        if (!eksisterendeAdministrator) {
            throw new IkkeFunnetError('Fant ikke administratoren')
        }

        const oppdatertAdministrator = this.administratorOppbevaringssted.create(administrator)
        oppdatertAdministrator.id = eksisterendeAdministrator.id

        await validerEntitet(oppdatertAdministrator, { strictGroups: true })

        return await this.administratorOppbevaringssted.save(oppdatertAdministrator)
    }

    private async slettAdministratorEtterId(id: number): Promise<void> {
        let administrator: Administrator | undefined

        administrator = await this.administratorOppbevaringssted.findOne(id)

        if (!administrator) {
            throw new IkkeFunnetError('Fant ikke administratoren')
        }

        await this.administratorOppbevaringssted.remove(administrator)
    }

    private async erDuplikat(administrator: IAdministrator): Promise<boolean> {
        const { epost } = administrator

        const duplikat = await this.administratorOppbevaringssted.find({ where: { epost } })

        return duplikat.length > 0
    }
}
