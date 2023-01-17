import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeAC} from "./bll/themeReducer";

const themes:string[] = ['dark', 'red', 'green'];

function HW12() {
    const theme = useSelector<AppStoreType,string>(store => store.themes.theme) // useSelector
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
    const onChangeCallback = (newTheme:string) => {
        dispatch(changeThemeAC(newTheme))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect options={themes} value={theme} onChangeOption={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
