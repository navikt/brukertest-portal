import { Router } from 'express'
import { SamtykkeskjemaTjeneste } from '../../../tjenester/SamtykkeskjemaTjeneste'
import { database } from '../../../lastere/laster'
import { ISamtykkeskjema } from '@/modeller/Samtykkeskjema/ISamtykkeskjema'

const ruter = Router()

ruter.post('/', async (request, response) => {
    try {
        const samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(database)
        const nyttSamtykkeskjema = request.body as ISamtykkeskjema

        const samtykkeskjema = await samtykkeskjemaTjeneste.lag(nyttSamtykkeskjema)
        return response.send(samtykkeskjema)
    } catch (error) {
        console.log(error)
        response.sendStatus(500)
        response.send('Something went wrong at the server...')
    }
})

export default ruter
