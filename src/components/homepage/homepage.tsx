import {connect} from "react-redux";
import Banner from "./banner/banner";
import React, {ReactNode} from "react";
import styles from "./homepage.module.css";
import MyLink from "../commons/link/myLink";
import {RootStateType} from "../../redux/store";
import SizeSelect from "./sizeselect/sizeSelect";
import FocusOnSelectSlider from "./slider/slider";
import CoveSelect from "./coverSelect/coveSelect";
import {setCoverActionCreator} from "../../redux/coverSelectReducer";
import {sizeSelectActionCreator} from "../../redux/sizeSelectReducer";

type PropsType = {
    covers: Array<{ tabIndex: number, name: string, className: string, selected: boolean, cover: any }>
    sizes: Array<{ format: string, name: string, price: string, selected: boolean, size: string, tabIndex: number, top: boolean }>
    setCoverActionCreator: (index: number) => void
    sizeSelectActionCreator: (index:number) => void
    children?: ReactNode;
}

const Homepage:React.FC<PropsType> = ({covers, setCoverActionCreator, sizes, sizeSelectActionCreator}: PropsType) => {

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
                            <MyLink className={`${styles.order_button} ${styles.shadow}`} ariaLabel={""}
                                    href={"#order"} target={"_self"}>Заказать</MyLink>
                            <MyLink
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
                <SizeSelect sizes={sizes} sizeSelectActionCreator={sizeSelectActionCreator}/>
                <hr className={styles.separator}/>
            </section>
            <section>
                <CoveSelect covers={covers} setCoverActionCreator={setCoverActionCreator}/>
                <hr className={styles.separator}/>
                <MyLink className={`${styles.continue} shadow`} data-href="" ariaLabel={""} href={""}
                        target={"_self"}>Продолжить</MyLink>
            </section>
        </main>
    );
};

const mapStateToProps = (state: RootStateType) => ({
    covers: state.covers,
    sizes: state.size
})

const mapDispatchToProps = {
    setCoverActionCreator,
    sizeSelectActionCreator
}

const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(Homepage)

export default ConnectedHomePage;