import React from 'react'
import s from './Message.module.css'

type MessageType = {
    message: string,
    avatar: string,
    name: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.wrapper}>
            <img alt={'avatar'} src={props.avatar} className={s.avatar}></img>
            <div className={s.message_wrapper}>
                <div className={s.name}>{props.name} </div>
                <div className={s.message_time}>
                    <div className={s.message}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
