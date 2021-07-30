import { Connection, ConnectionOptions, createConnection } from 'typeorm'
import dotenv from 'dotenv'
import { cwd } from 'process'
import config from '@/config'

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
        entities: [`${config.src}/modeller/**/*.{ts,js}`],
        migrations: [`${config.src}/modeller/migration/**/*.{ts,js}`],
        subscribers: [`${config.src}/modeller/subscriber/**/*.{ts,js}`],
        cli: {
            entitiesDir: `${config.src}/modeller`,
            migrationsDir: `${config.src}/modeller/migration`,
            subscribersDir: `${config.src}/modeller/subscriber`
        }
    }

    return await createConnection(testTypeormConfig)
}
