import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // fixed
    deleteAffairCallback: (_id: number) => void // fixed
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// fixed

    return (
        <div className={s.list}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={s.priority}>{props.affair.priority}</div>

            <button onClick={deleteCallback} className={s.delBtn}>X</button>
        </div>
    )
}

export default Affair
