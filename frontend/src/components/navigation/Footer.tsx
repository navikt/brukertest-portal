import React from 'react'
import { ReactComponent as NavLogoSort } from '../../style/assets/Sort.svg'
import Tekstomrade from 'nav-frontend-tekstomrade'
import '../../style/less/components/navigation/footer.less'
import Lenke from 'nav-frontend-lenker'

export default function Footer(): React.ReactElement {
    return (
        <div className="footer">
            <NavLogoSort className="logo" />
            <Tekstomrade className="infotekst">
                Innbyggerpanelet - en tjeneste fra NAV
            </Tekstomrade>
            <Lenke href="#" className="lenkeBottom">
                Mer om personvern
            </Lenke>
        </div>
    )
}
