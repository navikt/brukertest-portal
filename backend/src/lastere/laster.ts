import { Application } from 'express'
import miljøvariabler from './../config/miljøvariabler'
import expressLaster from './express'

let lastet = false
export const last = async ({ server }: { server: Application }) => {
    if (lastet) throw new Error('Applikasjonen har allerede blitt lastet...')
    console.log(`miljø > ${miljøvariabler.miljø}\n`)

    console.log('-- laster express...')
    const lastetExpress = await expressLaster({ server })
    console.log('-------- express lastet!')

    lastet = true

    return { lastetExpress }
}
