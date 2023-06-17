import React from 'react';
import s from './Button.module.scss'

type PropsType = {
    title: string
    callback?: () => void
}
export const Button: React.FC<PropsType> = ({title, callback}) => {

    const onClickHandler = () => callback!()

    return (
        <>
        <button className={s.btn} onClick={onClickHandler}><span>{title}</span></button>
        </>
    );
};

