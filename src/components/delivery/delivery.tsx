import React from 'react';
import styles from "./delivery.module.css";
import MyLink from "../commons/myLink/myLink";
import Sdek from "../../assets/images/delivery/sdek.png";
import Visa from "../../assets/images/delivery/visa.svg";
import Mir from "../../assets/images/delivery/russian_post.svg";
import Mastercard from "../../assets/images/delivery/mastercard.svg";
import RussianPost from "../../assets/images/delivery/russian_post.svg";


const Delivery: React.FC = () => {

    return (
        <main>
            <div className={styles.container}>
                <div className={styles.chose}>
                    <h1 className={styles.header}>Доставка и оплата</h1>
                    <p className={styles.info}>Мы отправляем нашу продукцию ГК "СДЭК" или Почтой России. </p>
                    <p className={styles.info}>Вы можете узнать стоимость доставки перейдя по ссылкам.</p>
                </div>
                <div className={styles.icons}>
                    <MyLink className={styles.link} href="https://www.cdek.ru/ru/calculate" target="_blank"
                            ariaLabel={""}>
                        <img className={styles.icon_sdek} src={Sdek}
                             alt="Логотип экспресс-перевозчика «СДЭК»"
                             height="25"
                             width="112"/>
                    </MyLink>
                    <MyLink href="https://www.pochta.ru/parcels" className={styles.link} ariaLabel={""}>
                        <img className={styles.icon_post} src={RussianPost}
                             alt="Логотип Почты России" width="81" height="41"/>
                    </MyLink>
                </div>
            </div>

            <hr className={styles.separator}/>

            <div className={styles.payment}>
                <p className={styles.text}>Оплатить можно как предоплатой, так и наложенным платежом при
                    получении.
                    Проверяйте заказ на целостность СРАЗУ ПРИ ПОЛУЧЕНИИ.</p>
                <div className={styles.payment__icons}>
                    <img className={styles.payment__icons_visa_icon} src={Visa}
                         alt="Логотип компании Visa"
                         height="21" width="61"/>
                    <img className={styles.payment__icons_mir_icon} src={Mir}
                         alt="Логотип компании МИР" height="26"
                         width="67"/>
                    <img className={styles.payment__icons_mastercard_icon} src={Mastercard}
                         alt="Логотип компании Mastercard" height="26" width="41"/>
                </div>
            </div>

            <div className={styles.good_packaging}>
                <p className={styles.good_packaging__text}>Каждый заказ мы упаковываем в стрейч-пленку, картонную
                    упаковку и почтовый
                    пакет, чтобы ваш товар пришел к вам в целости и сохранности. Если все же при получении
                    возникли проблемы
                    - сфотографируйте и напишите нам.</p>
            </div>
        </main>
    );
};

export default Delivery;