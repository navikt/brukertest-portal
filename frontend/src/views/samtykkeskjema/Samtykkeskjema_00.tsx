import React from 'react'
import Hovedomrade from '../../components/hovedomrade/Hovedomrade'
import Footer from '../../components/navigation/Footer'
import TopBar from '../../components/navigation/TopBar'
import '../../style/less/views/samtykkeskjema.less'

export default function Samtykkeskjema(): React.ReactElement {
    return (
        <div className="samtykkeskjema">
            <TopBar />
            <Hovedomrade />
            <Footer />
        </div>
    )
}
