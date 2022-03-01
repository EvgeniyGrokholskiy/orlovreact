import React, {ReactNode, MouseEvent} from 'react';

interface IProps {
    callback?: null | (() => void) | ((action: string) => void)
    children: ReactNode
    className: string
    id: string
}


const MyButton: React.FC<IProps> = ({id, children, className, callback = null}: IProps) => {

    return (
        <button id={id} className={className} onClick={(event: MouseEvent<HTMLButtonElement>) => {
            if (callback) {
                callback(event.currentTarget.id)
            }
            return
        }}>
            {children}
        </button>
    );
};

export default MyButton;