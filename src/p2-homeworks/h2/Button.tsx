import React from "react";

export type buttonType = {
    title:string
    callback:()=>void
}


export function Button (props:buttonType) {
    return <button onClick={()=>{props.callback()}}>
        {props.title}
    </button>
}