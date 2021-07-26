import { StatusCodes } from 'http-status-codes'
import { ErrorKode } from './ErrorKoder'
import { IErrorResponse } from './IErrorResponse'
import { ServerErrorMeldinger } from './meldinger/ServerErrorMeldinger'

export class BaseError extends Error {
    private httpStatus: number = StatusCodes.INTERNAL_SERVER_ERROR
    private kode: ErrorKode = 'UVENTET'

    constructor({ melding, httpStatus, kode }: { melding?: string; httpStatus?: StatusCodes; kode?: ErrorKode }) {
        super(melding ? melding : ServerErrorMeldinger.uventet())

        if (httpStatus) {
            this.httpStatus = httpStatus
        }

        if (kode) {
            this.kode = kode
        }
    }

    private getStatusKodeNavn(): string {
        return StatusCodes[this.httpStatus]
    }

    getHttpStatus(): number {
        return this.httpStatus
    }

    toResponse(): IErrorResponse {
        return {
            melding: this.message,
            status: this.getStatusKodeNavn(),
            statusKode: this.httpStatus,
            kode: this.kode
        }
    }
}
