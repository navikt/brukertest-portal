import { Router } from 'express'
import samtykkeskjemaRuter from './ruter/samtykkeskjema'

const offentligeRuter = Router()
offentligeRuter.use('/samtykkeskjema', samtykkeskjemaRuter)

const ruter = Router().use('/offentlig', offentligeRuter)

export default Router().use('/api', ruter)
