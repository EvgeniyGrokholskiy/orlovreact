import React, {ReactNode} from 'react';

interface IProps  {
    ariaLabel: string
    children?: ReactNode
    className: string
    href: string
    target?: string
    referrerPolicy?: string
    rel?: string
}


const MyLink: React.FC<IProps> = ({
                                         ariaLabel,
                                         children,
                                         className,
                                         href,
                                         target = "_blank"
                                     }: IProps) => {

    return (
        <>
            <a href={href} target={target} className={className} aria-label={ariaLabel}>
                {children}
            </a>
        </>

    );
}

export default MyLink;