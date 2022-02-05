import React from "react";
import Banner from "./banner/banner";
import Link from "../commons/link/link";
import styles from "./homepage.module.css"
import Button from "../commons/button/button";
import SizeSelect from "./sizeselect/sizeSelect";
import FocusOnSelectSlider from "./slider/slider";
import CoveSelect from "./coverSelect/coveSelect";


const Homepage = () => {

    return (
        <main>
            <section>
                <div className={styles.section_1}>
                    <div className={styles.info}>
                        <p className={styles.text}>
                            Тренд 2021 года - трек-пластинка на органическом стекле с вашей фотографией и любимой
                            песней,
                            которая вызывает у вас мурашки по телу.
                            С помощью трек-пластинки можно воспроизвести на смартфоне ту самую любимую песню, наведя
                            камеру
                            телефона на специальный spotify-код
                        </p>
                        <div className={styles.order_buttons}>
                            <Button className={`${styles.order_button} ${styles.shadow}`}>Заказать</Button>
                            <Link
                                className={`${styles.link} ${styles.instagram} ${styles.shadow} ${styles.shadowRound}`}
                                ariaLabel="ссылка на инстаграм"
                                href="https://www.instagram.com/trend_gifts74/"/>
                        </div>
                        <div className={styles.header}>
                            <h2>Вы можете выбрать любую песню и любое фото!</h2>
                        </div>
                    </div>
                    <FocusOnSelectSlider/>
                </div>
            </section>
            <section>
                <Banner/>
            </section>
            <section>
                <SizeSelect/>
                <hr className={styles.separator}/>
            </section>
            <section>
                <CoveSelect />
                <hr className={styles.separator}/>
                <Link className={`${styles.continue} shadow`} data-href="" ariaLabel={""} href={""} target={"_self"}>Продолжить</Link>
            </section>
        </main>
    );
};

export default Homepage;