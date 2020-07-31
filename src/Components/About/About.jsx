import React from 'react';
import s from './About.module.css'
import fight from './../../img/fight.png'
import book from './../../img/book.png'
import gamer from './../../img/gamer.png'
import music from './../../img/music.png'
const About = () => {
    return (
        <div className={s.AboutWrapper} id='About'>
            <div className={s.AboutMe}>
                <div className={s.AboutMeText}>
                    <h1 className={s.AboutMe_h}>About me</h1>
                    <p className={s.AboutMe_p}>
                        Hi. My name is Andrey, I'm 26 years old, I'm from Zaporozhye.<br /> A year ago, I became interested in web development.<br />
                        At the moment, I am actively studying React and Redux,<br /> these technologies absorbed me completely :)<br />
                        <br />

                        I love boxing, music, books and old-school video games.<br />
                        I get great pleasure from gaining new knowledge and experience.<br />
                        In my free time, I spend a lot of time coding and reading technical literature.<br />
                        My english is weak but i'm working on it.
                        </p>
                </div>

                <div className={s.AboutMe_hobbies}>
                    <div className={s.Hobbies_content}>
                        <img src={fight} alt='' className={s.AboutMe_hobbies_item}></img>
                        <p className={s.Hobbies_text}>I love boxing,<br />regularly follow the events from the<br /> boxing world.</p>
                    </div>
                    <div className={s.Hobbies_content}>
                        <img src={book} alt='' className={s.AboutMe_hobbies_item}></img>
                        <p className={s.Hobbies_text}>I love reading fantasy novels<br />and all kinds of technical literature.</p>
                    </div>
                    <div className={s.Hobbies_content}>
                        <img src={music} alt='' className={s.AboutMe_hobbies_item}></img>
                        <p className={s.Hobbies_text}>Sometimes in my free time<br />I play the electric guitar<br /> or just listen to music.</p>
                    </div>
                    <div className={s.Hobbies_content}>
                        <img src={gamer} alt='' className={s.AboutMe_hobbies_item}></img>
                        <p className={s.Hobbies_text}>When I get tired of everything,<br /> I enjoy playing my favorite games.</p>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default About;