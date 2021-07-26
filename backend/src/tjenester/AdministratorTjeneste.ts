import { validerEntitet } from '@/hjelpere/validerEntitet'
import { Administrator } from '@/modeller/Administrator/AdministratorEntitet'
import { IAdministrator } from '@/modeller/Administrator/IAdministrator'
import { classToClass } from 'class-transformer'
import { Connection, Repository } from 'typeorm'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

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

    /**
     * Lager en administrator entitet fra en administrator interface. Diverse valideringer blir gjort som:
     *  - Om administratoren er duplikat => epost er lik
     *  - Alle feltene er gyldige => epost er på riktig format, telefon er på riktig format
     *
     * @param nyAdministrator Administratoren man har lyst til å lage en entitet fra
     * @returns Administratoren som ble lagret i databasen
     */
    private async lagAdministrator(nyAdministrator: IAdministrator): Promise<Administrator | undefined> {
        if (await this.erDuplikat(nyAdministrator)) {
            throw new DuplikatError('Administratoren er allerede registrert!')
        }

        const administratorEntitet = this.administratorOppbevaringssted.create(nyAdministrator)

        await validerEntitet(administratorEntitet, { strictGroups: true })

        return await this.administratorOppbevaringssted.save(administratorEntitet)
    }

    /**
     * Henter en spesifik administrator utifra gitt ID.
     *
     * @param id ID'en til administratoren man vil hente
     * @returns En administrator entitet
     */
    private async hentAdministratorEtterId(id: number): Promise<Administrator | undefined> {
        const administrator = await this.administratorOppbevaringssted.findOne(id)

        if (!administrator) {
            throw new IkkeFunnetError('Fant ikke administratoren')
        }

        return administrator
    }

    /**
     * Oppdaterer en spesifik administrator utifra gitt ID.
     *
     * @param id ID'en til administratoren man vil oppdatere
     * @param administrator Administratoren man vil oppdatere til
     */
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

    /**
     * Sletter en spesifik administrator utifra gitt ID
     *
     * @param id ID'en til administratoren man vil slette.
     */
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
