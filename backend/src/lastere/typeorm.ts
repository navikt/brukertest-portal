import { ConnectionOptions, createConnection } from "typeorm"
import 'reflect-metadata'
import miljøvariabler from './../config/miljøvariabler'

export default async () => {
    const typeormConfig: ConnectionOptions = {
        type: 'postgres',
        url: miljøvariabler.database.url,
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