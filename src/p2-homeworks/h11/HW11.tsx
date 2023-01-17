import React, {useState} from 'react'
import s from '../h11/HW11.module.css'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value, setValue] = useState<[number,number]>([0,100])


    const onChangeRangeHandler=(newValue:number)=>{
        setValue([newValue,value[1]])
    }

    const onChangeDoubleRangeHandler=(newValue:[number,number])=>{
        setValue(newValue as [number,number])

    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <div className={s.value} >{value[0]}</div>
                <SuperRange
                    onChangeRange={onChangeRangeHandler}
                    value={value[0]}
                    // сделать так чтоб value1 изменялось(Done)
                />
            </div>

            <div style={{display: 'inline'}}>
                <div className={s.value} >{value[0]}</div>
                <SuperDoubleRange
                    value={value} onChangeRange={onChangeDoubleRangeHandler}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <div className={s.value}>{value[1]}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
