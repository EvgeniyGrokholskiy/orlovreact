import React from 'react';
import { IMyLinkProps } from '../../interfacesAndTypes/interfacesAndTypes';


const MyLink: React.FC<IMyLinkProps> = ({
                                            href,
                                            children,
                                            ariaLabel,
                                            className,
                                            target = "_blank"
                                        }: IMyLinkProps) => {

    return (
        <>
            <a href={href} target={target} className={className} aria-label={ariaLabel}>
                {children}
            </a>
        </>

    );
}

export default MyLink;