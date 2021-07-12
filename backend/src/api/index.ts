import { Router } from 'express'

const offentligeRuter = Router()

const ruter = Router().use('/offentlig', offentligeRuter)

export default Router().use('/api', ruter)