import React from 'react';
import styles from "../coverSlect.module.css";

type StateItemType = { tabIndex: number, name: string, className: string, selected: boolean, cover: any }

type PropsType = {
    item: StateItemType,
    callback: (path: string) => void
}

const CoverSelectButton = ({item, callback}: PropsType) => {
    return (
        <div key={item.tabIndex} className={`${item.className} ${styles.button} shadow shadow-no_shadow`}
             tabIndex={item.tabIndex}
             data-src="img/apple.jpg"
             data-cover={item.cover}
             onClick={() => {
                 callback(item.cover)
             }}
        >
            <p className={styles.text}>{item.name}</p>
        </div>
    );
};

export default CoverSelectButton;