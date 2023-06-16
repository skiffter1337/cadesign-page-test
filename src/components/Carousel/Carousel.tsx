import React from 'react';
import s from './Carousel.module.scss'
import {Button} from "../../common/components/Button/Button";
import background from './../../assets/images/background.jpg'
import background2 from './../../assets/images/finy.png'


export const Carousel = () => {
    return (
        <div className={s.carousel}>
            <div className={s.container}>
                <img alt={"background image building"} className={s.carousel_background__image__building} src={background}/>
                <img alt={"background image women"} className={s.carousel_background__image__women} src={background2}/>

                <div className={s.section}>
                    <h2 className={s.carousel__title}>
                        Энергия твоего роста! – заряжаем твою карьеру
                    </h2>
                    <Button title={'Стать частью команды'}/>
                </div>
            </div>
        </div>
    );
};
