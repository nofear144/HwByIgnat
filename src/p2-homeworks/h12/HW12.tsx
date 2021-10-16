import React from "react";
import {useDispatch, useSelector} from "react-redux";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import s from "./HW12.module.css";
import {AppStoreType} from '../h10/bll/store';
import { changeThemeC } from "./bll/themeReducer";


const themes = ['dark', 'red', 'some'];

function HW12() {


    const dispatch = useDispatch()
    let themeState = useSelector<AppStoreType, string>(state => state.theme.themes)
    const onChangeCallback = (theme:string) => {
      dispatch(changeThemeC(theme))
    }
  

    return (
        <div className={s[themeState]}>
            <hr/>
            <span className={s[themeState + '-text']}>
                homeworks 12
            </span>
            <SuperRadio
                value={themeState}
                options={themes}
                onChangeOption={onChangeCallback}
            />


            <hr/>
        </div>
    );
}

export default HW12;
