import { database } from '@/lastere/laster'
import { DuplikatError } from '@/lib/errors/database/DuplikatError'
import { IkkeFunnetError } from '@/lib/errors/database/IkkeFunnetError'
import { TomForespørselError } from '@/lib/errors/rest/TomForespørselError'
import { FeilIEntitetError } from '@/lib/errors/validering/FeilIEntitetError'
import { IAdministrator } from '@/modeller/Administrator/IAdministrator'
import { request, response, Router } from 'express'
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
        } else if (error instanceof FeilIEntitetError) {
            response.status(StatusCodes.BAD_REQUEST)
            response.send('Noe er feil i administratoren du prøver å registrere')
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
        const administrator = await administratorTjeneste.hentEtterId(id)
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

ruter.put('/:id', async (request, response) => {
    try {
        const administratorTjeneste = new AdministratorTjeneste(database)
        const id: number = Number.parseInt(request.params.id)
        const administrator = request.body as IAdministrator

        if (!administrator) {
            throw new TomForespørselError('Forespørselen er tom')
        }

        const result = await administratorTjeneste.oppdater(id, administrator)
        response.status(StatusCodes.OK).json(result)
    } catch (error) {
        if (error instanceof FeilIEntitetError) {
            response.status(StatusCodes.BAD_REQUEST)
            response.send('Det var feil i den oppdaterte administratoren')
        } else if (error instanceof TomForespørselError) {
            response.status(StatusCodes.BAD_REQUEST)
            response.send('Forespørselen er tom')
        } else if (error instanceof IkkeFunnetError) {
            response.status(StatusCodes.NOT_FOUND)
            response.send('Fant ikke administratoren du prøvde å oppdatere')
        }
    }
})

ruter.delete('/:id', async (request, response) => {})

export default ruter
