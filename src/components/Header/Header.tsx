import React from 'react';
import s from './Header.module.scss'
import LOGO from './../../assets/svg/logo.svg'
import DROPDOWN from './../../assets/svg/dropdown.svg'
// import VK from './../../assets/svg/socials/vk.svg'
import { ReactComponent as Vk } from './../../assets/svg/socials/vk.svg'
import INST from './../../assets/svg/socials/inst.svg'
import FB from './../../assets/svg/socials/fb.svg'
import OK from './../../assets/svg/socials/ondoklass.svg'


export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.header__row}>

                    <div className={s.header__logo}>
                        <img src={LOGO} alt={'logo'}/>
                    </div>

                    <div className={s.header__nav}>
                        <ul className={s.header__nav__links}>
                            <li className={s.header__nav__link}>
                                <a href={"/"}>
                                    О нас
                                </a>
                            </li>
                            <li className={s.header__nav__link}>
                                <a href={"/"}>
                                    Наши ценности
                                </a>
                            </li>
                            <li className={s.header__nav__link}>
                                <a href={"/"}>
                                    Вакансии
                                </a>
                            </li>
                            <li className={s.header__nav__link}>
                                <a href={"/"}>
                                    Начало карьеры
                                </a>
                            </li>
                            <li className={s.header__nav__link}>
                                <a href={"/"}>
                                    Контакты
                                </a>
                            </li>
                            <li>
                                <div className={s.header_socials__menu}>
                                    <span className={s.dropdown_title}>
                                        Социальные сети
                                        <img src={DROPDOWN} alt={""} className={s.dropdown_icon}/>
                                    </span>
                                    <div className={s.dropdown}>
                                        <ul className={s.dropdown_block}>
                                            <div>
                                            <li className={s.social}>
                                                <a href={"/"}>
                                                   <Vk/>
                                                </a>
                                            </li>
                                            <li className={s.social}>
                                                <a href={"/"}>
                                                    <img src={OK} alt={""} className={s.dropdown_icon}/>
                                                </a>
                                            </li>
                                            </div>
                                            <div>
                                            <li className={s.social}>
                                                <a href={"/"}>
                                                    <img src={FB} alt={""} className={s.dropdown_icon}/>
                                                </a>
                                            </li>
                                            <li className={s.social}>
                                                <a href={"/"}>
                                                    <img src={INST} alt={""} className={s.dropdown_icon}/>
                                                </a>
                                            </li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    );
};

