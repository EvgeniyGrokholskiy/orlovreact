import React from 'react';
import styles from "../coverSlect.module.css";

type StateItemType = { tabIndex: number, name: string, className: string, selected: boolean, cover: any }

type PropsType = {
    item: StateItemType,
    callback: (index: number) => void
}

const CoverSelectButton = ({item, callback}: PropsType) => {
    return (
        <div className={`${item.className} ${styles.button} ${item.selected ? styles.selected : ""} shadow shadow-no_shadow`}
             onClick={() => {
                 callback(item.tabIndex)
             }}
        >
            <p className={styles.text}>{item.name}</p>
        </div>
    );
};

export default CoverSelectButton;