import React from 'react'
import {Box, Slider} from "@material-ui/core";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    width?: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, width,
        // min, max, step, disable, ...
    }
) => {
    const handleChange = (e: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number])
    }

    // сделать самому, можно подключать библиотеки

    return (
        <div style={{display:'inline-block'}}>
            <Box width={width ? width : 300}>
                DoubleRange
                <Slider
                    getAriaLabel={() => 'Range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                />
            </Box>
        </div>
    )
}

export default SuperDoubleRange
