import { Router } from 'express'
import { SamtykkeskjemaTjeneste } from '../../../tjenester/SamtykkeskjemaTjeneste'
import { database } from '../../../lastere/laster'
import { ISamtykkeskjema } from '@/modeller/Samtykkeskjema/ISamtykkeskjema'
import { BadRequestError } from '../../../lib/errors/rest/BadRequestError'

const ruter = Router()

ruter.post('/', async (request, response) => {
    try {
        const samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(database)
        const nyttSamtykkeskjema = request.body as ISamtykkeskjema

        const samtykkeskjema = await samtykkeskjemaTjeneste.lag(nyttSamtykkeskjema)
        return response.send(samtykkeskjema)
    } catch (error) {
        if (error instanceof BadRequestError) {
            console.log(error)
            response.status(400)
            response.send('The request was bad')
        } else {
            response.status(500)
            response.send('Something went wrong at the server...')
        }
    }
})

export default ruter
