export const ServerErrorMeldinger = {
    uventet: () => 'Uventet server error',
    ikkeFunnet: (entitet: string) => `${entitet} ikke funnet`,
    uatorisert: () => 'Du er uatorisert, vennligst log in',
    ingenAutorasjonshode: () => 'Autorasjonshode ikke lagt ved',
    ugyldigTokenFormat: () => 'Formatet på tokenen er ugyldig',
    ugyldigData: () => 'Formatet på dataen er ugyldig',
    forbudt: () => 'Du er forbudt fra å få tilgang til denne ressursen',
    feilInnholdstype: (gyldigType: string) => `Feil innholdstype. Gyldig innholdstype er: ${gyldigType}`,
    mangler: () => (entitet: string) => `${entitet} mangler fra forespørsselen`
}
