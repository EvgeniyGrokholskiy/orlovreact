import React, {MouseEvent} from 'react';
import {IMyButtonProps} from '../../interfacesAndTypes/interfacesAndTypes';


const MyButton: React.FC<IMyButtonProps> = ({id, className, children, callback = null}: IMyButtonProps) => {

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