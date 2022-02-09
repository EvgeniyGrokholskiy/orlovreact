import React from "react";
import styles from "./banner.module.css"

const Banner = () => {
    return (
        <div className={styles.banner} >
            <div className={styles.size} id="order">
                <h3 className={styles.size_header}>Размер</h3>
                <p className={styles.size_text}>А5 - 148×210мм,<br/>
                    А4 - 210×297мм,<br/>
                    А3 - 300×400мм,<br/>
                    или брелок 50×65 мм
                    </p>
            </div>
            <div className={styles.price}>
                <h3 className={styles.price_header}>Стоимость</h3>
                <p className={styles.price_text}>от 490 рублей</p>
            </div>
        </div>
    );
};

export default Banner;