import React from 'react';
import s from './Advantages.module.scss'


export const Advantages = () => {
    return (
        <>
            <div className={s.advantages}>
                <div className={s.container}>
                    <div className={s.advantages_list}>
                        <div className={s.advantages_list__item}>
                            <div className={s.advantages_list__item__content}>
                                <svg className={`${s.advantages__icon} ${s.development__icon}`}>
                                    <use href='#development'></use>
                                </svg>
                                <div className={s.advantages_list__item__title}>
                                    Развитие
                                </div>
                            </div>
                            <div className={s.advantages_list__item__description}>
                                Общего центра обслуживания. <br/>
                                Современные технологии, проекты, рабочие группы
                            </div>

                        </div>
                        <div className={s.advantages_list__item}>
                            <div className={s.advantages_list__item__content}>
                                <svg className={`${s.advantages__icon} ${s.education__icon}`}>
                                    <use href='#education'></use>
                                </svg>
                                <div className={s.advantages_list__item__title}>
                                    Обучение
                                </div>
                            </div>
                            <div className={s.advantages_list__item__description}>
                                Общего центра обслуживания. <br/>
                                Современные технологии, проекты, рабочие группы
                            </div>
                        </div>
                        <div className={s.advantages_list__item}>
                            <div className={s.advantages_list__item__content}>
                                <svg className={`${s.advantages__icon} ${s.responsibility__icon}`}>
                                    <use href='#responsibility'></use>
                                </svg>
                                <div className={s.advantages_list__item__title}>
                                    Отвественность
                                </div>
                            </div>
                            <div className={s.advantages_list__item__description}>
                                Общего центра обслуживания.<br/>
                                Современные технологии, проекты, рабочие группы
                            </div>
                        </div>
                        <div className={s.advantages_list__item}>
                            <div className={s.advantages_list__item__content}>
                                <svg className={`${s.advantages__icon} ${s.dynamics__icon}`}>
                                    <use href='#dynamics'></use>
                                </svg>
                                <div className={s.advantages_list__item__title}>
                                    Динамика
                                </div>
                            </div>
                            <div className={s.advantages_list__item__description}>
                                Общего центра обслуживания.<br/>
                                Современные технологии, проекты, рабочие группы
                            </div>
                        </div>
                        <div className={s.advantages_list__item}>
                            <div className={s.advantages_list__item__content}>
                                <svg className={`${s.advantages__icon} ${s.comfort__icon}`}>
                                    <use href='#comfort'></use>
                                </svg>
                                <div className={s.advantages_list__item__title}>
                                    Комфорт
                                </div>
                            </div>
                            <div className={s.advantages_list__item__description}>
                                Общего центра обслуживания. <br/>
                                Современные технологии, проекты, рабочие группы
                            </div>
                        </div>
                        <div className={s.advantages_list__item}>
                            <div className={s.advantages_list__item__content}>
                                <svg className={`${s.advantages__icon} ${s.reliability__icon}`}>
                                    <use href='#reliability'></use>
                                </svg>
                                <div className={s.advantages_list__item__title}>
                                    Надежность
                                </div>
                            </div>
                            <div className={s.advantages_list__item__description}>
                                Общего центра обслуживания.<br/>
                                Современные технологии, проекты, рабочие группы
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
