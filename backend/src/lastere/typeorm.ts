import config from '@/config'
import { ConnectionOptions, createConnection } from 'typeorm'
import 'reflect-metadata'

export default async () => {
    const typeormConfig: ConnectionOptions = {
        type: 'postgres',
        host: config.database.host,
        port: Number.parseInt(config.database.port!),
        database: config.database.db,
        username: config.database.user,
        password: config.database.password,
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
    return await createConnection(typeormConfig)
}
