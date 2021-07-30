import { StatusCodes } from 'http-status-codes'
import { ErrorKode } from '../ErrorKoder'
import { GrunnError } from '../GrunnError'
import { ServerErrorMeldinger } from '../meldinger/ServerErrorMeldinger'

export class UatorisertError extends GrunnError {
    constructor(
        { melding, kode }: { melding: string; kode?: ErrorKode } = { melding: ServerErrorMeldinger.uatorisert() }
    ) {
        super({ melding, httpStatus: StatusCodes.UNAUTHORIZED, kode })
    }
}
