import { Administrator } from '../modeller/Administrator/AdministratorEntitet'

export interface IHarEier<T> {
    eier: Administrator | undefined
}
