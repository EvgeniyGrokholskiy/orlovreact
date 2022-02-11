import React from 'react';
import MyLink from "../commons/myLink/myLink";
import styles from "./promotions.module.css";

const Promotions: React.FC = () => {
    return (
        <div>
            <main>
                <section>
                    <div className={styles.wrapper}>
                        <h1 className={styles.header}>Акции</h1>
                        <p className={styles.text}>Подпишитесь на наш инстаграм и получите скидку 30% на первый
                            заказ.<br/>
                            Все актуальные акции - у нас в инстаграме.
                        </p>
                        <div className={styles.buttons}>

                            <MyLink
                                className={`${styles.button} ${styles.button_whatsapp} shadow shadow-round ${styles.link} ${styles.link_whatsapp}`}
                                href="https://wa.me/+79080405921"
                                target="_blank" ariaLabel={"отправить сообщение"}>
                            </MyLink>


                            <MyLink
                                className={`${styles.button} ${styles.button_instagram} shadow shadow-round ${styles.promotions__link} ${styles.link_instagram}`}
                                href="https://www.instagram.com/trend_gifts74/"
                                target="_blank" ariaLabel={"ссылка на инстаграм"}>
                            </MyLink>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Promotions;