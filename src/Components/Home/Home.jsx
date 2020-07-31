import React from 'react';
import s from './Home.module.css';
import photo11 from './../../img/photo11.png'
import email from './../../img/email.png'
import telephone from './../../img/telephone.png'
import telegram from './../../img/telegram.png'
import github from './../../img/github.png'
import Nav from '../Nav/Nav';
const Home = () => {
    return (
        <div className={s.Wrapper} id='Home'>
            <Nav />
            <img src={photo11} className={s.Photo} alt='' />
            <div className={s.ContentBox}>
                <h1 className={s.TitleText}><span>Hello</span>, Im Andrey Petrenko.<br />
                    <p className={s.Prof}>Junior Front-end Developer</p>
                    <p className={s.TextP}> Java Script coder and just a funny guy.</p>
                </h1>
            </div>
            <div className={s.SocialWrapper}>
                <ul className={s.SocialItems}>
                    <li className={s.SocialItem}><a href="mailto:123petrotreiler321@gmail.com"><img src={email} alt=''></img></a></li>
                    <li className={s.SocialItem}><a href="tel:+38(068-068-96-68)"><img src={telephone} alt=''></img></a></li>
                    <li className={s.SocialItem}><a href="https://t.me/AndreyPetrenkoTeleg"><img src={telegram} alt=''></img></a></li>
                    <li className={s.SocialItem}><a href="https://github.com/123andrey-petrenko321"><img src={github} alt=''></img></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;