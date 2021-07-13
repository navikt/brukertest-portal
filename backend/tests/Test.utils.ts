import { Repository } from 'typeorm'

export async function renskDatabaseEntitetTabell<T>(entitetsOppbevaringssted: Repository<T>) {
    return await entitetsOppbevaringssted.remove(await entitetsOppbevaringssted.find())
}
