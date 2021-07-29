import { ConnectionOptions, createConnection } from 'typeorm'
import 'reflect-metadata'
import miljøvariabler from './../config/miljøvariabler'
import dotenv from 'dotenv'

export default async () => {
    dotenv.config()

    const typeormConfig: ConnectionOptions = {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number.parseInt(process.env.DB_PORT!),
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
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
    return await createConnection(typeormConfig)
}
