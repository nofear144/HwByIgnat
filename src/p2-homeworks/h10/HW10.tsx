import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {initStateType, loadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';
import s from "./loader.module.css"

function HW10() {
    let isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    let dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)

    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div className={s.loader}></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }


        </div>
    )
}

export default HW10


