import { ConnectionOptions, createConnection } from 'typeorm'
import 'reflect-metadata'
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
    }
    return await createConnection(typeormConfig)
}
