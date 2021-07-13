import { Connection } from 'typeorm'
import { Samtykkeskjema } from '../../src/modeller/Samtykkeskjema/SamtykkeskjemaEntitet'
import { hentTestDatabase } from '../hjelpere/database'

let db: Connection
let samtykkeskjema: Samtykkeskjema

beforeAll(async () => {
    db = await hentTestDatabase()
})
