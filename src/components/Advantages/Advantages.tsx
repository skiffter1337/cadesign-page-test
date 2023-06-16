import React from 'react';
import s from './Advantages.module.scss'
import DEVELOPMENT from './../../assets/svg/advantages/development.svg'
import EDUCATION from './../../assets/svg/advantages/education.svg'
import COMFORT from './../../assets/svg/advantages/comfort.svg'
import DYNAMICS from './../../assets/svg/advantages/dynamicsDark.svg'
import RELIABILITY from './../../assets/svg/advantages/reliability.svg'
import RESPONSIBILITY from './../../assets/svg/advantages/responsibility.svg'

export const Advantages = () => {
    return (
        <div className={s.advantages}>
            <div className={s.container}>
                <div className={s.advantages_list}>
                    <div className={s.advantages_list__item}>
                        <div className={s.advantages_list__item__content}>
                            <img src={DEVELOPMENT}/>
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
                            <img src={EDUCATION}/>
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
                            <img src={RESPONSIBILITY}/>
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
                            <img src={DYNAMICS}/>
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
                            <img src={COMFORT}/>
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
                            <img src={RELIABILITY}/>
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
    );
};
