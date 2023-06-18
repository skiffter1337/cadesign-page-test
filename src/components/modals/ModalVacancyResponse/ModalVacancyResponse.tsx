import React, {ChangeEvent, useRef, useState} from 'react';
import s from './ModalVacancyResponse.module.scss'
import SUCCESS from './../../../assets/svg/input_succes.svg'
import {Button} from "../../../common/components/Button/Button";
import svg_styles from './../../../assets/svg/Svg.module.scss'

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
        <>
            <svg display='none'>
                <symbol id='TRASH' viewBox="0 0 10 11">
                    <g>
                        <path d="M9.841 2.82349H0.161785C0.0725243 2.82349 0 2.88088 0 2.95151V3.65784C0 3.72847 0.0725243 3.78586 0.161785 3.78586H1.01255L1.67643 9.99936C1.72664 10.4717 2.22594 10.8337 2.82287 10.8337H7.30544C7.91074 10.8337 8.41283 10.4629 8.45467 9.9839L8.98745 3.78586H9.83822C9.92748 3.78586 10 3.72847 10 3.65784V2.95151C10 2.87867 9.92748 2.82349 9.841 2.82349Z" fill="#E9862A"/>
                        <path d="M9.841 1.31775H6.68898C6.68898 1.30671 6.69177 1.29347 6.69177 1.28243V0.896156C6.69177 0.401725 6.1841 0 5.55928 0H4.44351C3.81869 0 3.31102 0.401725 3.31102 0.896156V1.28243C3.31102 1.29347 3.31381 1.30671 3.31381 1.31775H2.33194H0.161785C0.0725243 1.31775 0 1.37514 0 1.44577V2.1521C0 2.22273 0.0725243 2.28012 0.161785 2.28012H9.83822C9.92748 2.28012 10 2.22273 10 2.1521V1.44577C10 1.37293 9.92748 1.31775 9.841 1.31775ZM4.27336 0.896156C4.27336 0.821109 4.35146 0.759305 4.4463 0.759305H5.55928C5.65411 0.759305 5.73222 0.821109 5.73222 0.896156V1.28243C5.73222 1.29567 5.72664 1.30671 5.72385 1.31775H4.28452C4.28173 1.30671 4.27615 1.29567 4.27615 1.28243V0.896156H4.27336Z" fill="#E9862A"/>
                    </g>
                </symbol>
                <symbol id='CHECKBOX' viewBox="0 0 12 10">
                    <path d="M1 4.75L4.125 7.875L11 1" stroke="white" strokeWidth="2" fill='#E9862A'/>
                </symbol>
                {/*<symbol id='INPUT_SUCCESS' viewBox="0 0 12 10">*/}
                {/*    <path d="M1 4.75L4.125 7.875L11 1" stroke="#27AE60" strokeWidth="2"/>*/}
                {/*</symbol>*/}
            </svg>
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
                                    <input className={`${s.form__input} ${inputError ? s.input__error : ''}`}
                                           value={inputValue}
                                           onChange={changeInputValue}
                                           onBlur={handleInputBlur}
                                           name='vacancy'/>
                                    {inputError &&
                                        <span className={s.input__error__text}>'Введите фамилию, имя и отчество через пробел (Например: Иванов Петр Алексеевич)'</span>}
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
                                        <input className={s.form__input} onChange={handleInputChange} type='tel'
                                               name='phone'/>
                                        <label className={s.input__label}>Мобильный телефон *</label>
                                        {inputStates.phone && <img src={SUCCESS} className={s.input__success__icon}/>}
                                    </div>
                                    <div className={s.form__field}>
                                        <input className={s.form__input} onChange={handleInputChange} type='email'
                                               name='email'/>
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
                                    <input className={s.form__input} onChange={handleInputChange} name='address'/>
                                    <label className={s.input__label}>Адрес места жительства *</label>
                                    {inputStates.address && <img src={SUCCESS} className={s.input__success__icon}/>}
                                </div>
                                <div className={`${s.form__field__row} ${s.short__row}`}>
                                    <div className={s.form__field}>
                                        <input className={s.form__input} onChange={handleInputChange}
                                               name='birth_date'/>
                                        <label className={s.input__label}>Дата рождения</label>
                                        {inputStates.birth_date &&

                                            <img src={SUCCESS} className={s.input__success__icon}/>}

                                    </div>
                                    <div className={s.form__field}>
                                        <input className={`${s.form__input} ${s.file}`} ref={inputRef} type='file'
                                               name='resume'
                                               onChange={fileHandler}/>
                                        <label className={s.input__label__file} onClick={openFileInput}>
                                    <span className={isFileUploaded ? s.uploaded : ''}>
                                        {fileName}
                                        {isFileUploaded &&
                                            <button className={s.delete__file_btn} onClick={deleteFileHandler}>
                                                <svg className={svg_styles.trash__icon}>
                                                    <use href='#TRASH'></use>
                                                </svg>
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
                                        <div className={s.checkbox__icon__block}>
                                            <svg className={svg_styles.checkbox__icon}>
                                                <use href='#CHECKBOX'></use>
                                            </svg>
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
        </>
    );
};

