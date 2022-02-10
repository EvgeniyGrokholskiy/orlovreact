import React, {ReactNode, MouseEvent} from 'react';

type PropsType = {
    children: ReactNode
    className: string
    callback?: null | (() => void)
}

const MyButton: React.FC<PropsType> = ({children, className, callback = null}:PropsType) => {
    return (
        <button className={className} onClick={(event:MouseEvent<HTMLButtonElement>)=>{
            if (callback) {
                callback()
            }
            return
        }}>
            {children}
        </button>
    );
};

export default MyButton;