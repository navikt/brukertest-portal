import express from 'express'
import miljøvariabler from './config/miljøvariabler'
import { last } from './lastere/laster'

console.log('\n========== ⚡ STARTER OPP ⚡ =========== \n')

async function start() {
    try {
        //lastMiljøVariabler()
        const server = express()

        const app = await last({ server })

        server.listen(miljøvariabler.http.port, () => {
            console.log(`LYTTER PÅ ${miljøvariabler.http.port}`)
            console.log('\n========== SERVEREN STARTET =========== \n')
        })
    } catch (error) {
        console.log('\n========== 💥 NOE GIKK VELDIG GALT 💥 =========== \n')
        console.log(error)
    }
}

void start()
