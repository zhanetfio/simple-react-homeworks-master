import React from 'react'
import * as url from "url";

type MessageType = {
    message: string,
    avatar: any,
    name: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div>
            <div>{props.avatar}</div>
            <div>{props.name} </div>
            <div>{props.message}</div>
            <div>{props.time}</div>
        </div>
    )
}

export default Message
