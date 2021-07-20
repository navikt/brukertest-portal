import React from 'react'
import { ReactComponent as NavLogoSort } from '../../style/assets/Sort.svg'
import Tekstomrade from 'nav-frontend-tekstomrade'
import Lenke from 'nav-frontend-lenker'

export default function Footer(): React.ReactElement {
    return (
        <div className="footer">
            <div className="logo_info">
                <NavLogoSort className="logo" />
                <Tekstomrade>Innbyggerpanelet - en tjeneste fra NAV</Tekstomrade>
            </div>
            <Lenke href="#" className="lenkeBottom">
                Mer om personvern
            </Lenke>
        </div>
    )
}
