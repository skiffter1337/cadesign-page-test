import React, {useState} from 'react';
import s from './Burger.module.scss'
import BURGER from './../../../assets/svg/burger.svg'
import BURGER_CLOSE from './../../../assets/svg/burger_close.svg'
import OK from "../../../assets/svg/socials/ondoklass.svg";
import FB from "../../../assets/svg/socials/fb.svg";
import INST from "../../../assets/svg/socials/inst.svg";
import VK from '../../../assets/svg/socials/vk.svg'

export const Burger = () => {

    const [isActive, setIsActive] = useState(false)
    const toggleBurger = () => setIsActive(!isActive)

    const burgerClasses = `${s.burger_menu_content} ${isActive ? s.burger_show : ""}`

    return (
        <>
            <div>
                <div className={s.burger_icon}>
                    <button className={s.btn} onClick={toggleBurger}>
                        <img src={!isActive ? BURGER: BURGER_CLOSE}/>
                    </button>
                </div>
            </div>
            <div className={burgerClasses}>
                <div className={s.burger_links__container}>
                    <ul className={s.burger_links__list}>
                        <li>О нас</li>
                        <li>Наши ценности</li>
                        <li>Вакансии</li>
                        <li>Начало карьеры</li>
                        <li>Контакты</li>
                    </ul>

                <div className={s.burger_socials__list}>
                    <ul className={s.dropdown_block}>
                            <li className={s.social}>
                                <a href={"/"}>
                                    <img src={VK} alt={""} className={s.dropdown_icon}/>
                                </a>
                            </li>
                            <li className={s.social}>
                                <a href={"/"}>
                                    <img src={OK} alt={""} className={s.dropdown_icon}/>
                                </a>
                            </li>
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
                    </ul>
                </div>
            </div>
            </div>
        </>
    );
};

