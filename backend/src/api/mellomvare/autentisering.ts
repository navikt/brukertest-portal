import { NextFunction, Request, Response } from 'express'
import database from '../../lastere/typeorm'
import { AdministratorAuthTheneste } from '../../tjenester/autentisering/AdministratorAuthTjeneste'

export const sjekkAdministratorAuth = async (req: Request, res: Response, next: NextFunction) => {
    const administratorAuthTjeneste = new AdministratorAuthTheneste()
    try {
        const decoded = administratorAuthTjeneste.verifiserToken(req.headers.authorization)
        res.send(decoded)
    } catch (error) {
        next(error)
    }
}
