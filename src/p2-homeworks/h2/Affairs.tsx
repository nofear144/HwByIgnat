import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType, AffairsType} from './HW2'
import {Button, buttonType} from "./Button";

type AffairsPropsType = { // need to fix any
    data: AffairsType
    setFilter: (arg0: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}


function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    } // need to fix
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }
    let massive = [{callback: setHigh, title: "high"},
        {callback:setAll,title: "all"},
        {callback:setMiddle,title:"middle"},
        {callback:setLow,title:"low"}]
    const mappedButton = massive.map((m:buttonType)=>{
    return <Button title={m.title}
                   callback={m.callback}/>
})

    return (
        <div>

            {mappedAffairs}
            {mappedButton}

            {/*<Button callback={setAll} title={"all"}/>
            <Button callback={setHigh} title={"high"}/>
            <Button callback={setMiddle} title={"middle"}/>
            <Button callback={setLow} title={"low"}/>*/}
        </div>
    )
}

export default Affairs
