import { StatusCodes } from 'http-status-codes'
import { ErrorKode } from '../ErrorKoder'
import { GrunnError } from '../GrunnError'

/**
 * Error som er ment for en ugyldig eller dårlig forespørsel av ressurser.
 * Statuskode 400 BAD_REQUEST følger med erroren.
 *
 * @param melding Melding for å beskrive erroret
 * @param kode Kode for å beskrive erroret
 */
export class DårligForespørselError extends GrunnError {
    constructor({ melding, kode }: { melding: string; kode?: ErrorKode }) {
        super({ melding: melding, httpStatus: StatusCodes.BAD_REQUEST, kode })
    }
}
