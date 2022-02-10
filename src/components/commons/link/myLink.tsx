import React, {ReactNode, MouseEvent} from 'react';

type PropsType = {
    children?: ReactNode
    href: string
    ariaLabel: string
    className: string
    target?: string
    callback?: null | (() => void)
}

const MyLink: React.FC<PropsType> = ({children, className, href, ariaLabel, target = "_blank", callback = null}: PropsType) => {
    return (
        <>
            {
                !callback ?

                <a href={href} target={target} className={className} aria-label={ariaLabel}>
                    {children}
                </a>
                :
                <div className={className} onClick={(event:MouseEvent<HTMLDivElement>)=>callback()}>
                    {children}
                </div>
            }
        </>

    );
};

export default MyLink;