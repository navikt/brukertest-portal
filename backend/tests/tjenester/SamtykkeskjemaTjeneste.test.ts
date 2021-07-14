import { IkkeFunnetError } from '@/lib/errors/database/IkkeFunnetError'
import { ISamtykkeskjema } from '@/modeller/Samtykkeskjema/ISamtykkeskjema'
import { TypeSamtykkeskjema } from '@/modeller/Samtykkeskjema/TypeSamtykkeskjema'
import { SamtykkeskjemaTjeneste } from '@/tjenester/SamtykkeskjemaTjeneste'
import { Connection } from 'typeorm'
import { Samtykkeskjema } from '../../src/modeller/Samtykkeskjema/SamtykkeskjemaEntitet'
import { hentTestDatabase } from '../hjelpere/database'
import { renskDatabaseEntitetTabell } from '../Test.utils'

let db: Connection
let samtykkeskjemaTjeneste: SamtykkeskjemaTjeneste
let frøDOO: ISamtykkeskjema

beforeAll(async () => {
    db = await hentTestDatabase()

    frøDOO = {
        tittel: 'Beste tittelen',
        bakgrunn: 'Beste bakgrunnen',
        skalPubliseres: false,
        formål: 'Beste formålet',
        spørreOm: 'Spørre om masse ting',
        harSamtykket: false,
        typeSamtykkeskjema: TypeSamtykkeskjema.Intervju
    }

    samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(db)
})

beforeEach(async () => {
    samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(db)
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
        tittel: 'Veldig fin tittel',
        bakgrunn: 'Bakgrunnen er slik...',
        skalPubliseres: true,
        formål: 'Formålet er veldig fint',
        spørreOm: 'Spørre om alle tingene',
        startDato: new Date(),
        sluttDato: new Date(),
        harSamtykket: false,
        typeSamtykkeskjema: TypeSamtykkeskjema.Brukertest
    })
    expect(samtykkeskjema).toBeInstanceOf(Samtykkeskjema)
})

it('skal lage et samtykkeskjema uten start dato og slutt dato', async () => {
    const samtykkeskjema = await samtykkeskjemaTjeneste.lag({
        tittel: 'Veldig fin tittel',
        bakgrunn: 'Bakgrunnen er slik...',
        skalPubliseres: true,
        formål: 'Formålet er veldig fint',
        spørreOm: 'Spørre om alle tingene',
        harSamtykket: false,
        typeSamtykkeskjema: TypeSamtykkeskjema.Brukertest
    })
    expect(samtykkeskjema).toBeInstanceOf(Samtykkeskjema)
})

it('skal kaste error når lager duplikat samtykkeskjema', async () => {
    await samtykkeskjemaTjeneste.lag(frøDOO)
    await expect(samtykkeskjemaTjeneste.lag(frøDOO)).rejects.toThrowError()
})

it('skal hente et lagret samtykkeskjema', async () => {
    const samtykkeskjema = await samtykkeskjemaTjeneste.lag(frøDOO)
    const hentetSamtykkeskjema = await samtykkeskjemaTjeneste.hent(samtykkeskjema!.id)
    expect(hentetSamtykkeskjema).toBeInstanceOf(Samtykkeskjema)
})

it('skal kaste error når man prøver å hente et samtykkeskjema som ikke finnes', async () => {
    await expect(samtykkeskjemaTjeneste.hent(632035)).rejects.toThrow(IkkeFunnetError)
})

it('skal slette et lagret samtykkeskjema', async () => {
    const samtykkeskjema = await samtykkeskjemaTjeneste.lag(frøDOO)
    await samtykkeskjemaTjeneste.slett(samtykkeskjema!.id)
    await expect(samtykkeskjemaTjeneste.hent(samtykkeskjema!.id)).rejects.toThrow(IkkeFunnetError)
})

it('skal ikke kunne slette et samtykkeskjema som ikke finnes', async () => {
    await expect(samtykkeskjemaTjeneste.slett(74820)).rejects.toThrow(IkkeFunnetError)
})
