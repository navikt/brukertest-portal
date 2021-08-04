import { Xknapp } from 'nav-frontend-ikonknapper'
import { Checkbox } from 'nav-frontend-skjema'
import React, { ReactElement } from 'react'

export default function CheckboxMedLabel({label}: {label: string}): ReactElement {
    return (
        <div className="checkbox-med-label-container">
            <Checkbox label={label}/>
            <Xknapp />
        </div>
    )
}