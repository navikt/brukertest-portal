import typeorm from '@/lastere/typeorm'
import { Connection } from 'typeorm'

export const hentTestDatabase = async (): Promise<Connection> => {
    return await typeorm()
}
