import { StatusCodes } from 'http-status-codes'
import { ErrorKode } from '../ErrorKoder'
import { GrunnError } from '../GrunnError'

export class IkkeFunnetError extends GrunnError {
    constructor({ melding, kode }: { melding: string; kode?: ErrorKode }) {
        super({ melding: melding, httpStatus: StatusCodes.NOT_FOUND, kode })
    }
}
