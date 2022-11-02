import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    width?: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    const handleChange=(e:Event,newValue:number | number[])=>{
        onChangeRange && onChangeRange(newValue as [number,number])
    }

    // сделать самому, можно подключать библиотеки

    return (
        <Box sx={{width:300, }}>
            DoubleRange
            <Slider
                getAriaLabel={() => 'Range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"


            />
        </Box>
    )
}

export default SuperDoubleRange
