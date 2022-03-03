import React, {MouseEvent} from 'react';
import {IMyButtonProps} from '../../interfacesAndTypes/interfacesAndTypes';


const MyButton: React.FC<IMyButtonProps> = ({id, className, children, callback = null}: IMyButtonProps) => {

    return (
        <button className={className} onClick={(event: MouseEvent<HTMLButtonElement>) => {
            if (callback) {
                callback(id ? id : "")
            }
            return
        }}>
            {children}
        </button>
    );
};

export default MyButton;