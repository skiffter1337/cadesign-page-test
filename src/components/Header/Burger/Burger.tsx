import React, {useState} from 'react';
import s from './Burger.module.scss'
import svg_styles from './../../../assets/svg/Svg.module.scss'



export const Burger = () => {

    const [isActive, setIsActive] = useState(false)
    const toggleBurger = () => setIsActive(!isActive)

    const burgerClasses = `${s.burger_menu_content} ${isActive ? s.burger_show : ""}`

    return (
        <>
            <svg display='none'>
                <symbol id='BURGER' viewBox="0 0 28 18">
                    <g>
                        <mask id="path-1-inside-1_436_4348" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M0 0H28V2H0V0ZM0 8H28V10H0V8ZM28 16H0V18H28V16Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H28V2H0V0ZM0 8H28V10H0V8ZM28 16H0V18H28V16Z"
                              fill="#003264"/>
                        <path
                            d="M28 0H29V-1H28V0ZM0 0V-1H-1V0H0ZM28 2V3H29V2H28ZM0 2H-1V3H0V2ZM28 8H29V7H28V8ZM0 8V7H-1V8H0ZM28 10V11H29V10H28ZM0 10H-1V11H0V10ZM0 16V15H-1V16H0ZM28 16H29V15H28V16ZM0 18H-1V19H0V18ZM28 18V19H29V18H28ZM28 -1H0V1H28V-1ZM29 2V0H27V2H29ZM0 3H28V1H0V3ZM-1 0V2H1V0H-1ZM28 7H0V9H28V7ZM29 10V8H27V10H29ZM0 11H28V9H0V11ZM-1 8V10H1V8H-1ZM0 17H28V15H0V17ZM1 18V16H-1V18H1ZM28 17H0V19H28V17ZM27 16V18H29V16H27Z"
                            fill="#003264" mask="url(#path-1-inside-1_436_4348)"/>
                    </g>
                </symbol>
                <symbol id='BURGER_CLOSE' viewBox="0 0 18 18">
                    <path
                        d="M10.1109 9.26784L17.1215 16.2785L16.2785 17.1215L9.26784 10.1109L8.91429 9.7573L8.56073 10.1109L1.55012 17.1215L0.707107 16.2785L7.71772 9.26784L8.07127 8.91429L7.71772 8.56073L0.707107 1.55012L1.55012 0.707107L8.56073 7.71772L8.91429 8.07127L9.26784 7.71772L16.2785 0.707107L17.1215 1.55012L10.1109 8.56073L9.7573 8.91429L10.1109 9.26784Z"
                        fill="white" stroke="white"/>
                </symbol>
            </svg>
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

