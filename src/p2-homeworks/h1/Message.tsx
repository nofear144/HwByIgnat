import React from 'react'
import classes from "./Message.module.css"

type MessageDataPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

export function Message(props: MessageDataPropsType) {
    return (
        <div className={classes.grid}>
            <img src={props.avatar} alt="Madara picture"/>
            <div className={classes.dialog}>
                <div className={classes.name}>
                    {props.name}
                </div>
                <div className={classes.message}>
                    {props.message}
                </div>
                <div className={classes.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
