import React, {ReactNode} from 'react';
import styles from "../coverSlect.module.css";
import {ICoverSelectButtonProps} from "../../../interfacesAndTypes/interfacesAndTypes";


const CoverSelectButton: React.FC<ICoverSelectButtonProps> = ({item, callback}: ICoverSelectButtonProps) => {

    return (
        <div
            className={`${item.className} ${styles.button} ${item.selected ? styles.selected : ""} shadow shadow-no_shadow`}
            onClick={() => {
                callback(item.tabIndex)
            }}
        >
            <p className={styles.text}>{item.name}</p>
        </div>
    );
};

export default CoverSelectButton;