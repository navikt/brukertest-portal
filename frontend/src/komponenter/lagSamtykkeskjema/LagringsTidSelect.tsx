import { Select } from 'nav-frontend-skjema'
import React, { Dispatch, ReactElement, SetStateAction } from 'react'

export default function LagringsTidSelect(
    {
        lagringsTid,
        lagringsTidDispatch,
    }: {
        lagringsTid: number,
        lagringsTidDispatch: Dispatch<SetStateAction<number>>
    }
): ReactElement {
    return (
        <Select 
            className="lagrings-tid-select" 
            value={lagringsTid}
            onChange={e => {lagringsTidDispatch(parseInt(e.target.value))}}
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </Select>
    )
}