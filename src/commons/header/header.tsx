import React from "react";
import styles from "./header.module.css";
import Logo from "../../assets/images/common/logo.jpg";

const Header = () => {

    return (
        <div className={styles.header__container}>
            <div className={styles.header__logo}>
                <img src={Logo} className={styles.logo} alt="Логотип компании" height="80" width="80"/>
                <h1 className={styles.header__h1}>Подарки для самых близких и любимых</h1>
            </div>
        </div>
    );
};

export default Header;