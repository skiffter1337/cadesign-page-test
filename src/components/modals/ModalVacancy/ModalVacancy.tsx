import React from 'react';
import {Button} from "../../../common/components/Button/Button";
import s from './ModalVacancy.module.scss'

type PropsType = {
    isOpen: boolean
    onClose: () => void
}
export const ModalVacancy: React.FC<PropsType> = ({isOpen, onClose}) => {

    const onCloseHandler = () => onClose()

    if (!isOpen) {
        return null
    }
    return (
        <div className={s.modal} >
            <div className={s.modal__container}>
            <div className={s.modal__close}>
                <Button title={'X'} callback={onCloseHandler}/>
            </div>
            <div className={s.modal__header}>
                <h2 className={s.modal__title}>Бухгалтер по расчету заработной платы</h2>
                <span>от 30 000 до 60 000 руб. до вычета налогов</span>
                <div>
                <Button title={'Откликнуться'}/>
                </div>
            </div>
            <div className={s.vacancy__list__block}>
                <span className={s.vacancy__list__title}>Обязанности</span>
                <ul className={s.vacancy__list}>
                    <li>Ведение бухгалтерского учета ООО и ИП "под ключ"(от обработки первичной документации до сдачи
                        всей отчетности)
                    </li>
                    <li>Составление отчетности как регламентированной так и управленческой.</li>
                    <li>Постановку учета с нуля,восстановление учета.</li>
                    <li> Консультирование в выборе формы налогообложения,оптимизация налогообложения.</li>
                    <li> Подготовку и сдачу отчетности в ИФНС и фонды.</li>
                    <li> Ввод первичной документации в 1с:реализация,поступление,банк,касса.</li>
                    <li> Работу с клиент-банк(проведение платежей)</li>
                </ul>
            </div>
            <div className={s.vacancy__list__block}>
                <span className={s.vacancy__list__title}>Требования</span>
                <ul className={s.vacancy__list}>
                    <li>Опыт работы бухгалтером</li>
                    <li>Уверенный пользователь ПК</li>
                    <li>Личные качества(аккуратность,внимательность,нацеленность на результа</li>
                </ul>
            </div>
            <div className={s.vacancy__list__block}>
                <span className={s.vacancy__list__title}>Условия</span>
                <ul className={s.vacancy__list}>
                    <li>
                        <span className={s.vacancy__salary}>З/плата от 30 000</span>
                    </li>
                    <li>от 30 000 до 60 000 руб. до вычета налогов</li>
                </ul>
            </div>
            <div className={s.vacancy__footer}>
                <span className={s.vacancy__footer__title}>Вакансия добавлена 16 февраля 2020</span>
                <Button title={'Откликнуться'}/>
            </div>
        </div>
        </div>
    );
};
