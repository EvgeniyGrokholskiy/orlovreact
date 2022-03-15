import styles from "./input.module.css";
import React, {ChangeEvent} from 'react';
import {IInputProps, onChangeType} from '../../interfacesAndTypes/interfacesAndTypes';


const MyInput: React.FC<IInputProps> = ({placeholder, value, callback, isDisabled}: IInputProps) => {

    const onClickCallback: onChangeType = (event: ChangeEvent<HTMLInputElement>) => {
        callback(event.target.value)
    }

    return (
        <input className={styles.input} value={value} placeholder={placeholder} disabled={isDisabled}
               onChange={onClickCallback}/>
    );
};

export default MyInput;