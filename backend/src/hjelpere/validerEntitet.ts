import { validate, ValidatorOptions } from 'class-validator'
import { FeilIEntitetError } from '../lib/errors/validering/FeilIEntitetError'

export const validerEntitet = async (entitet: object, valideringsAlternativer?: ValidatorOptions) => {
    const validering = await validate(entitet, valideringsAlternativer)
    const erGyldig = validering.length === 0

    if (!erGyldig) {
        const navn = validering[0].target?.constructor.name
        throw new FeilIEntitetError(`Validering feilet for ${navn}`)
    }
}
