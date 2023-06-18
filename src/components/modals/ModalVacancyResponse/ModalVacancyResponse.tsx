import React, {ChangeEvent, useRef, useState} from 'react';
import s from './ModalVacancyResponse.module.scss'
import TRASH from './../../../assets/svg/trash.svg'
import CHECKBOX from './../../../assets/svg/checkbox.svg'
import SUCCESS from './../../../assets/svg/input_succes.svg'
import {Button} from "../../../common/components/Button/Button";

type PropsType = {
    isOpen: boolean
    onClose: () => void
}
export const ModalVacancyResponse: React.FC<PropsType> = ({isOpen, onClose}) => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    const [fileName, setFileName] = useState<string | undefined>('Загрузить резюме')
    const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState(false);



    const handleInputBlur = () => {
        if (inputValue.trim() === '') {
            setInputError(true);
        } else {
            setInputError(false);
        }
    };


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
    const [inputStates, setInputStates] = useState({
        vacancy: false,
        fio: false,
        phone: false,
        email: false,
        education: false,
        address: false,
        birth_date: false,
    });


    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        handleInputChange(e)
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setInputStates((prevState) => ({
            ...prevState,
            [inputName]: inputValue.length > 0,
        }));
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
                            <input  className={`${s.form__input} ${inputError ? s.input__error : ''}`}
                                    value={inputValue}
                                    onChange={changeInputValue}
                                    onBlur={handleInputBlur}
                                    name='vacancy'/>
                            {inputError && <span className={s.input__error__text}>'Введите фамилию, имя и отчество через пробел (Например: Иванов Петр Алексеевич)'</span>}
                            <label className={s.input__label}>Желаемая вакансия *</label>
                            {inputStates.vacancy && <img src={SUCCESS} className={s.input__success__icon}/>}
                        </div>
                        <div className={s.form__field}>
                            <input className={s.form__input} onChange={handleInputChange} name='fio'/>
                            <label className={s.input__label}>Фамилия, имя и отчество *</label>
                            {inputStates.fio && <img src={SUCCESS} className={s.input__success__icon}/>}
                        </div>
                        <div className={s.form__field__row}>
                            <div className={s.form__field}>
                                <input className={s.form__input} onChange={handleInputChange} type='tel' name='phone'/>
                                <label className={s.input__label}>Мобильный телефон *</label>
                                {inputStates.phone && <img src={SUCCESS} className={s.input__success__icon}/>}
                            </div>
                            <div className={s.form__field}>
                                <input className={s.form__input} onChange={handleInputChange} type='email' name='email'/>
                                <label className={s.input__label}>E-mail</label>
                                {inputStates.email && <img src={SUCCESS} className={s.input__success__icon}/>}
                            </div>
                        </div>
                        <div className={s.form__field}>
                            <input className={s.form__input} onChange={handleInputChange} name='education'/>
                            <label className={s.input__label}>Образование *</label>
                            {inputStates.education && <img src={SUCCESS} className={s.input__success__icon}/>}
                        </div>
                        <div className={s.form__field}>
                            <input className={s.form__input} onChange={handleInputChange}  name='address'/>
                            <label className={s.input__label}>Адрес места жительства *</label>
                            {inputStates.address && <img src={SUCCESS} className={s.input__success__icon}/>}
                        </div>
                        <div className={`${s.form__field__row} ${s.short__row}`}>
                            <div className={s.form__field}>
                                <input className={s.form__input} onChange={handleInputChange}  name='birth_date'/>
                                <label className={s.input__label}>Дата рождения</label>
                                {inputStates.birth_date && <img src={SUCCESS} className={s.input__success__icon}/>}
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
                            <textarea className={`${s.form__input} ${s.form__textarea}`}/>
                            <label className={s.input__label}>Комментарий</label>
                        </div>
                        <div className={s.form__submit__block}>
                            <div className={s.checkbox__block}>
                                    <div className={s.checkbox__icon}>
                                       <img src={CHECKBOX}/>
                                    </div>
                                <span className={s.form__condition}>Я принимаю условия
                                    <span>
                                        передачи информациия
                                    </span>
                                </span>
                            </div>
                            <Button title={'Отправить'} isDisabled={inputValue.length === 0}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

