import React from 'react';
import Sdek from "../../assets/images/delivery/sdek.png"
import RussianPost from "../../assets/images/delivery/russian_post.svg" ;
import Visa from "../../assets/images/delivery/visa.svg"
import Mir from "../../assets/images/delivery/russian_post.svg";
import Mastercard from "../../assets/images/delivery/mastercard.svg"

const Delivery: React.FC = () => {

    return (
        <main>
            <div className="delivery_container">
                <div className="delivery__chose">
                    <h1 className="delivery__header">Доставка и оплата</h1>
                    <p className="delivery__info">Мы отправляем нашу продукцию ГК "СДЭК" или Почтой России. </p>
                    <p className="delivery__info">Вы можете узнать стоимость доставки перейдя по ссылкам.</p>
                </div>
                <div className="delivery__icons">
                    <a className="delivery__link" href="https://www.cdek.ru/ru/calculate" target="_blank"
                       rel="noopener nofollow" referrerPolicy="origin">
                        <img className="icon_sdek" src={Sdek}
                             alt="Логотип экспресс-перевозчика «СДЭК»"
                             height="25"
                             width="112"/>
                    </a>
                    <a href="https://www.pochta.ru/parcels" className="delivery__link" rel="noopener nofollow"
                       referrerPolicy="origin">
                        <img className="icon_post" src={RussianPost}
                             alt="Логотип Почты России" width="81" height="41"/>
                    </a>
                </div>
            </div>

            <hr className="separator"/>

            <div className="delivery__payment">
                <p className="delivery__text">Оплатить можно как предоплатой, так и наложенным платежом при
                    получении.
                    Проверяйте заказ на целостность СРАЗУ ПРИ ПОЛУЧЕНИИ.</p>
                <div className="delivery__payment__icons">
                    <img className="delivery__payment__icons-visa_icon" src={Visa}
                         alt="Логотип компании Visa"
                         height="21" width="61"/>
                    <img className="delivery__payment__icons-mir_icon" src={Mir}
                         alt="Логотип компании МИР" height="26"
                         width="67"/>
                    <img className="delivery__payment__icons-mastercard_icon" src={Mastercard}
                         alt="Логотип компании Mastercard" height="26" width="41"/>
                </div>
            </div>

            <div className="good_packaging">
                <p className="good_packaging__text">Каждый заказ мы упаковываем в стрейч-пленку, картонную
                    упаковку и почтовый
                    пакет, чтобы ваш товар пришел к вам в целости и сохранности. Если все же при получении
                    возникли проблемы
                    - сфотографируйте и напишите нам.</p>
            </div>
        </main>
    );
};

export default Delivery;