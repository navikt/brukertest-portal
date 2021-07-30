import React from 'react'
import { HovedomradeProps } from './Hovedomrade'

export default function Hovedinnhold(props: HovedomradeProps): React.ReactElement {
    return <div className="hovedinnhold">{props.hovedInnhold}</div>
}
