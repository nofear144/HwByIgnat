import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'

import s from './common/c7-SuperRange/SuperRange.module.css'
import { SuperDoubleRange } from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {

    const [value, setValue] = React.useState<number[]>([20, 37]);

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span className={s.spanClass}>{value[0]}</span>
                <SuperRange
                    value={value}
                    setValue={setValue}
                   
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span className={s.spanClass}>{value[0]}</span>
                <SuperDoubleRange

                    value={value}
                    setValue={setValue}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span  className={s.spanClass}>{value[1]}</span>
            </div>


        </div>
    )
}

export default HW11
