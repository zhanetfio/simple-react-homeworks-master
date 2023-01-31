import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeAC} from "./bll/themeReducer";

const themes: string[] = ['white', 'blue', 'yellow', 'dark', 'red', 'some'];


function HW12() {
    const theme = useSelector<AppStoreType,string>(store => store.themes.theme)
    const dispatch = useDispatch()
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
            <SuperSelect className={s.item} options={themes} value={theme} onChangeOption={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
