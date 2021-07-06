import {json, Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import ruter from './../api'

export default ({ server }: { server: Application }) => {
    server.use(helmet())

    server.use(cors())

    server.use(json())

    server.use(ruter)

    return server
}