import React from 'react'
import Message from "./Message";
import "./Message.module.css"


const messageData = {
    avatar: 'http://pm1.narvii.com/6417/5a55f4961e17a74d431461ca8a24d4e647a616f0_00.jpg',
    name: 'Madara',
    message: '"Dont improvise what you cannot handle.',
    time: '22:00',
}

function HW1() {

    return (
        <div>
            <hr/>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>

            <hr/>
        </div>
    )
}

export default HW1
