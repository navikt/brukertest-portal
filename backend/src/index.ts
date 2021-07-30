import express from 'express'
import { last } from './lastere/laster'
import dotenv from 'dotenv'

console.log('\n========== ⚡ STARTER OPP ⚡ =========== \n')

async function start() {
    try {
        dotenv.config()

        const server = express()

        await last({ server })

        server.listen(process.env.HTTP_PORT, () => {
            console.log(`LYTTER PÅ ${process.env.HTTP_PORT}`)
            console.log('\n========== SERVEREN STARTET =========== \n')
        })
    } catch (error) {
        console.log('\n========== 💥 NOE GIKK VELDIG GALT 💥 =========== \n')
        console.log(error)
    }
}

void start()
