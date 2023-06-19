import React, {useState} from 'react';
import './App.scss';
import {Header} from "../components/Header/Header";
import {Carousel} from "../components/Carousel/Carousel";
import {Advantages} from "../components/Advantages/Advantages";
import {Button} from "../common/components/Button/Button";
import {ModalVacancy} from "../components/modals/ModalVacancy/ModalVacancy";
import {svg} from "../svg";

function App() {

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <>
            {svg}
            <Header/>
            <Carousel/>
            <Advantages/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button title={'Вакансии'} callback={handleOpenModal} />
            </div>
            {modalOpen &&
            <ModalVacancy isOpen={modalOpen} onClose={handleCloseModal}/>
            }
        </>
    )
}

export default App;
