import { Connection, ConnectionOptions, createConnection } from 'typeorm'
import dotenv from 'dotenv'
import { cwd } from 'process'

export const hentTestDatabase = async (): Promise<Connection> => {
    dotenv.config({ path: cwd() + '/.env.test' })

    const testTypeormConfig: ConnectionOptions = {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number.parseInt(process.env.DB_PORT!),
        database: process.env.POSTGRES_DB,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        synchronize: true,
        logging: false,
    }

    return await createConnection(testTypeormConfig)
}
