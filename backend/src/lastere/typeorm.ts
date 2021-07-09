import { ConnectionOptions, createConnection } from "typeorm"
import 'reflect-metadata'
import miljøvariabler from './../config/miljøvariabler'

export default async () => {
    const typeormConfig: ConnectionOptions = {
        type: 'postgres',
        host: miljøvariabler.database.host,
        extra: {
            socketPath: miljøvariabler.database.host
        },
        port: Number.parseInt(miljøvariabler.database.port!),
        username: miljøvariabler.database.user,
        password: miljøvariabler.database.password,
        database: miljøvariabler.database.db,
        dropSchema: miljøvariabler.database.dropSchema,
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