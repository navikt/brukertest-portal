import { ValidationError as ClassValidatorError } from 'class-validator'
import { IErrorResponse } from '../IErrorResponse'
import { GrunnError } from '../GrunnError'
import { StatusCodes } from 'http-status-codes'

type ValideringsMelding = Array<ClassValidatorError> | Array<string>

interface IValideringsErrorResponse extends IErrorResponse {
    valideringsMeldinger: Array<string>
}

export class ValideringsError extends GrunnError {
    private valideringsMeldinger: Array<string> = []

    constructor(
        { melding, validering }: { melding: string; validering: ValideringsMelding } = {
            melding: 'Validerings error',
            validering: []
        }
    ) {
        super({ melding, httpStatus: StatusCodes.BAD_REQUEST })
        this.settValideringsMeldinger(validering)
    }

    private settValideringsMeldinger(validering: ValideringsMelding) {
        if (validering.length === 0) {
            return this.settStandardMelding()
        }
        this.valideringsMeldinger = this.lagValideringsMeldinger(validering)
    }

    private lagValideringsMeldinger(valideringer: ValideringsMelding) {
        const meldinger: Array<string> = []
        for (const melding of valideringer) {
            if (melding instanceof ClassValidatorError) {
                for (const nøkkel in melding.constraints) {
                    if (Object.prototype.hasOwnProperty.call(melding.constraints, nøkkel)) {
                        const begrensningsMelding: string = (melding.constraints as any)[nøkkel]
                        melding.push(begrensningsMelding)
                    }
                }
            } else {
                meldinger.push(melding)
            }
        }
        return meldinger
    }

    private settStandardMelding() {
        this.valideringsMeldinger.push('Feilet i valideringen av forespørselen')
    }

    toResponse(): IValideringsErrorResponse {
        return { ...super.toResponse(), valideringsMeldinger: this.valideringsMeldinger }
    }
}
