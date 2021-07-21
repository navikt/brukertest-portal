import { Connection, Repository } from 'typeorm'
import { Administrator } from '../../../src/modeller/Administrator/AdministratorEntitet'

export const lagDummyAdministrator = async (database: Connection): Promise<Administrator> => {
    const oppbevaringssted = database.getRepository(Administrator)

    const administrator = new Administrator()
    administrator.fornavn = 'Ola'
    administrator.etternavn = 'Nordmann'
    administrator.team = 'Det beste teamet'
    administrator.avdeling = 'Den beste avdelingen'
    administrator.epost = 'ola.nordmann@nav.no'
    administrator.produktområde = 'Norges produkter betat av skattebetalerne'
    administrator.telefon = '12345678'
    administrator.samtykkeskjemaer = []

    oppbevaringssted.create(administrator)
    return await oppbevaringssted.save(administrator)
}
