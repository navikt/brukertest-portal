import { request, response, Router } from 'express'
import { SamtykkeskjemaTjeneste } from '../../../tjenester/SamtykkeskjemaTjeneste'
import { database } from '../../../lastere/laster'
import { ISamtykkeskjema } from '@/modeller/Samtykkeskjema/ISamtykkeskjema'
import { DårligForespørselError } from '../../../lib/errors/rest/DårligForespørselError'
import { TomForespørselError } from 'lib/errors/rest/TomForespørselError'
import { StatusCodes } from 'http-status-codes'
import { IkkeFunnetError } from '@/lib/errors/database/IkkeFunnetError'
import { FeilIEntitetError } from '@/lib/errors/validering/FeilIEntitetError'

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

ruter.get('/:id', async (request, response) => {
    try {
        const samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(database)
        const id: number = Number.parseInt(request.params.id)
        const samtykkeskjema = await samtykkeskjemaTjeneste.hent(id)
        response.status(StatusCodes.OK)
        response.send(samtykkeskjema)
    } catch (error) {
        if (error instanceof IkkeFunnetError) {
            response.status(StatusCodes.NOT_FOUND)
            response.send('Vi fant ikke samtykkeskjemaet du prøver å hente')
        } else {
            response.status(StatusCodes.INTERNAL_SERVER_ERROR)
            response.send('Noe på serveren gikk gærnt...')
        }
    }
})

ruter.put('/:id', async (request, response) => {
    try {
        const samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(database)
        const id: number = Number.parseInt(request.params.id)
        const samtykkeskjema = request.body as ISamtykkeskjema

        if (!samtykkeskjema) {
            throw new TomForespørselError('Forespørselen er tom')
        }

        const result = await samtykkeskjemaTjeneste.oppdater(id, samtykkeskjema)
        response.status(StatusCodes.OK).json(result)
    } catch (error) {
        if (error instanceof FeilIEntitetError) {
            response.status(StatusCodes.BAD_REQUEST)
            response.send('Det var feil i det oppdaterte samtykkeskjemaet')
        } else if (error instanceof TomForespørselError) {
            response.status(StatusCodes.BAD_REQUEST)
            response.send('Forespørselen er tom')
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
