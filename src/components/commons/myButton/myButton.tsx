import React, {ReactNode, MouseEvent} from 'react';

interface IProps {
    callback?: null | (() => void)
    children: ReactNode
    className: string
}


const MyButton: React.FC<IProps> = ({children, className, callback = null}: IProps) => {
    return (
        <button className={className} onClick={(event: MouseEvent<HTMLButtonElement>) => {
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