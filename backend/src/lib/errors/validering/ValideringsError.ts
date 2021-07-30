import { ValidationError as ClassValidatorError } from 'class-validator'
import { IErrorResponse } from '../IErrorResponse'
import { GrunnError } from '../GrunnError'
import { StatusCodes } from 'http-status-codes'

type ValideringsMelding = Array<ClassValidatorError> | Array<string>

interface IValideringsErrorResponse extends IErrorResponse {
    valideringsMeldinger: Array<string>
}

/**
 * Error for feil i valideringen av en entitet. Siden en entitet kan ha flere
 * feil, blir et array med validerings meldinger lagt med erroren. Som standard
 * blir HTTP kode 400 BAD_REQUEST lagt ved.
 */
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

    /**
     * Har ansvaret for å sette de forskjellige validerings meldingene.
     * Hvis listen som funskjonen tar inn er lik 0, vil en standard melding bli satt.
     *
     * @param validering Array av validerings meldinger
     */
    private settValideringsMeldinger(validering: ValideringsMelding) {
        if (validering.length === 0) {
            return this.settStandardMelding()
        }
        this.valideringsMeldinger = this.lagValideringsMeldinger(validering)
    }

    /**
     * Har ansvaret for å lage et array av meldinger ut ifra et array av validerings meldinger.
     * Sorterer ut ValidationError's fra class-validator og ekstrakter meldingene fra disse.
     *
     * @param valideringer Array av validerings meldinger
     * @returns Array av meldinger
     */
    private lagValideringsMeldinger(valideringer: ValideringsMelding) {
        const meldinger: Array<string> = []
        for (const melding of valideringer) {
            if (melding instanceof ClassValidatorError) {
                for (const nøkkel in melding.constraints) {
                    if (Object.prototype.hasOwnProperty.call(melding.constraints, nøkkel)) {
                        const begrensningsMelding: string = (melding.constraints as any)[nøkkel]
                        meldinger.push(begrensningsMelding)
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
