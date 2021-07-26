import { Router } from 'express'
import samtykkeskjemaRuter from './ruter/samtykkeskjema'
import administratorRuter from './ruter/administrator'
import { hastighetsBegrensere } from './mellomvare/hastighetsBegrenser'
import { errorBehandler } from './mellomvare/errorBehandler'

const offentligeRuter = Router()
offentligeRuter.use(hastighetsBegrensere.apiBegrenser)
offentligeRuter.use('/samtykkeskjema', samtykkeskjemaRuter)
offentligeRuter.use('/administrator', administratorRuter)

const ruter = Router().use('/offentlig', offentligeRuter)

export default Router().use('/api', ruter).use(errorBehandler)
