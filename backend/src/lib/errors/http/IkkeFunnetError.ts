import { StatusCodes } from 'http-status-codes'
import { ErrorKode } from '../ErrorKoder'
import { GrunnError } from '../GrunnError'

/**
 * Error som er ment hvor hvis en ressurs ikke er funnet. Statuskode
 * 404 NOT_FOUND følger med erroren.
 *
 * @param melding Melding for å beskrive erroret
 * @param kode KOde for å beskrive erroret
 */
export class IkkeFunnetError extends GrunnError {
    constructor({ melding, kode }: { melding: string; kode?: ErrorKode }) {
        super({ melding: melding, httpStatus: StatusCodes.NOT_FOUND, kode })
    }
}
