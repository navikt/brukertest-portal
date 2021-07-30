import { Connection } from 'typeorm'
import { AdministratorTjeneste } from '../../src/tjenester/AdministratorTjeneste'
import { IAdministrator } from '../../src/modeller/Administrator/IAdministrator'
import { hentTestDatabase } from '../hjelpere/database'
import { Administrator } from '@/modeller/Administrator/AdministratorEntitet'
import { renskDatabaseEntitetTabell } from '../Test.utils'
import { IkkeFunnetError } from '@/lib/errors/http/IkkeFunnetError'
import { DuplikatError } from '@/lib/errors/DuplikatError'
import { ValideringsError } from '@/lib/errors/validering/ValideringsError'

let db: Connection
let administratorTjeneste: AdministratorTjeneste
let frøDOO: IAdministrator

beforeAll(async () => {
    db = await hentTestDatabase()

    frøDOO = {
        fornavn: 'Asty',
        etternavn: 'Styvius',
        team: 'Team kjøttetende-planter',
        produktområde: 'planter',
        avdeling: 'Regnskogen',
        telefon: '+47 123 45 678',
        epost: 'asty.styvius@nav.no'
    }

    administratorTjeneste = new AdministratorTjeneste(db)
})

beforeEach(async () => {
    administratorTjeneste = new AdministratorTjeneste(db)
    const oppbevaringssted = db.getRepository(Administrator)
    await renskDatabaseEntitetTabell(oppbevaringssted)
})

afterAll(async () => {
    try {
        const oppbevaringssted = db.getRepository(Administrator)
        await renskDatabaseEntitetTabell(oppbevaringssted)
        await db.close()
    } catch (error) {
        console.error(error)
    }
})

it('skal lage en administrator med alt av data fylt ut', async () => {
    const administrator = await administratorTjeneste.lag(frøDOO)
    expect(administrator).toBeInstanceOf(Administrator)
})

it('skal ikke kune lage en administrator med feil i feltene', async () => {
    await expect(
        administratorTjeneste.lag({
            fornavn: '',
            etternavn: 'nordmann',
            team: 'Teamet',
            produktområde: 'Produktområdet',
            avdeling: 'Avdelignen',
            telefon: 'sidhgsoigs',
            epost: 'Er det slikt man skriver epost?'
        })
    ).rejects.toThrow(ValideringsError)
})

it('skal ikke kunne lage en duplikat administrator', async () => {
    await administratorTjeneste.lag(frøDOO)
    await expect(administratorTjeneste.lag(frøDOO)).rejects.toThrow(DuplikatError)
})

it('skal hente en lagret administrator', async () => {
    const administrator = await administratorTjeneste.lag(frøDOO)
    const hentetAdministrator = await administratorTjeneste.hentEtterId(administrator!.id)
    expect(hentetAdministrator).toBeInstanceOf(Administrator)
})

it('skal kaste error når man prøver å hente en administrator som ikke finnes', async () => {
    await expect(administratorTjeneste.hentEtterId(345345)).rejects.toThrow(IkkeFunnetError)
})

it('skal slette en lagret administrator', async () => {
    const administrator = await administratorTjeneste.lag(frøDOO)
    await administratorTjeneste.slett(administrator!.id)
    await expect(administratorTjeneste.hentEtterId(administrator!.id)).rejects.toThrow(IkkeFunnetError)
})

it('skal ikke slette en administrator som ikke finnes', async () => {
    await expect(administratorTjeneste.slett(325235)).rejects.toThrow(IkkeFunnetError)
})

it('skal kunne oppdatere en eksisterende administrator', async () => {
    const administrator = await administratorTjeneste.lag(frøDOO)
    const gammelEpost = administrator!.epost
    const oppdatertAdministrator = await administratorTjeneste.oppdater(administrator!.id, {
        fornavn: 'Heltoni',
        etternavn: 'Heroni',
        team: 'Naviloni',
        produktområde: 'Salitoni',
        avdeling: 'NAVIT',
        telefon: '+47 123 45 678',
        epost: 'heltoni.heroni@nav.no'
    })
    expect(oppdatertAdministrator!.epost).not.toBe(gammelEpost)
})

it('skal ikke kunne oppdatere en eksisterende administrator med feil i feltene', async () => {
    const administrator = await administratorTjeneste.lag(frøDOO)
    await expect(
        administratorTjeneste.oppdater(administrator!.id, {
            fornavn: '',
            etternavn: 'nordmann',
            team: 'Teamet',
            produktområde: 'Produktområdet',
            avdeling: 'Avdelignen',
            telefon: 'sidhgsoigs',
            epost: 'Er det slikt man skriver epost?'
        })
    ).rejects.toThrow(ValideringsError)
})
