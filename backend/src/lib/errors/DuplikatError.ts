import { StatusCodes } from 'http-status-codes'
import { ErrorKode } from './ErrorKoder'
import { GrunnError } from './GrunnError'

/**
 * Error som er ment for hvis noe er duplikat. Statuskode 400 BAD_REQUEST
 * følger med erroren.
 *
 * @param melding Melding for å beskrive erroret
 * @param kode Kode for å beksrive erroret
 */
export class DuplikatError extends GrunnError {
    constructor({ melding, kode }: { melding: string; kode?: ErrorKode }) {
        super({ melding, httpStatus: StatusCodes.BAD_REQUEST, kode })
    }
}
