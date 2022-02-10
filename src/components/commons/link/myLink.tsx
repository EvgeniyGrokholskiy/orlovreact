import React, {ReactNode, MouseEvent} from 'react';

type PropsType = {
    ref?: any
    children?: ReactNode
    href: string
    ariaLabel: string
    className: string
    target?: string
    callback?: null | (() => void)
}

const MyLink: React.FC<PropsType> = React.forwardRef((props,ref:any) => {
    const {href,ariaLabel,children,callback,className,target} = props
    return (
        <>
            {
                !callback ?

                <a ref={ref} href={href} target={target} className={className} aria-label={ariaLabel}>
                    {children}
                </a>
                :
                <div ref={ref} className={className} onClick={(event:MouseEvent<HTMLDivElement>)=>callback()}>
                    {children}
                </div>
            }
        </>

    );
});

export default MyLink;