import React from 'react';
import MyLink from "../myLink/myLink";
import styles from "./footer.module.css";
import Logo from "../../../assets/images/footer/logo_orange_bg.jpg";


const Footer: React.FC = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.logo}>
                    <img src={Logo} alt={"Логотип компании"} className={styles.logo} height="80" width="80"/>
                </div>
                <div className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.item}><MyLink className={styles.nav_link} href="/delivery" ariaLabel={""}
                                                            target={"_self"}>Доставка и
                            оплата</MyLink></li>
                        <li className={styles.item}><MyLink className={styles.nav_link} href="/promotions"
                                                            ariaLabel={""} target={"_self"}>Акции</MyLink>
                        </li>
                    </ul>
                </div>
                <div className={styles.nav}>
                    <ul className={styles.ul_middle}>
                        <li className={styles.item}><MyLink className={styles.nav_link} href="/reviews" ariaLabel={""}
                                                            target={"_self"}>Отзывы</MyLink></li>
                        <li className={styles.item}><MyLink className={styles.nav_link} href="/policy" ariaLabel={""}
                                                            target={"_self"}>Политика
                            конфиденциальности</MyLink></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;