import { StatusCodes } from 'http-status-codes'
import { ErrorKode } from '../ErrorKoder'
import { ServerErrorMeldinger } from '../meldinger/ServerErrorMeldinger'
import { GrunnError } from './../GrunnError'

export class ForbudtError extends GrunnError {
    constructor(
        { melding, kode }: { melding: string; kode?: ErrorKode } = { melding: ServerErrorMeldinger.forbudt() }
    ) {
        super({ melding, httpStatus: StatusCodes.FORBIDDEN, kode })
    }
}
