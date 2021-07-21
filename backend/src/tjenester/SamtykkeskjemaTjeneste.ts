import { DårligForespørselError } from '@/lib/errors/rest/DårligForespørselError'
import { Administrator } from '@/modeller/Administrator/AdministratorEntitet'
import { classToClass } from 'class-transformer'
import { isBefore } from 'date-fns'
import { Connection, Repository } from 'typeorm'
import { validerEntitet } from '../hjelpere/validerEntitet'
import { IHarEier } from '../interfaces/IHarEier'
import { IkkeFunnetError } from '../lib/errors/database/IkkeFunnetError'
import { ISamtykkeskjema } from '../modeller/Samtykkeskjema/ISamtykkeskjema'
import { Samtykkeskjema } from '../modeller/Samtykkeskjema/SamtykkeskjemaEntitet'
import { AdministratorTjeneste } from './AdministratorTjeneste'

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

    async hent(): Promise<Samtykkeskjema[] | undefined> {
        return classToClass(await this.hentAlleSamtykkeskjemaer())
    }

    async hentEtterId(id: number): Promise<Samtykkeskjema | undefined> {
        return classToClass(await this.hentSamtykkeskjemaEtterId(id))
    }

    async oppdater(id: number, dto: ISamtykkeskjema): Promise<Samtykkeskjema | undefined> {
        return classToClass(await this.oppdaterSamtykkeskjemaEtterId(id, dto))
    }

    async slett(id: number): Promise<void> {
        return classToClass(await this.slettSamtykkeskjemaEtterId(id))
    }

    /**
     * Lager et samtykkyskjemma entitet fra et samtykkeskjema interface. Diverse valideringer blir gjort som:
     *  - En eier av samtykkeskjemaet må legges ved.
     *  - Eier av samtykkeskjemaet må eksistere
     *  - Startdato må være før sluttdato i samtykkeskjemaet
     *  - Samtykkeskjemaet må være gyldig i forhold til entitet reglene
     *
     * @param nyttSamtykkeskjema Samtykkeskjemaet man har lyst til å lage entitet fra
     * @returns Samtykkeskjemaet som ble lagret i databasen
     */
    private async lagSamtykkeskjema(nyttSamtykkeskjema: ISamtykkeskjema): Promise<Samtykkeskjema | undefined> {
        const administratorTjeneste = new AdministratorTjeneste(this.database)

        // Vi må serialisere datoene til dato objekter, siden de kommer inn som strings
        this.serialisereDatoer(nyttSamtykkeskjema)

        if (nyttSamtykkeskjema.administrator !== this.eier) {
            throw new IkkeFunnetError('Ingen eier')
        }

        if (!isBefore(nyttSamtykkeskjema.startDato, nyttSamtykkeskjema.sluttDato)) {
            throw new DårligForespørselError('Sluttdato er før startdato')
        }

        const samtykkeskjemaEntitet = this.samtykkeskjemaOppbevaringssted.create(nyttSamtykkeskjema)

        await validerEntitet(samtykkeskjemaEntitet, { groups: ['creation'] })
        samtykkeskjemaEntitet.id = -1

        return await this.samtykkeskjemaOppbevaringssted.save(samtykkeskjemaEntitet)
    }

    /**
     * Henter alle samtykkeskjemaer som har en relasjon til eieren av tjeneste klassen.
     *
     * @returns En liste av samtykkeskjema entiter hvis funnet.
     */
    private async hentAlleSamtykkeskjemaer(): Promise<Samtykkeskjema[] | undefined> {
        let samtykkeskjemaer: Samtykkeskjema[]

        samtykkeskjemaer = await this.samtykkeskjemaOppbevaringssted.find({
            where: {
                administrator: this.eier
            }
        })

        if (samtykkeskjemaer.length === 0) {
            throw new IkkeFunnetError('Fant ingen samtykkeskjemaer')
        }

        return samtykkeskjemaer
    }

    /**
     * Henter et spesifikt samtykkeskjema utifra gitt ID. Samtykkeskjemaet som prøves å hentes må
     * også ha en relasjon til eieren av tjenesteklassen.
     *
     * @param id ID'en til samtykkeskjemaet man vil hente
     * @returns Et samtykkeskjema entitet
     */
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

    /**
     * Opddaterer et spesifikt samtykkeskjema utifra gitt ID. Samtykkeskjemaet som prøves å oppdateres må
     * også ha relasjon til eieren av tjenesteklassen.
     *
     * @param id ID'en til samtykkeskjemaet man vil oppdatere
     * @param samtykkeskjema Samtykkeskjemaet man vil oppdatere til
     */
    private async oppdaterSamtykkeskjemaEtterId(
        id: number,
        samtykkeskjema: ISamtykkeskjema
    ): Promise<Samtykkeskjema | undefined> {
        let eksisterendeSamtykkeskjema: Samtykkeskjema | undefined

        if (this.eier) {
            eksisterendeSamtykkeskjema = await this.samtykkeskjemaOppbevaringssted.findOne(id, {
                relations: ['administrator'],
                where: {
                    administrator: this.eier
                }
            })
        }

        if (!eksisterendeSamtykkeskjema) {
            throw new IkkeFunnetError('Fant ikke samtykkeskjemaet')
        }

        const oppdatertSamtykkeskjema = this.samtykkeskjemaOppbevaringssted.create(samtykkeskjema)
        oppdatertSamtykkeskjema.id = eksisterendeSamtykkeskjema.id

        await validerEntitet(oppdatertSamtykkeskjema, { strictGroups: true })

        return await this.samtykkeskjemaOppbevaringssted.save(oppdatertSamtykkeskjema)
    }

    /**
     * Sletter et spesifikt samtykkeskjema utifra gitt ID. Samtykkeskjemaet som prøves å slettes må
     * også ha relasjon til eieren av tjenesteklassen.
     *
     * @param id ID'en til samtykkeskjemaet man vil slette
     */
    private async slettSamtykkeskjemaEtterId(id: number): Promise<void> {
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
            throw new IkkeFunnetError('Fant ikke samtykkeskjemet')
        }

        await this.samtykkeskjemaOppbevaringssted.remove(samtykkeskjema)
    }

    private serialisereDatoer(samtykkeskjema: ISamtykkeskjema) {
        samtykkeskjema.startDato = new Date(samtykkeskjema.startDato)
        samtykkeskjema.sluttDato = new Date(samtykkeskjema.sluttDato)
    }
}
