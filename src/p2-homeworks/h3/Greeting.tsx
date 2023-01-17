import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // fixed
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) =>void// fixed
    addUser: ()=>void // fixed
    error: string // fixed
    totalUsers: number // fixed
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error ? s.errorInput : s.input  // fixed with (?:)

    return (
        <div className={s.greeting}>
            <div >
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={s.error}>{error}</span>
            </div>
            <button onClick={addUser} className={s.button}>add</button>
            <span className={s.count}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
