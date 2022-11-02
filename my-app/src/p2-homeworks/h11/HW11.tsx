import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)


    const onChangeDoubleRangeHandler=(newValue:[number,number])=>{
        setValue1(newValue[0])
        setValue2(newValue[1])
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span style={{padding: "20px"}}>{value1}</span>
                <SuperRange  onChangeRange={setValue1} value={value1} min={0} max={100} step={1}
                    // сделать так чтоб value1 изменялось(Done)
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1,value2]} onChangeRange={onChangeDoubleRangeHandler}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
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
