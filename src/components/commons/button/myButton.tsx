import React from 'react';

type PropsType = {
    children: JSX.Element | string
    className: string
}

const MyButton: React.FC<PropsType> = ({children, className}:PropsType) => {
    return (
        <button className={className}>
            {children}
        </button>
    );
};

export default MyButton;