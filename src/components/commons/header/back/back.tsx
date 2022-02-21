import React from 'react';
import {Link} from "react-router-dom";
import styles from "./back.module.css";
import Logo from "./../../../../assets/images/common/logo.jpg";
import {ReactComponent as BackArrow} from "./../../../../assets/images/homepage/back_arrow.svg";


const Back: React.FC = () => {

    return (

        <div className={styles.header__container}>
            <div className={styles.header__logo}>
                <img src={Logo} className={styles.logo} alt="Логотип компании" height="80" width="80"/>
                <Link to={"/"} className={styles.link}>
            <span>
            <BackArrow/>
            Назад
            </span>
                </Link>
            </div>
        </div>


    );
};

export default Back;