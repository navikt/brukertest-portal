import { Router } from 'express'
import samtykkeskjemaRuter from './ruter/samtykkeskjema'
import administratorRuter from './ruter/administrator'
import { hastighetsBegrensere } from './mellomvare/hastighetsBegrenser'
import { errorBehandler } from './mellomvare/errorBehandler'
import { sjekkAdministratorAuth } from './mellomvare/autentisering'

const offentligeRuter = Router()
offentligeRuter.use(hastighetsBegrensere.apiBegrenser)
//offentligeRuter.use(sjekkAdministratorAuth)
offentligeRuter.use('/samtykkeskjema', samtykkeskjemaRuter)
offentligeRuter.use('/administrator', administratorRuter)

const ruter = Router().use('/offentlig', offentligeRuter)

export default Router().use('/isAlive', (req, res) => {
    res.send('Alive').status(200)
}).use('/api', ruter).use(errorBehandler)
