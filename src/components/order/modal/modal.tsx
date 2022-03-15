import React from "react";
import style from "./modal.module.css"

export interface IModalProps {
    close: (event: React.MouseEvent<HTMLButtonElement>) => void
    submit: (event: React.FormEvent<HTMLInputElement>) => void
}

const Modal: React.FC<IModalProps> = ({close, submit}: IModalProps) => {
    return (
        <form className={style.wrapper} name={"test"}>
            <button className={style.closeButton} onClick={close}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#888"
                     viewBox="0 0 1280 1280">
                    <path
                        d="M154.5 1.6c-8.5 1.9-16.7 5.1-24.3 9.5C123.3 15.2 21.3 116 14.5 125.5c-10.1 14.1-14 26.3-14 44 0 16.9 3.6 29.3 12.5 42.7 2.9 4.3 70.5 72.6 214.9 217L438.5 640 227.4 851.2C91.8 987 15 1064.5 12.7 1068.1 3.9 1081.8.6 1093 .6 1110c-.1 18.1 3.7 30.2 13.9 44.5 6.8 9.5 108.8 110.3 115.7 114.4 27.3 15.9 60.4 14.3 85.3-4.2 2.2-1.7 98.6-97.6 214.3-213.1L640 841.5l210.3 210.1c115.6 115.5 212 211.4 214.2 213.1 6.9 5.1 13 8.2 22.4 11.3 20.8 7 43.1 4.4 62.9-7.1 6.9-4.1 108.9-104.9 115.7-114.4 10.1-14.1 14-26.3 14-44 0-16.6-3.6-29-12.1-42.2-2.5-3.9-74.6-76.7-214.8-217.1L841.5 640l210.7-210.8c220.7-220.8 216.2-216.1 221.9-230.3 7.5-18.7 7.7-39.2.4-57.2-5.3-13.2-7.4-15.7-61.5-70-28.9-29.1-55.2-54.8-58.5-57.2-14.1-10.1-26.3-14-44-14-16.6 0-28.9 3.5-42 12-4.1 2.6-72.4 70.2-217.2 214.9L640 438.5 428.8 227.4C283.4 82.2 215.6 15.1 211.5 12.4c-6.4-4.1-14.9-7.8-23-10.1-7.9-2.2-25.8-2.6-34-.7z"/>
                </svg>
            </button>
            <label className={style.formLabelText}>{"Имя"}
                <input className={style.formInput} type={"text"} placeholder={"Введите имя"}/>
            </label>
            <label className={style.formLabelText}>{"Телефон"}
                <input className={style.formInput} type={"text"} placeholder={"Введите телефон"}/>
            </label>
            <label className={style.formLabelText}>{"Электронная почта"}
                <input className={style.formInput} type={"email"} placeholder={"Введите электронную почту"}/>
            </label>
            <input className={style.submitButton} type={"submit"} onClick={submit}/>
        </form>
    );
};

export default Modal;