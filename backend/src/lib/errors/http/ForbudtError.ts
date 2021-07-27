import { StatusCodes } from 'http-status-codes'
import { ErrorKode } from '../ErrorKoder'
import { ServerErrorMeldinger } from '../meldinger/ServerErrorMeldinger'
import { GrunnError } from './../GrunnError'

/**
 * Error som er ment for hvis en er forbudt fra å hente en ressurs.
 * Statuskode 403 FORBIDDEN følger med erroren.
 *
 * @param melding Melding for å beskrive erroret
 * @param kode Kode for å beskrive erroret
 */
export class ForbudtError extends GrunnError {
    constructor(
        { melding, kode }: { melding: string; kode?: ErrorKode } = { melding: ServerErrorMeldinger.forbudt() }
    ) {
        super({ melding, httpStatus: StatusCodes.FORBIDDEN, kode })
    }
}
