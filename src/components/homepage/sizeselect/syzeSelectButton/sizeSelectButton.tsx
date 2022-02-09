import React from 'react';
import styles from "../sizeSelect.module.css";

type PropsType = { callback: (index: number) => void, name: string, tabIndex: number, format: string, selected: boolean, size: string, price: string, top: boolean }

const SizeSelectButton = ({callback, name, tabIndex, format, selected, size, price, top}: PropsType) => {

    return (
        <div className={`${name} ${styles.button} ${selected ? styles.selected : ""} shadow shadowNoShadow`} tabIndex={tabIndex}
             onClick={()=>{callback(tabIndex)}}>
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