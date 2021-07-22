import { CheckboksPanelGruppe } from 'nav-frontend-skjema'
import Tekstomrade, { BoldRule } from 'nav-frontend-tekstomrade'
import React, { ReactElement } from 'react'

//TODO Finne et mer passende navn for komponentet
export default function JegForstårSteg(): ReactElement {
    return (
        <>
            <CheckboksPanelGruppe 
                legend={
                    <Tekstomrade rules={[BoldRule]}>
                        {'_Jeg forstår:_'}
                    </Tekstomrade>
                }
                checkboxes={[
                    {
                        label: 'At det er frivillig å delta, og at jeg når som helst kan trekke meg',
                        value: 'trekke', 
                        id: 'trekke1'
                    },
                    {
                        label: 'At jeg når som helst kan avstå fra å svare på spørsmål',
                        value: 'avstå',
                        id: 'avstå1'
                    },
                    {
                        label: 'At jeg når som helst kan trekke tilbake det jeg har sagt',
                        value: 'trekke',
                        id: 'trekke1'
                    },
                    {
                        label: 'At jeg når som helst kan be dere slette mine personlige data',
                        value: 'slette',
                        id: 'slette1'
                    }
                ]}
                onChange={() => {
                    //Veldig fin tom funskjon
                }}
            />
        </>
    )
}