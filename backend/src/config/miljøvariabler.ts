import dotenv from 'dotenv'
import { cwd } from 'process'

const miljøer = {
    utvikling: 'development',
    test: 'test',
    produksjon: 'production'
}
const miljø = process.env.NODE_ENV ? process.env.NODE_ENV : miljøer.utvikling

const src = miljø === miljøer.utvikling || miljø === miljøer.test ? 'src' : 'dist'

export default {
    database: {
        host: process.env.NAIS_DATABASE_MYAPP_MYDB_HOST,
        port: process.env.NAIS_DATABASE_MYAPP_MYDB_PORT,
        db: process.env.NAIS_DATABASE_MYAPP_MYDB_DATABASE,
        user: process.env.NAIS_DATABASE_MYAPP_MYDB_USERNAME,
        password: process.env.NAIS_DATABASE_MYAPP_MYDB_PASSWORD,
        url: process.env.NAIS_DATABASE_MYAPP_MYDB_URL,
        dropSchema: miljø === miljøer.test ? true : false
    },
    http: {
        port: process.env.HTTP_PORT
    },
    miljø,
    src
}

export function lastMiljøVariabler(): void {
    if (!Object.values(miljøer).find((val) => miljø === val)) {
        throw new Error(
            `${miljø} er ikke et gyldig kjøretidsmiljø\nVenligst sett NODE_ENV til en av disse: ${[
                ...Object.values(miljøer)
            ]}`
        )
    }
    
    
    if (miljø === miljøer.test) {
        dotenv.config({ path: cwd() + '/.env.test'})    
    } else {
        dotenv.config()
    }
    
}