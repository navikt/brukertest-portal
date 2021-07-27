import { validate, ValidatorOptions } from 'class-validator'
import { ValideringsError } from '../lib/errors/validering/ValideringsError'

/**
 * Har ansvaret for å validere en entitet, hvis ikke entiteten er gyldig vil en
 * "ValideringsError" bli kastet.
 *
 * @param entitet Entiteten som man vil validerer
 * @param valideringsAlternativer Alternativer for valideringen av en entitet.
 */
export const validerEntitet = async (entitet: object, valideringsAlternativer?: ValidatorOptions) => {
    const validering = await validate(entitet, valideringsAlternativer)
    const erGyldig = validering.length === 0

    if (!erGyldig) {
        const navn = validering[0].target?.constructor.name
        throw new ValideringsError({ melding: `Validering feilet for ${navn}`, validering: validering })
    }
}
