import React from 'react';

type PropsType = {
    children?: JSX.Element | string
    href: string
    ariaLabel: string
    className: string
    target?:string
}

const MyLink: React.FC<PropsType> = ({children, className, href, ariaLabel,target="_blank"}: PropsType) => {
    return (
        <a href={href} target={target} className={className} aria-label={ariaLabel}>
            {children}
        </a>
    );
};

export default MyLink;