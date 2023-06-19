import React, {useState} from 'react';
import s from './Burger.module.scss'
import svg_styles from './../../../assets/svg/Svg.module.scss'



export const Burger = () => {

    const [isActive, setIsActive] = useState(false)
    const toggleBurger = () => setIsActive(!isActive)

    const burgerClasses = `${s.burger_menu_content} ${isActive ? s.burger_show : ""}`

    return (
        <>
            <div>
                <div className={s.burger_icon}>
                    <button className={s.btn} onClick={toggleBurger}>
                        {!isActive ?
                            <svg className={svg_styles.burger__icon}>
                                <use href='#BURGER'></use>
                            </svg> :
                            <svg className={svg_styles.burger__close__icon}>
                                <use href='#BURGER_CLOSE'></use>
                            </svg>
                        }
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
                                    <svg className={svg_styles.vk__icon}>
                                        <use href='#VK'></use>
                                    </svg>
                                </a>
                            </li>
                            <li className={s.social}>
                                <a href={"/"}>
                                    <svg className={svg_styles.ok__icon}>
                                        <use href='#OK'></use>
                                    </svg>
                                </a>
                            </li>
                            <li className={s.social}>
                                <a href={"/"}>
                                    <svg className={svg_styles.fb__icon}>
                                        <use href='#FB'></use>
                                    </svg>
                                </a>
                            </li>
                            <li className={s.social}>
                                <a href={"/"}>
                                    <svg className={svg_styles.inst__icon}>
                                        <use href='#INST'></use>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

