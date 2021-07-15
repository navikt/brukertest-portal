import { database } from '@/lastere/laster'
import { DuplikatError } from '@/lib/errors/database/DuplikatError'
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

export default ruter
