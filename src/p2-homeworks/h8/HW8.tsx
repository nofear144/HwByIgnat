import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "../h9/someFlex.module.css"

export type UserType = {
    _id: number
    name: string
    age: number
}
export type AcTypes = {
    type: "sort" | "check" | "sortDown"
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {

    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            {p.name} {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort'}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: 'check'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sortDown'}))

    return (
        <div>
            <hr/>
            homeworks 8


            {finalPeople}
            <div className={s.buttonBoxEight}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={check}>18+</SuperButton></div>
            </div>

        </div>
    )
}

export default HW8
