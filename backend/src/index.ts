import express from 'express'
import { last } from './lastere/laster'
import dotenv from 'dotenv'

console.log('\n========== ā” STARTER OPP ā” =========== \n')

async function start() {
    try {
        dotenv.config()

        const server = express()

        await last({ server })

        server.listen(process.env.HTTP_PORT, () => {
            console.log(`LYTTER PĆ ${process.env.HTTP_PORT}`)
            console.log('\n========== SERVEREN STARTET =========== \n')
        })
    } catch (error) {
        console.log('\n========== š„ NOE GIKK VELDIG GALT š„ =========== \n')
        console.log(error)
    }
}

void start()
