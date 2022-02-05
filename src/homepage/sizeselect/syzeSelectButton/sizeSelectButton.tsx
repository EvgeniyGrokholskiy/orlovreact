import React from 'react';
import styles from "../sizeSelect.module.css";

type PropsType = {name:string, tabIndex: number, format: string, size: string, price: string, top: boolean }

const SizeSelectButton = ({name, tabIndex, format, size, price, top}: PropsType) => {

    return (
        <div className={`${name} ${styles.button} ${"shadow"} ${"shadowNoShadow"}`} tabIndex={tabIndex}
             data-number="small">
            {
                top ?
                    <div className={styles.top_tag}/>
                    :
                    <></>
            }
            <div className={styles.name}>
                <p className={styles.text}>{format}</p>
                <p className={styles.text}>{size}</p>
            </div>
            <p className={styles.price}>{price}<span className={styles.price_tag}> &#x20bd;</span></p>
        </div>
    );
};

export default SizeSelectButton;