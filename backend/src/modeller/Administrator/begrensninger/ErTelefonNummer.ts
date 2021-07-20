import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator'
import parsePhoneNumberFromString from 'libphonenumber-js'
import { ValideringErrorMelding } from '../../../lib/errors/meldinger/ValideringErrorMeldinger'

@ValidatorConstraint({ async: true })
export class ErTelefonNummerBegrensning implements ValidatorConstraintInterface {
    async validate(telefonnummer: string, args: ValidationArguments) {
        const [beslektetEindomsNavn] = args.constraints
        const eierId: number = (args.object as any)[beslektetEindomsNavn]

        if (parsePhoneNumberFromString(telefonnummer) === undefined) return false
        return true
    }

    defaultMessage() {
        return ValideringErrorMelding.feilTelefonnummer()
    }
}

export function ErTelefonnummer(property: string, validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            async: true,
            name: 'ErTelefonnummer',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [property],
            validator: ErTelefonNummerBegrensning
        })
    }
}
