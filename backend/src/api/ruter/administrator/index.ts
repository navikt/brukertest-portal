import { database } from '@/lastere/laster'
import { IAdministrator } from '@/modeller/Administrator/IAdministrator'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { AdministratorTjeneste } from '../../../tjenester/AdministratorTjeneste'

const ruter = Router()

ruter.post('/', async (request, response, next) => {
    try {
        const administratorTjeneste = new AdministratorTjeneste(database)
        const nyAdministrator = request.body as IAdministrator

        const administrator = await administratorTjeneste.lag(nyAdministrator)
        response.status(StatusCodes.CREATED)
        response.send(administrator)
    } catch (error) {
        next(error)
    }
})

ruter.get('/:id', async (request, response, next) => {
    try {
        const administratorTjeneste = new AdministratorTjeneste(database)
        const id: number = Number.parseInt(request.params.id)
        const administrator = await administratorTjeneste.hentEtterId(id)
        response.status(StatusCodes.OK)
        response.send(administrator)
    } catch (error) {
        next(error)
    }
})

ruter.put('/:id', async (request, response, next) => {
    try {
        const administratorTjeneste = new AdministratorTjeneste(database)
        const id: number = Number.parseInt(request.params.id)
        const administrator = request.body as IAdministrator

        const result = await administratorTjeneste.oppdater(id, administrator)
        response.status(StatusCodes.OK).json(result)
    } catch (error) {
        next(error)
    }
})

ruter.delete('/:id', async (request, response, next) => {
    try {
        const administratorTjeneste = new AdministratorTjeneste(database)
        const id: number = Number.parseInt(request.params.id)
        const resultat = await administratorTjeneste.slett(id)
        response.status(StatusCodes.OK).json(resultat)
    } catch (error) {
        next(error)
    }
})

export default ruter
