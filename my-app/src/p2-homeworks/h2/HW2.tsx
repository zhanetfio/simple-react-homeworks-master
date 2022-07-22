import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css'

// types
export type AffairPriorityType = 'high'|'middle'|'low' // fixed
export type AffairType = {
    _id:number
    name:string
    priority:AffairPriorityType
} // fixed
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // fixed
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // fixed
    if (filter === 'all') return affairs
    else return affairs.filter(f=>f.priority === filter)// fixed
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // fixed
    return affairs.filter(f=>f._id !==_id )  // fixed
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // fixed
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // fixed

    return (
        <div className={s.wrapper}>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
