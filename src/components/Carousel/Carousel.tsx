import React, {useState} from 'react';
import s from './Carousel.module.scss'
import {Button} from "../../common/components/Button/Button";
import background from './../../assets/images/background.jpg'
import background2 from './../../assets/images/finy.png'
import {ModalVacancyResponse} from "../modals/ModalVacancyResponse/ModalVacancyResponse";


export const Carousel = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <>
            <div className={s.carousel}>
                <div className={s.container}>
                    <div className={s.section}>
                        <h2 className={s.carousel__title}>
                            Энергия твоего роста! – заряжаем твою карьеру
                        </h2>
                        <Button title={'Стать частью команды'} callback={handleOpenModal}/>
                    </div>
                    <div className={s.carousel_background__block}>
                        <img alt={"background image building"} className={s.carousel_background__image__building}
                             src={background}/>
                        <img alt={"background image women"} className={s.carousel_background__image__women}
                             src={background2}/>
                    </div>
                </div>
            </div>
            <ModalVacancyResponse isOpen={modalOpen} onClose={handleCloseModal}/>
        </>
    );
};
