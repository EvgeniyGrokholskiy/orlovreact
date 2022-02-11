import React, {ReactNode} from 'react';

type PropsType = {
    href: string
    children?: ReactNode
    className: string
    callback: (() => void) | null
}

const ContinueButton: React.FC<PropsType> = ({
                                                 href,
                                                 children,
                                                 callback,
                                                 className,
                                             }: PropsType) => {


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