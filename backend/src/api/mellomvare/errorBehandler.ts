import { NextFunction, Request, Response } from 'express'
import { GrunnError } from '../../lib/errors/GrunnError'
import { QueryFailedError } from 'typeorm'
import { DårligForespørselError } from '../../lib/errors/http/DaarligForespoerselError'
import { ServerErrorMeldinger } from '@/lib/errors/meldinger/ServerErrorMeldinger'
import { StatusCodes } from 'http-status-codes'

/**
 * Ansvaret for å behandle alle error som kommer til HTTP endepunktene.
 * Utifra errorene blir en response med status og grunn sendt til rekvirenten.
 * Hvis man får en "QueryFailedError" fra databasen, vil en "DårligForespørselError"
 * bli generert og status og grunn blir sendt til rekvirenten.
 */
export const errorBehandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof GrunnError) {
        return response.status(error.getHttpStatus()).json(error.toResponse())
    }

    if (error instanceof QueryFailedError) {
        const err = new DårligForespørselError({ melding: ServerErrorMeldinger.ugyldigData() })
        return response.status(err.getHttpStatus()).json(err.toResponse())
    }

    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Noe gikk gærnt.. Prøv igjen senere')
}
