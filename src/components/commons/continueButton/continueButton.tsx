import React, {ReactNode} from 'react';

interface IProps {
    href: string
    children?: ReactNode
    className: string
    callback: (() => void) | null
}


const ContinueButton: React.FC<IProps> = ({
                                              href,
                                              children,
                                              callback,
                                              className,
                                          }: IProps) => {


    return (
        <>
            {
                callback ?
                    <a href={href} target={"_self"} className={className} onClick={() => callback()}>
                        {children}
                    </a>
                    :
                    <a href={href} target={"_self"} className={className}>
                        {children}
                    </a>
            }
        </>

    );
}

export default ContinueButton;