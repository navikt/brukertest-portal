import { ConnectionOptions, createConnection } from 'typeorm'
import 'reflect-metadata'
import dotenv from 'dotenv'

export default async () => {
    dotenv.config()

    const typeormConfig: ConnectionOptions = {
        type: 'postgres',
        host: process.env.NAIS_DATABASE_MYAPP_MYDB_HOST,
        port: Number.parseInt(process.env.NAIS_DATABASE_MYAPP_MYDB_PORT!),
        database: process.env.NAIS_DATABASE_MYAPP_MYDB_DATABASE,
        username: process.env.NAIS_DATABASE_MYAPP_MYDB_USERNAME,
        password: process.env.NAIS_DATABASE_MYAPP_MYDB_PASSWORD,
        synchronize: true,
        logging: false,
    }
    return await createConnection(typeormConfig)
}
