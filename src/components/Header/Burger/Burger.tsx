import React, {useState} from 'react';
import s from './Burger.module.scss'


export const Burger = () => {

    const [isActive, setIsActive] = useState(false)
    const toggleBurger = () => setIsActive(!isActive)

    const burgerClasses = `${s.burger_menu_content} ${isActive ? s.burger_show : ""}`

    return (
        <>
            <div>
                <div className={s.burger_icon}>
                    <button className={s.btn} onClick={toggleBurger}>123</button>
                </div>
            </div>
            <div className={burgerClasses}>
                <div className={s.burger_links__list}>

                </div>
                <div className={s.burger_socials__list}>

                </div>
            </div>

        </>
    );
};

