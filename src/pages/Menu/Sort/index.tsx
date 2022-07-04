import classNames from 'classnames';
import options from './option.json';
import React, { useState } from 'react';
import styles from './Sort.module.scss';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
    sort: string,
    setSort: React.Dispatch<React.SetStateAction<string>>,
}

export default function Sort({ sort, setSort }: Props) {

    const [open, setOpen] = useState(false);
    const nameSort = sort && options.find(option => option.value === sort)?.nome;

    return (
        <button 
        className={classNames({
            [styles.ordenador]: true,
            [styles['ordenador--ativo']]: sort !== '',
        })} 
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
        >
            <span>{nameSort || 'Ordenar Por'}</span>
            {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles['ordenador__options--ativo']]: open,
            })}>
                {options.map(option => (
                    <div 
                    className={styles.ordenador__option} 
                    key={option.value}
                    onClick={() => setSort(option.value)}
                    >
                        {option.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}