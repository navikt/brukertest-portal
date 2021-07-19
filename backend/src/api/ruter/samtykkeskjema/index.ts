import { request, response, Router } from 'express'
import { SamtykkeskjemaTjeneste } from '../../../tjenester/SamtykkeskjemaTjeneste'
import { database } from '../../../lastere/laster'
import { ISamtykkeskjema } from '@/modeller/Samtykkeskjema/ISamtykkeskjema'
import { DårligForespørselError } from '../../../lib/errors/rest/DårligForespørselError'
import { TomForespørselError } from 'lib/errors/rest/TomForespørselError'
import { StatusCodes } from 'http-status-codes'
import { IkkeFunnetError } from '@/lib/errors/database/IkkeFunnetError'
import { FeilIEntitetError } from '@/lib/errors/validering/FeilIEntitetError'
import { DuplikatError } from '@/lib/errors/database/DuplikatError'
import { IngenEierError } from '@/lib/errors/IngenEierError'
import { Samtykkeskjema } from '@/modeller/Samtykkeskjema/SamtykkeskjemaEntitet'

const ruter = Router()

ruter.post('/', async (request, response) => {
    try {
        const nyttSamtykkeskjema = request.body as ISamtykkeskjema
        const samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(database, nyttSamtykkeskjema.administrator)

        // TODO: legge inn administrator fra evt. Token

        const samtykkeskjema = await samtykkeskjemaTjeneste.lag(nyttSamtykkeskjema)
        response.status(StatusCodes.CREATED)
        response.send(samtykkeskjema)
    } catch (error) {
        if (error instanceof DuplikatError) {
            response.status(StatusCodes.BAD_REQUEST)
            response.send('Dette samtykkeskjemaet finnes allerede')
        } else if (error instanceof IkkeFunnetError) {
            response.status(StatusCodes.BAD_REQUEST)
            response.send('Ingen eier er tilkoblet dette samtykkeskjemaet')
        } else if (error instanceof DårligForespørselError) {
            response.status(StatusCodes.BAD_REQUEST)
            response.send('Noe i forespørselen din er ikke riktig')
        } else {
            response.status(StatusCodes.INTERNAL_SERVER_ERROR)
            response.send('Noe på serveren gikk gærnt...')
        }
    }
})

ruter.get('/', async (request, response) => {
    try {
        const samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(database, request.body.administrator)
        const samtykkeskjemaer: Samtykkeskjema[] | undefined = await samtykkeskjemaTjeneste.hent()
        response.status(StatusCodes.OK).json(samtykkeskjemaer)
    } catch (error) {
        if (error instanceof IkkeFunnetError) {
            response.status(StatusCodes.NOT_FOUND)
            response.send('Fant ingen samtykkeskjemaer')
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
        const samtykkeskjema = await samtykkeskjemaTjeneste.hentEtterId(id)
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
