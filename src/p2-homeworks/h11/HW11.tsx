import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span className={s.spanClass}>{value1}</span>
                <SuperRange
                   setValue1={setValue1}
                   
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span className={s.spanClass}>{value1}</span>
                <SuperDoubleRange
                    setValue1={setValue1}
                    value={value1}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span  className={s.spanClass}>{value2}</span>
            </div>


        </div>
    )
}

export default HW11
