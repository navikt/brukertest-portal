import { ConnectionOptions, createConnection } from 'typeorm'
import 'reflect-metadata'
import dotenv from 'dotenv'

export default async () => {
    const typeormConfig: ConnectionOptions = {
        type: 'postgres',
        host: process.env.NAIS_DATABASE_BRUKERTEST_PORTAL_API_BRUKERTEST_PORTAL_DB_HOST,
        port: Number.parseInt(process.env.NAIS_DATABASE_BRUKERTEST_PORTAL_API_BRUKERTEST_PORTAL_DB_PORT!),
        database: process.env.NAIS_DATABASE_BRUKERTEST_PORTAL_API_BRUKERTEST_PORTAL_DB_DATABASE,
        username: process.env.NAIS_DATABASE_BRUKERTEST_PORTAL_API_BRUKERTEST_PORTAL_DB_USERNAME,
        password: process.env.NAIS_DATABASE_BRUKERTEST_PORTAL_API_BRUKERTEST_PORTAL_DB_PASSWORD,
        synchronize: true,
        logging: false,
    }
    return await createConnection(typeormConfig)
}
