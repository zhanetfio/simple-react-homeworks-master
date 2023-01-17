import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter:FilterType)=>void
    deleteAffairCallback: (_id:number)=>void
    filter:FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // fixed
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    const allBtn= s.button + " "+(props.filter ==='all' ? s.active :'')
    const highBtn= s.button + " "+(props.filter ==='high' ? s.active :'')
    const middleBtn= s.button + " "+(props.filter ==='middle' ? s.active :'')
    const lowBtn= s.button + " "+(props.filter ==='low' ? s.active :'')

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={allBtn}>All</button>
            <button onClick={setHigh} className={highBtn}>High</button>
            <button onClick={setMiddle} className={middleBtn}>Middle</button>
            <button onClick={setLow} className={lowBtn}>Low</button>
        </div>
    )
}

export default Affairs
