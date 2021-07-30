import dotenv from 'dotenv'

const miljø = process.env.NODE_ENV

let src 
if (miljø === "development") {
    src = 'src'
} else if (miljø === "production") {
    src = 'dist'
}

dotenv.config()

let host
let port
let db
let user
let password
if (miljø === 'development') {
    host = process.env.DB_HOST
    port = process.env.DB_PORT
    db = process.env.POSTGRES_DB
    user = process.env.POSTGRES_USER
    password = process.env.POSTGRES_PASSWORD
} else if (miljø === 'production') {
    host = process.env.NAIS_DATABASE_BRUKERTEST_PORTAL_API_BRUKERTEST_PORTAL_DB_HOST
    port = process.env.NAIS_DATABASE_BRUKERTEST_PORTAL_API_BRUKERTEST_PORTAL_DB_PORT
    db = process.env.NAIS_DATABASE_BRUKERTEST_PORTAL_API_BRUKERTEST_PORTAL_DB_DATABASE
    user = process.env.NAIS_DATABASE_BRUKERTEST_PORTAL_API_BRUKERTEST_PORTAL_DB_USERNAME
    password = process.env.NAIS_DATABASE_BRUKERTEST_PORTAL_API_BRUKERTEST_PORTAL_DB_PASSWORD
}

export default {
    database: {
        host: host,
        port: port,
        db: db,
        user: user,
        password: password
    },
    miljø,
    src,
}