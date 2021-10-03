import React from 'react';
import { ChangeEvent } from 'react';
import s from "../c7-SuperRange/SuperRange.module.css"

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number) => void
    value:number
    setValue1:(value:number)=>void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,setValue1
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
let onChangeVal2=(e:ChangeEvent<HTMLInputElement>)=>{

    onChangeRange && onChangeRange(+e.currentTarget.value)
    setValue1(+e.currentTarget.value)

}
    return (
        <>
            <input type={"range"}
                   onChange={onChangeVal2}
                   value={value}
           />
        </>
    )
}

export default SuperDoubleRange
