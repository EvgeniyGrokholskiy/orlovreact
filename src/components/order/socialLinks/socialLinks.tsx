import React from 'react';
import styles from "./socialLinks.module.css";
import MyLink from "../../commons/myLink/myLink";

const SocialLinks = () => {
    return (
        <div className={styles.socialLinks}>
            <p className={styles.text}>
                Не получилось загрузить фото или есть другие вопросы или проблемы?
                Переходите в мессенджер, подскажем
            </p>
            <div className={`${styles.socials}`}>

                <MyLink
                    className={`${styles.button} ${styles.whatsapp} shadow shadow-round ${styles.link}`}
                    href="https://wa.me/+79080405921"
                    target="_blank" referrerPolicy="origin" rel="noopener nofollow" ariaLabel={"whatsapp"}/>


                <MyLink
                    className={`${styles.button} ${styles.instagram} shadow shadow-round ${styles.link}`}
                    href="https://www.instagram.com/trend_gifts74" target="_blank"
                    referrerPolicy="origin" rel="noopener nofollow" ariaLabel={"instagram"}/>

            </div>
        </div>
    );
};

export default SocialLinks;