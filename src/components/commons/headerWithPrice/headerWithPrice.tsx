import React from "react";
import styles from "./headerWithPrice.module.css";
import {IHeaderWithPriceProps} from "../../interfacesAndTypes/interfacesAndTypes";


const HeaderWithPrice: React.FC<IHeaderWithPriceProps> = ({
                                                              id,
                                                              price,
                                                              header,
                                                              callback,
                                                              isListItem,
                                                              isSelected
                                                          }: IHeaderWithPriceProps) => {

    const priceToString = `+${price} р.`


    return (
        <div className={isListItem ? `${styles.container} ${styles.listItem}`: styles.container}>
            <div className={styles.text_and_price}>
                <p className={styles.text}>{header}</p>
                <p className={styles.price}>{price ? priceToString : undefined}</p>
            </div>
            {
                price && callback ?
                    <span className={`${styles.checkbox} ${isSelected ? styles.check : ""}`} onClick={() => {
                        callback(id ? id : '')
                    }}/>
                    :
                    undefined
            }
        </div>
    );
};

export default HeaderWithPrice;