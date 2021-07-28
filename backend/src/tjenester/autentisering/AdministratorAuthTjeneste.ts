import { UatorisertError } from '../../lib/errors/http/UatorisertError'
import { ServerErrorMeldinger } from '../../lib/errors/meldinger/ServerErrorMeldinger'
import { JsonWebTokenError, verify } from 'jsonwebtoken'

export class AdministratorAuthTheneste {
    constructor() {}

    verifiserToken(autorisasjonsSkjema: string | undefined) {
        if (!autorisasjonsSkjema) {
            throw new UatorisertError({ melding: ServerErrorMeldinger.ingenAutorasjonshode() })
        }

        const token = this.hentBearerToken(autorisasjonsSkjema)

        if (!token) {
            throw new UatorisertError({ melding: ServerErrorMeldinger.ugyldigTokenFormat() })
        }

        try {
            const decoded = verify(token, process.env.AZURE_APP_CLIENT_SECRET! || process.env.AAD_CLIENT_SECRET!)

            if (!decoded) {
                throw new UatorisertError({ melding: ServerErrorMeldinger.ugyldigToken() })
            }

            return decoded
        } catch (error) {
            if (error instanceof JsonWebTokenError) {
                throw new UatorisertError({ melding: ServerErrorMeldinger.ugyldigTokenFormat() })
            }
            throw error
        }
    }

    private hentBearerToken(bearerSkjema: string): string {
        return bearerSkjema.split(' ')[1]
    }
}
