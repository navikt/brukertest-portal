import { TypeSamtykkeskjema } from './TypeSamtykkeskjema'

export interface ISamtykkeskjema {
    tittel: string
    bakgrunn: string
    skalPubliseres: boolean
    formål: string
    startDato?: Date
    sluttDato?: Date
    spørreOm: string
    harSamtykket: boolean
    typeSamtykkeskjema: TypeSamtykkeskjema
}
