import { ConnectionOptions, createConnection } from 'typeorm'
import 'reflect-metadata'
import miljøvariabler from './../config/miljøvariabler'

export default async () => {
    const typeormConfig: ConnectionOptions = {
        type: 'postgres',
        host: process.env.NAIS_DATABASE_MYAPP_MYDB_HOST,
        port: Number.parseInt(process.env.NAIS_DATABASE_MYAPP_MYDB_PORT!),
        database: process.env.NAIS_DATABASE_MYAPP_MYDB_DATABASE,
        username: process.env.NAIS_DATABASE_MYAPP_MYDB_USERNAME,
        password: process.env.NAIS_DATABASE_MYAPP_MYDB_PASSWORD,
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
