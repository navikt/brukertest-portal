import { IErrorMelding } from './IErrorMelding'

interface ValideringErrorMeldinger extends IErrorMelding {
    feilTelefonnummer: () => string
}

export const ValideringErrorMelding: ValideringErrorMeldinger = {
    feilTelefonnummer: () => 'Telefonnummeret er på feil format'
}
