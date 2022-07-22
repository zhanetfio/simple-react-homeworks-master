import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from './Greeting.module.css'

// types
export type UserType = {
    _id:string //fixed
    name: string // fixed
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) //fixed

    const addUserCallback = (name: string) => { // fixed
       const user={
           _id:v1(),
           name,
       }
        setUsers([user, ...users]) // fixed
    }

    return (
        <div className={s.wrapper}>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
