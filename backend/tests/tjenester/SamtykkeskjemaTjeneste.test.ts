import { IkkeFunnetError } from '@/lib/errors/database/IkkeFunnetError'
import { FeilIEntitetError } from '@/lib/errors/validering/FeilIEntitetError'
import { Administrator } from '@/modeller/Administrator/AdministratorEntitet'
import { ISamtykkeskjema } from '@/modeller/Samtykkeskjema/ISamtykkeskjema'
import { TypeSamtykkeskjema } from '@/modeller/Samtykkeskjema/TypeSamtykkeskjema'
import { SamtykkeskjemaTjeneste } from '@/tjenester/SamtykkeskjemaTjeneste'
import { Connection } from 'typeorm'
import { Samtykkeskjema } from '../../src/modeller/Samtykkeskjema/SamtykkeskjemaEntitet'
import { hentTestDatabase } from '../hjelpere/database'
import { renskDatabaseEntitetTabell } from '../Test.utils'
import { lagDummyAdministrator } from '../hjelpere/dummy/administrator'

let db: Connection
let samtykkeskjemaTjeneste: SamtykkeskjemaTjeneste
let administrator: Administrator
let frøDOO: ISamtykkeskjema

beforeAll(async () => {
    db = await hentTestDatabase()
    administrator = await lagDummyAdministrator(db)

    frøDOO = {
        administrator: administrator,
        tittel: 'Beste tittelen',
        bakgrunn: 'Beste bakgrunnen',
        skalPubliseres: false,
        formål: 'Beste formålet',
        spørreOm: 'Spørre om masse ting',
        harSamtykket: false,
        typeSamtykkeskjema: TypeSamtykkeskjema.Intervju,
        startDato: new Date('2014-01-16'),
        sluttDato: new Date('2019-01-16')
    }

    samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(db, administrator)
})

beforeEach(async () => {
    samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(db, administrator)
    const oppbevaringssted = db.getRepository(Samtykkeskjema)
    await renskDatabaseEntitetTabell(oppbevaringssted)
})

afterAll(async () => {
    try {
        const oppbevaringssted = db.getRepository(Samtykkeskjema)
        await renskDatabaseEntitetTabell(oppbevaringssted)
        await db.close()
    } catch (error) {
        console.error(error)
    }
})

it('skal lage et samtykkeskjema med alt av data fylt ut', async () => {
    const samtykkeskjema = await samtykkeskjemaTjeneste.lag({
        administrator: administrator,
        tittel: 'Veldig fin tittel',
        bakgrunn: 'Bakgrunnen er slik...',
        skalPubliseres: true,
        formål: 'Formålet er veldig fint',
        spørreOm: 'Spørre om alle tingene',
        startDato: new Date('2014-01-16'),
        sluttDato: new Date('2019-01-16'),
        harSamtykket: false,
        typeSamtykkeskjema: TypeSamtykkeskjema.Brukertest
    })
    expect(samtykkeskjema).toBeInstanceOf(Samtykkeskjema)
})

it('skal ikke kune lage et samtykkeskjema med feil eier', async () => {
    const samtykkeTjeneste = new SamtykkeskjemaTjeneste(db, {
        id: 1001,
        fornavn: 'Peltoni',
        etternavn: 'pilkini',
        team: 'ladida',
        avdeling: 'beste avdeling',
        produktområde: 'beste produktavdelig',
        telefon: '+47 999 99 999',
        epost: 'peltoni.pilini@gmail.com',
        samtykkeskjemaer: []
    })

    await expect(samtykkeTjeneste.lag(frøDOO)).rejects.toThrow(IkkeFunnetError)
})

// it('skal kaste error når lager duplikat samtykkeskjema', async () => {
//     await samtykkeskjemaTjeneste.lag(frøDOO)
//     await expect(samtykkeskjemaTjeneste.lag(frøDOO)).rejects.toThrowError()
// })

it('skal hente et lagret samtykkeskjema', async () => {
    const samtykkeskjema = await samtykkeskjemaTjeneste.lag(frøDOO)
    const hentetSamtykkeskjema = await samtykkeskjemaTjeneste.hentEtterId(samtykkeskjema!.id)
    expect(hentetSamtykkeskjema).toBeInstanceOf(Samtykkeskjema)
})

it('skal hente alle samtykkeskjemaer tilknyttet en eier', async () => {
    const frøDOO1 = frøDOO
    frøDOO1.tittel = 'Skjema 99'

    const frøDOO2 = frøDOO
    frøDOO2.tittel = 'Skjema 420'

    const frøDOO3 = frøDOO
    frøDOO2.tittel = 'Skjema 777777777'

    await samtykkeskjemaTjeneste.lag(frøDOO1)
    await samtykkeskjemaTjeneste.lag(frøDOO2)
    await samtykkeskjemaTjeneste.lag(frøDOO3)

    const hentetSamtykkeskjemaer = await samtykkeskjemaTjeneste.hent()
    expect(hentetSamtykkeskjemaer).toHaveLength(3)
})

it('skal kaste error når man prøver å hente samtykkeskjemaer uten å ha lagret noen', async () => {
    await expect(samtykkeskjemaTjeneste.hent()).rejects.toThrow(IkkeFunnetError)
})

it('skal kaste error når man prøver å hente et samtykkeskjema som ikke finnes', async () => {
    await expect(samtykkeskjemaTjeneste.hentEtterId(632035)).rejects.toThrow(IkkeFunnetError)
})

it('skal slette et lagret samtykkeskjema', async () => {
    const samtykkeskjema = await samtykkeskjemaTjeneste.lag(frøDOO)
    await samtykkeskjemaTjeneste.slett(samtykkeskjema!.id)
    await expect(samtykkeskjemaTjeneste.hentEtterId(samtykkeskjema!.id)).rejects.toThrow(IkkeFunnetError)
})

it('skal ikke kunne slette et samtykkeskjema som ikke finnes', async () => {
    await expect(samtykkeskjemaTjeneste.slett(74820)).rejects.toThrow(IkkeFunnetError)
})

it('skal kunne oppdatere et eksisterende samtykkeskjema', async () => {
    const samtykkeskjema = await samtykkeskjemaTjeneste.lag(frøDOO)
    const gammelTittel = samtykkeskjema!.tittel
    const oppdatertSamtykkeskjema = await samtykkeskjemaTjeneste.oppdater(samtykkeskjema!.id, {
        administrator: administrator,
        tittel: 'Ny fin tittel joho!',
        bakgrunn: 'Lalalalala',
        skalPubliseres: false,
        formål: 'Yasser rundt på gården',
        spørreOm: 'Slutt å spørr!',
        harSamtykket: true,
        typeSamtykkeskjema: TypeSamtykkeskjema.Lydopptak,
        startDato: new Date(),
        sluttDato: new Date()
    })
    expect(oppdatertSamtykkeskjema!.tittel).not.toBe(gammelTittel)
})

it('skal ikke kunne oppdatere samtykkeskjema til tomme felt', async () => {
    const samtykkeskjema = await samtykkeskjemaTjeneste.lag(frøDOO)
    await expect(
        samtykkeskjemaTjeneste.oppdater(samtykkeskjema!.id, {
            administrator: administrator,
            tittel: '',
            bakgrunn: 'Lalalalala',
            skalPubliseres: false,
            formål: 'Yasser rundt på gården',
            spørreOm: 'Slutt å spørr!',
            harSamtykket: true,
            typeSamtykkeskjema: TypeSamtykkeskjema.Lydopptak,
            startDato: new Date(),
            sluttDato: new Date()
        })
    ).rejects.toThrow(FeilIEntitetError)
})
