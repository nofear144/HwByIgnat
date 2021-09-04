import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from "./pages/styles.module.css"


export function Header() {
    /*let[toogle,setToggle]=useState(false)

    const toogleMenu = ()=>{setToggle(!toogle)}
    const toogleOpen= ()=> {setToggle(true)}
    const toogleClose = () => {setToggle(false)}*/

    return (
        <div>

            <div className={s.menu}>
                {/*{toogle &&*/}

                <NavLink className={s.preJun} to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
                <NavLink className={s.jun} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={s.junPlus} to={PATH.JUNIOR_PLUS}>Junior+</NavLink>


                {/*}*/}
                <button

                    className={s.button}
                    //onClick={toogleMenu}
                    // onMouseEnter={toogleOpen}
                    // onMouseLeave={toogleClose}
                >
                </button>
            </div>
        </div>

    )
}
