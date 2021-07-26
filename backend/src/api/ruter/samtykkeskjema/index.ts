import { ISamtykkeskjema } from '@/modeller/Samtykkeskjema/ISamtykkeskjema'
import { Samtykkeskjema } from '@/modeller/Samtykkeskjema/SamtykkeskjemaEntitet'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { database } from '../../../lastere/laster'
import { SamtykkeskjemaTjeneste } from '../../../tjenester/SamtykkeskjemaTjeneste'

const ruter = Router()

ruter.post('/', async (request, response, next) => {
    try {
        const nyttSamtykkeskjema = request.body as ISamtykkeskjema
        const samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(database, nyttSamtykkeskjema.administrator)

        // TODO: legge inn administrator fra evt. Token

        const samtykkeskjema = await samtykkeskjemaTjeneste.lag(nyttSamtykkeskjema)
        response.status(StatusCodes.CREATED)
        response.send(samtykkeskjema)
    } catch (error) {
        next(error)
    }
})

ruter.get('/', async (request, response, next) => {
    try {
        const samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(database, request.body.administrator)
        const samtykkeskjemaer: Samtykkeskjema[] | undefined = await samtykkeskjemaTjeneste.hent()
        response.status(StatusCodes.OK).json(samtykkeskjemaer)
    } catch (error) {
        next(error)
    }
})

ruter.get('/:id', async (request, response, next) => {
    try {
        const samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(database, request.body.administrator)
        const id: number = Number.parseInt(request.params.id)
        const samtykkeskjema = await samtykkeskjemaTjeneste.hentEtterId(id)
        response.status(StatusCodes.OK)
        response.send(samtykkeskjema)
    } catch (error) {
        next(error)
    }
})

ruter.put('/:id', async (request, response, next) => {
    try {
        const samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(database, request.body.administrator)
        const id: number = Number.parseInt(request.params.id)
        const samtykkeskjema = request.body as ISamtykkeskjema

        const result = await samtykkeskjemaTjeneste.oppdater(id, samtykkeskjema)
        response.status(StatusCodes.OK).json(result)
    } catch (error) {
        next(error)
    }
})

ruter.delete('/:id', async (request, response, next) => {
    try {
        const samtykkeskjemaTjeneste = new SamtykkeskjemaTjeneste(database, request.body.administrator)
        const id: number = Number.parseInt(request.params.id)
        const resultat = await samtykkeskjemaTjeneste.slett(id)
        response.status(StatusCodes.OK).json(resultat)
    } catch (error) {
        next(error)
    }
})

export default ruter
