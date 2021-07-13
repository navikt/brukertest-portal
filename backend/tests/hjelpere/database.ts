import { Connection, ConnectionOptions, createConnection } from 'typeorm'
import miljøvariabler from '../../src/config/miljøvariabler'

export const hentTestDatabase = async (): Promise<Connection> => {
    const testTypeormConfig: ConnectionOptions = {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number.parseInt(process.env.DB_PORT!),
        database: process.env.POSTGRES_DATABASE,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        synchronize: true,
        logging: false,
        entities: [`${miljøvariabler.src}/modeller/**/*.{ts,js}`],
        migrations: [`${miljøvariabler.src}/modeller/migration/**/*.{ts,js}`],
        subscribers: [`${miljøvariabler.src}/modeller/subscriber/**/*.{ts,js}`],
        cli: {
            entitiesDir: `${miljøvariabler.src}/models`,
            migrationsDir: `${miljøvariabler.src}/models/migration`,
            subscribersDir: `${miljøvariabler.src}/models/subscriber`
        }
    }

    return await createConnection(testTypeormConfig)
}
