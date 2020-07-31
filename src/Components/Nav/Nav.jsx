import React from 'react';
import s from './Nav.module.css';
import { Link } from "react-scroll";
const Nav = () => {

    return (
        <div className={s.Links}>
            <ul className={s.LinksItems}>
                <li className={s.LinksItem}><Link className={s.LinksItem__a} to="Home" smooth={true} duration={500} >Home</Link></li>
                <li className={s.LinksItem}><Link className={s.LinksItem__a} to="About" smooth={true} duration={1000}>About Me</Link></li>
                <li className={s.LinksItem}><Link className={s.LinksItem__a} to="Skills" smooth={true} duration={1000}> My Skills</Link></li>
            </ul>
        </div>
    );
};

export default Nav;