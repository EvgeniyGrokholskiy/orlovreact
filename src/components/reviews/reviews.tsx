import React from 'react';
import styles from "./reviews.module.css"
import MyLink from "../commons/myLink/myLink";

const Reviews: React.FC = () => {
    return (
        <main>
            <section>
                <div className={styles.wrapper}>
                    <h1 className={styles.header}>Отзывы и образцы готовых изделий</h1>
                    <p className={styles.text}>Смотрите в нашем инстаграме</p>
                    <MyLink className={`${styles.button} ${styles.button_instagram} ${styles.link} shadow shadow-round`}
                            href="https://www.instagram.com/trend_gifts74/" target="_blank"
                            ariaLabel={"ссылка на инстаграм"}>
                    </MyLink>
                </div>
            </section>
        </main>
    );
};

export default Reviews;