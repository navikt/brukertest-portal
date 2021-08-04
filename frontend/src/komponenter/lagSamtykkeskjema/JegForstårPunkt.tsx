import { Xknapp } from 'nav-frontend-ikonknapper'
import { Checkbox } from 'nav-frontend-skjema'
import React, { ReactElement } from 'react'

export default function JegForstårPunkt({label}: {label: string}): ReactElement {
    return (
        <div className="jeg-forstaar-punkt-container">
            <Checkbox label={label}/>
            <Xknapp />
        </div>
    )
}