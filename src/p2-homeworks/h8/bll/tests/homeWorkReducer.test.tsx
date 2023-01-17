import React from 'react'
import {homeWorkReducer } from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // fixed

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {


    const newState = homeWorkReducer(initialState, {type: 'SORT', payload: 'up'})

    console.log(newState)
    const result = [1, 3, 4, 5, 2, 0].filter((e, i) => e === newState[i]._id)

    expect(result.length).toBe(newState.length)
    expect(newState[0]._id).toBe(1)
    /* expect(newState[0].name).toBe("Александр")
     expect(newState[1].name).toBe("Виктор")
     expect(newState[2].name).toBe("Дмитрий")
     expect(newState[5].name).toBe("Кот")
 })*/
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT', payload: 'down'})

    console.log(newState)

    expect(newState[5].name).toBe("Александр")
    expect(newState[4].name).toBe("Виктор")
    expect(newState[3].name).toBe("Дмитрий")
    expect(newState[0].name).toBe("Кот")
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'CHECK', payload: 18})

    console.log(newState)

    expect(newState.length).toBe(4)


})
