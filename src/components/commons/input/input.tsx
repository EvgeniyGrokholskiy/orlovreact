import React, {ChangeEvent} from 'react';
import styles from "./input.module.css";

interface IInputProps {
    value: string | undefined
    placeholder: string
    callback: (payload: string) => void
}

type onChangeType = (event: ChangeEvent<HTMLInputElement>) => void

const Input: React.FC<IInputProps> = ({value, placeholder, callback}: IInputProps) => {

    const onClickCallback:onChangeType = (event:ChangeEvent<HTMLInputElement>) => {
        callback(event.target.value)
    }

    return (
        <input className={styles.input} value={value} placeholder={placeholder}
               onChange={onClickCallback}/>
    );
};

export default Input;