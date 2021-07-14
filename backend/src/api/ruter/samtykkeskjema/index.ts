import { response, Router } from 'express'
import { SamtykkeskjemaTjeneste } from '../../../tjenester/SamtykkeskjemaTjeneste'
import { database } from '../../../lastere/laster'
import { ISamtykkeskjema } from '@/modeller/Samtykkeskjema/ISamtykkeskjema'
import { DårligForespørselError } from '../../../lib/errors/rest/DårligForespørselError'
import { StatusCodes } from 'http-status-codes'

const ruter = Router()

ruter.post('/', async (request, response) => {
    try {
        const samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(database)
        const nyttSamtykkeskjema = request.body as ISamtykkeskjema

        const samtykkeskjema = await samtykkeskjemaTjeneste.lag(nyttSamtykkeskjema)
        response.status(StatusCodes.OK)
        response.send(samtykkeskjema)
    } catch (error) {
        if (error instanceof DårligForespørselError) {
            response.status(StatusCodes.BAD_REQUEST)
            response.send('Forespørselen var dårlig')
        } else {
            response.status(StatusCodes.INTERNAL_SERVER_ERROR)
            response.send('Noe på serveren gikk gærnt...')
        }
    }
})

export default ruter
