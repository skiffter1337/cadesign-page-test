import React from 'react';
import s from './Button.module.scss'

type PropsType = {
    title: string
}
export const Button: React.FC<PropsType> = ({title}) => {
    return (
        <>
        <button className={s.btn}><span>{title}</span></button>
        </>
    );
};

