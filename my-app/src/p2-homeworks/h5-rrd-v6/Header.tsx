import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}
                     style={({isActive}) => ({color: isActive ? "gold" : "darkgoldenrod"})}>PRE-JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}
                     style={({isActive}) => ({color: isActive ? "gold" : "darkgoldenrod"})}>JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link}
                     style={({isActive}) => ({color: isActive ? "gold" : "darkgoldenrod"})}>JUNIOR-PLUS</NavLink>
            <div className={s.menu}>=</div>

        </div>
    )
}

export default Header
