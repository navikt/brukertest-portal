import { StatusCodes } from 'http-status-codes'
import { ErrorKode } from '../ErrorKoder'
import { GrunnError } from '../GrunnError'

export class DårligForespørselError extends GrunnError {
    constructor({ melding, kode }: { melding: string; kode?: ErrorKode }) {
        super({ melding: melding, httpStatus: StatusCodes.BAD_REQUEST, kode })
    }
}
