import { Application } from 'express'
import { Connection } from 'typeorm'
import miljøvariabler from './../config/miljøvariabler'
import expressLaster from './express'
import typeORMLaster from './typeorm'

let database!: Connection

let lastet = false
export const last = async ({ server }: { server: Application }) => {
    if (lastet) throw new Error('Applikasjonen har allerede blitt lastet...')
    console.log(`miljø > ${miljøvariabler.miljø}\n`)

    console.log('-- laster express...')
    const lastetExpress = await expressLaster({ server })
    console.log('-------- express lastet!')

    console.log('-- laster typeORM...')
    const lastetTypeORM = await typeORMLaster()
    console.log('-------- express lastet!')

    database = lastetTypeORM

    lastet = true

    return { lastetExpress, lastetTypeORM }
}
