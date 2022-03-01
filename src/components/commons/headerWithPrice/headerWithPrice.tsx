import React from "react";
import styles from "./headerWithPrice.module.css";

interface IHeaderWithPriceProps {
    header: string
    price?: number
}

const HeaderWithPrice: React.FC<IHeaderWithPriceProps> = ({header, price}: IHeaderWithPriceProps) => {

    const priceToString = `+${price} р.`

    return (
        <div className={styles.container}>
            <p className={styles.text}>{header}</p>
            <p className={styles.price}>{price ? priceToString : undefined}</p>
        </div>
    );
};

export default HeaderWithPrice;