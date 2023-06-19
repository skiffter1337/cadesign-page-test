import React, {useEffect, useState} from 'react';
import s from './Header.module.scss'
import {Burger} from "./Burger/Burger";
import svg_styles from "../../assets/svg/Svg.module.scss";


export const Header = () => {

    const useWindowSize = () => {

        const [windowSize, setWindowSize] = useState(0);

        useEffect(() => {
            const handleResize = () => setWindowSize(window.innerWidth)

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    const size = useWindowSize()
    return (
        <>

            <header className={s.header}>
                <div className={s.container}>
                    <div className={s.header__row}>
                        <div >
                            <svg className={s.header__logo}>
                                <use href='#LOGO'></use>
                            </svg>
                        </div>
                        {size < 1250 ? <Burger/>
                            :
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
                                         <svg className={s.dropdown_icon}>
                                             <use href='#DROPDOWN'></use>
                                         </svg>
                                    </span>
                                            <div className={s.dropdown}>
                                                <ul className={s.dropdown_block}>
                                                    <div>
                                                        <li className={s.social}>
                                                            <a href={"/"}>
                                                                <svg className={`${s.dropdown_icon} ${svg_styles.vk__icon}`}>
                                                                    <use href='#VK'></use>
                                                                </svg>
                                                            </a>
                                                        </li>
                                                        <li className={s.social}>
                                                            <a href={"/"}>
                                                                <svg className={`${s.dropdown_icon} ${svg_styles.ok__icon}`}>
                                                                    <use href='#OK'></use>
                                                                </svg>
                                                            </a>
                                                        </li>
                                                    </div>
                                                    <div>
                                                        <li className={s.social}>
                                                            <a href={"/"}>
                                                                <svg className={`${s.dropdown_icon} ${svg_styles.fb__icon}`}>
                                                                    <use href='#FB'></use>
                                                                </svg>
                                                            </a>
                                                        </li>
                                                        <li className={s.social}>
                                                            <a href={"/"}>
                                                                <svg className={`${s.dropdown_icon} ${svg_styles.inst__icon}`}>
                                                                    <use href='#INST'></use>
                                                                </svg>
                                                            </a>
                                                        </li>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </header>
        </>
    );
};

