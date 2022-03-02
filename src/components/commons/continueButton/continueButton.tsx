import React from 'react';
import {IContinueButtonProps} from "../../interfacesAndTypes/interfacesAndTypes";


const ContinueButton: React.FC<IContinueButtonProps> = ({
                                              href,
                                              children,
                                              callback,
                                              className,
                                          }: IContinueButtonProps) => {

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