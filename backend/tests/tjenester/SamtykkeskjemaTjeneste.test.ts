import { TypeSamtykkeskjema } from '@/modeller/Samtykkeskjema/TypeSamtykkeskjema'
import { SamtykkeskjemaTjeneste } from '@/tjenester/SamtykkeskjemaTjeneste'
import { Connection } from 'typeorm'
import { Samtykkeskjema } from '../../src/modeller/Samtykkeskjema/SamtykkeskjemaEntitet'
import { hentTestDatabase } from '../hjelpere/database'
import { renskDatabaseEntitetTabell } from '../Test.utils'

let db: Connection
let samtykkeskjema: Samtykkeskjema
let samtykkeskjemaTjeneste: SamtykkeskjemaTjeneste

beforeAll(async () => {
    db = await hentTestDatabase()
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
        harSamtykket: false,
        typeSamtykkeskjema: TypeSamtykkeskjema.Brukertest
    })
    expect(samtykkeskjema).toBeInstanceOf(Samtykkeskjema)
})
