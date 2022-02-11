import React, {ReactNode} from 'react';

type PropsType = {
    children?: ReactNode
    href: string
    ariaLabel: string
    className: string
    target?: string
}

const MyLink: React.FC<PropsType> = ({
                                         href,
                                         ariaLabel,
                                         children,
                                         className,
                                         target = "_blank"
                                     }: PropsType) => {

    return (
        <>
            <a href={href} target={target} className={className} aria-label={ariaLabel}>
                {children}
            </a>
        </>

    );
}

export default MyLink;