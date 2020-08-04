import React from 'react';
import s from './Skills.module.css';
import html from './../../img/html.png';
import css from './../../img/css.png'
import javascript from './../../img/javascript.png'
import git from './../../img/git.png'
import react from './../../img/react.png'
import redux from './../../img/redux.png'
import Progress from './Progress';

const Skills = () => {
    return (
        <div className={s.SkillsWrapper} id='Skills'>
            <div className={s.Skills}>
                <div className={s.Skills_text}>
                    <h1 className={s.Skills_h}>My Skills</h1>
                    <p className={s.Skills_p}>
                        I can create web applications
                        and understand how to work<br /> with these technologies<br />
                        My goal is to become a full stack in the future.
                    </p>
                </div>
            </div>
            <div className={s.Skills_items}>
                <div className={s.Skills_item}>
                    <img src={html} alt='' className={s.Skills_img}></img>
                    <Progress done='70' />
                </div>
                <div className={s.Skills_item}>
                    <img src={css} alt='' className={s.Skills_img}></img>
                    <Progress done='60' />
                </div>
                <div className={s.Skills_item}>
                    <img src={javascript} alt='' className={s.Skills_img}></img>
                    <Progress done='74' />
                </div>
                <div className={s.Skills_item}>
                    <img src={git} alt='' className={s.Skills_img}></img>
                    <Progress done='50' />
                </div>
                <div className={s.Skills_item}>
                    <img src={react} alt='' className={s.Skills_img}></img>
                    <Progress done='65' />
                </div>
                <div className={s.Skills_item}>
                    <img src={redux} alt='' className={s.Skills_img}></img>
                    <Progress done='45' />
                </div>
            </div>
        </div>
    );
};

export default Skills;