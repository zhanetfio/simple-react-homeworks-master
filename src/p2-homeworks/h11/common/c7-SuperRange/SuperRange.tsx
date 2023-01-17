import React, { DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Box, Slider} from "@material-ui/core";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (newValue: number) => void
    value:number
    width?:number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,value,width,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number);
    };
    /*const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`
*/
    return (
       <div style={{display:'inline-block'}}>
           <Box width={width ? width :300} >
               <Slider
               value={value}
               onChange={handleChange}
               valueLabelDisplay={'auto'}
               aria-label={'Default'}
               />
           </Box>
            {/*  <input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />*/
            }
        </div>
    )
}

export default SuperRange
