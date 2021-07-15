import { database } from '@/lastere/laster'
import { DuplikatError } from '@/lib/errors/database/DuplikatError'
import { IkkeFunnetError } from '@/lib/errors/database/IkkeFunnetError'
import { IAdministrator } from '@/modeller/Administrator/IAdministrator'
import { response, Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { AdministratorTjeneste } from '../../../tjenester/AdministratorTjeneste'

const ruter = Router()

ruter.post('/', async (request, response) => {
    try {
        const administratorTjeneste = new AdministratorTjeneste(database)
        const nyAdministrator = request.body as IAdministrator

        const administrator = await administratorTjeneste.lag(nyAdministrator)
        response.status(StatusCodes.CREATED)
        response.send(administrator)
    } catch (error) {
        if (error instanceof DuplikatError) {
            response.status(StatusCodes.BAD_REQUEST)
            response.send('Denne administratoren er allerede registrert')
        } else {
            response.status(StatusCodes.INTERNAL_SERVER_ERROR)
            response.send('Noe på serveren gikk gærnt...')
        }
    }
})

ruter.get('/:id', async (request, response) => {
    try {
        const administratorTjeneste = new AdministratorTjeneste(database)
        const id: number = Number.parseInt(request.params.id)
        const administrator = await administratorTjeneste.hent(id)
        response.status(StatusCodes.OK)
        response.send(administrator)
    } catch (error) {
        if (error instanceof IkkeFunnetError) {
            response.status(StatusCodes.NOT_FOUND)
            response.send('Vi fant ikke administratoren du prøvde å hente')
        } else {
            response.status(StatusCodes.INTERNAL_SERVER_ERROR)
            response.send('Noe på serveren gikk gærnt...')
        }
    }
})

export default ruter
