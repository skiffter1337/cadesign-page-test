import React from 'react';
import s from './Button.module.scss'

type PropsType = {
    title: string
    callback?: () => void
    isDisabled?: boolean
}
export const Button: React.FC<PropsType> = ({title, callback, isDisabled}) => {

    const onClickHandler = () => callback!()

    return (
        <>
        <button className={s.btn} onClick={onClickHandler} disabled={isDisabled}><span>{title}</span></button>
        </>
    );
};

