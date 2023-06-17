import React, {ChangeEvent, useRef, useState} from 'react';
import s from './ModalVacancyResponse.module.scss'
import TRASH from './../../../assets/svg/trash.svg'
import {Button} from "../../../common/components/Button/Button";

type PropsType = {
    isOpen: boolean
    onClose: () => void
}
export const ModalVacancyResponse: React.FC<PropsType> = ({isOpen, onClose}) => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    const [fileName, setFileName] = useState<string | undefined>('Загрузить резюме')
    const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);

    const onCloseHandler = () => onClose()


    const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {

        setFileName(e.target.files?.[0].name)
        setIsFileUploaded(true)
    }
    const deleteFileHandler = () => {
        setIsFileUploaded(false)
        setFileName('Загрузить резюме')
    }
    const openFileInput = () => {
        const inputElement = inputRef.current;
        if (inputElement) {
            inputElement.click();
        }
    };

    if (!isOpen) {
        return null
    }

    return (
        <div className={s.modal}>
            <div className={s.modal__container}>
            <div className={s.modal__close}>
                <Button title={'X'} callback={onCloseHandler}/>
            </div>
            <div className={s.modal__content__block}>
                <div className={s.modal__content}>
                    <h2 className={s.modal__content__title}>Отклик на вакансию</h2>
                    <form>
                        <div className={s.form__field}>
                            <input className={s.form__input} name='vacancy'/>
                            <label className={s.input__label}>Желаемая вакансия *</label>
                        </div>
                        <div className={s.form__field}>
                            <input className={s.form__input} name='fio'/>
                            <label className={s.input__label}>Фамилия, имя и отчество *</label>
                        </div>
                        <div className={s.form__field__row}>
                            <div className={s.form__field}>
                                <input className={s.form__input} type='tel' name='phone'/>
                                <label className={s.input__label}>Мобильный телефон *</label>
                            </div>
                            <div className={s.form__field}>
                                <input className={s.form__input} type='email' name='email'/>
                                <label className={s.input__label}>E-mail</label>
                            </div>
                        </div>
                        <div className={s.form__field}>
                            <input className={s.form__input} name='education'/>
                            <label className={s.input__label}>Образование *</label>
                        </div>
                        <div className={s.form__field}>
                            <input className={s.form__input} name='address'/>
                            <label className={s.input__label}>Адрес места жительства *</label>
                        </div>
                        <div className={`${s.form__field__row} ${s.short__row}`}>
                            <div className={s.form__field}>
                                <input className={s.form__input} name='birth_date'/>
                                <label className={s.input__label}>Дата рождения</label>
                            </div>
                            <div className={s.form__field}>
                                <input className={`${s.form__input} ${s.file}`} ref={inputRef} type='file' name='resume'
                                       onChange={fileHandler}/>
                                <label className={s.input__label__file} onClick={openFileInput}>
                                    <span className={isFileUploaded ? s.uploaded : ''}>
                                        {fileName}
                                        {isFileUploaded &&
                                            <button className={s.delete__file_btn} onClick={deleteFileHandler}>
                                                <img src={TRASH}/>
                                            </button>}
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className={s.form__field}>
                            <textarea className={s.form__input}/>
                            <label className={s.input__label}>Комментарий</label>
                        </div>
                        <div className={s.form__submit__block}>
                            <div >
                                <input type={"checkbox"}/>
                                <span className={s.form__condition}>Я принимаю условия
                                    <span>
                                        передачи информациия
                                    </span>
                                </span>
                            </div>
                            <Button title={'Отправить'}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

