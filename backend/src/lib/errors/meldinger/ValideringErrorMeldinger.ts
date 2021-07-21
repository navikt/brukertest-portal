import { IErrorMelding } from './IErrorMelding'

interface ValideringErrorMeldinger extends IErrorMelding {
    feilTelefonnummer: () => string
}

export const ValideringErrorMelding: ValideringErrorMeldinger = {
    feilTelefonnummer: () => `Telefonummer er på feil format`
}
