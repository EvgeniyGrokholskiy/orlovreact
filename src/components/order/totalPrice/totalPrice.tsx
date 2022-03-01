import React from "react";
import styles from "./totalPrice.module.css"

const TotalPrice:React.FC = () => {
    const totalPrice = "9999 p."
    return (
        <div className={styles.container}>
         <span className={styles.text}>Итого:</span>
         <span>{totalPrice}</span>
        </div>
    );
};

export default TotalPrice;