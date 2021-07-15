import { Administrator } from '../Administrator/AdministratorEntitet'
import { TypeSamtykkeskjema } from './TypeSamtykkeskjema'

export interface ISamtykkeskjema {
    administrator: Administrator
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
