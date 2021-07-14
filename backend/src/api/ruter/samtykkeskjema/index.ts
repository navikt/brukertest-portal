import { response, Router } from 'express'
import { SamtykkeskjemaTjeneste } from '../../../tjenester/SamtykkeskjemaTjeneste'
import { database } from '../../../lastere/laster'
import { ISamtykkeskjema } from '@/modeller/Samtykkeskjema/ISamtykkeskjema'
import { DårligForespørselError } from '../../../lib/errors/rest/DårligForespørselError'
import { StatusCodes } from 'http-status-codes'
import { IkkeFunnetError } from '@/lib/errors/database/IkkeFunnetError'

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

ruter.delete('/:id', async (request, response) => {
    try {
        const samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(database)
        const id: number = Number.parseInt(request.params.id)
        const resultat = await samtykkeskjemaTjeneste.slett(id)
        response.status(StatusCodes.OK).json(resultat)
    } catch (error) {
        if (error instanceof IkkeFunnetError) {
            response.status(StatusCodes.NOT_FOUND)
            response.send('Vi fant ikke samtykkeskjemaet som du prøver å slette')
        } else {
            response.status(StatusCodes.INTERNAL_SERVER_ERROR)
            response.send('Noe på serveren gikk gærnt...')
        }
    }
})

export default ruter
