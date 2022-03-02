import React from "react";
import styles from "./totalPrice.module.css"

interface ITotalPriceProps {
    price: number
}

const TotalPrice: React.FC<ITotalPriceProps> = ({price}:ITotalPriceProps) => {

    const totalPriceToString = `${price} p.`

    return (
        <div className={styles.container}>
            <span className={styles.text}>Итого:</span>
            <span>{totalPriceToString}</span>
        </div>
    );
};

export default TotalPrice;