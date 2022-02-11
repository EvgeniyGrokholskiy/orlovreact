import {connect} from "react-redux";
import Banner from "./banner/banner";
import React, {ReactNode, useEffect, useState} from "react";
import styles from "./homepage.module.css";
import MyLink from "../commons/myLink/myLink";
import {RootStateType} from "../../redux/store";
import SizeSelect from "./sizeselect/sizeSelect";
import FocusOnSelectSlider from "./slider/slider";
import CoveSelect from "./coverSelect/coveSelect";
import {
    removeCoverErrorActionCreator,
    setCoverActionCreator,
    setCoverErrorActionCreator
} from "../../redux/coverSelectReducer";
import {
    removeSizeErrorActionCreator,
    setSizeErrorActionCreator,
    sizeSelectActionCreator
} from "../../redux/sizeSelectReducer";
import ContinueButton from "../commons/continueButton/continueButton";

type CoversType = { error: boolean, covers: Array<{ tabIndex: number, name: string, className: string, selected: boolean, cover: any }> }
type CoversCoversType = { tabIndex: number, name: string, className: string, selected: boolean, cover: any }
type SizesType = { error: boolean, sizes: Array<{ format: string, name: string, price: string, selected: boolean, size: string, tabIndex: number, top: boolean }> }
type SizesSizesType = { format: string, name: string, price: string, selected: boolean, size: string, tabIndex: number, top: boolean }

type PropsType = {
    covers: CoversType
    sizes: SizesType
    setCoverActionCreator: (index: number) => void
    setCoverErrorActionCreator: () => void
    removeCoverErrorActionCreator: () => void
    sizeSelectActionCreator: (index: number) => void
    setSizeErrorActionCreator: () => void
    removeSizeErrorActionCreator: () => void
    children?: ReactNode;
}

type IisCoverSelectedType = (covers: CoversType) => boolean
type IisSizesSelectedType = (sizes: SizesType) => boolean

const Homepage: React.FC<PropsType> = ({
                                           covers,
                                           setCoverActionCreator,
                                           setCoverErrorActionCreator,
                                           removeCoverErrorActionCreator,
                                           sizes,
                                           sizeSelectActionCreator,
                                           setSizeErrorActionCreator,
                                           removeSizeErrorActionCreator
                                       }: PropsType) => {

    const [href, setHref] = useState("#size-select")

    const nextPage: (() => void) | null = () => {
        const isSizes: boolean = isSizesSelected(sizes)
        const isCovers: boolean = isCoverSelected(covers)
        if (!isSizes && !isCovers) {
            setCoverErrorActionCreator()
            setSizeErrorActionCreator()
        } else if (!isSizes && (isCovers && !isSizes)) {
            setSizeErrorActionCreator()
        } else if (!isCovers && (isSizes && !isCovers)) {
            setCoverErrorActionCreator()
            removeSizeErrorActionCreator()
        } else if (isSizes && isCovers) {
            return
        }

    }

    const isCoverSelected: IisCoverSelectedType = (covers: CoversType) => {
        const selected = covers.covers.filter((item: CoversCoversType) => item.selected)
        return !!selected[0];
    }
    const isSizesSelected: IisSizesSelectedType = (sizes: SizesType) => {
        const selected = sizes.sizes.filter((item: SizesSizesType) => item.selected)
        return !!selected[0];
    }

    useEffect(() => {
        const isSizes: boolean = isSizesSelected(sizes)
        const isCovers: boolean = isCoverSelected(covers)

        if (!isSizes && !isCovers) {
            setHref("#size_select")
        } else if (!isSizes && (isCovers && !isSizes)) {
            setHref("#size_select")
        } else if (!isCovers && (isSizes && !isCovers)) {
            setHref("#cover_select")
        } else if (isSizes && isCovers) {
            setHref("/order")
        }

    }, [sizes, covers])


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
                <SizeSelect sizes={sizes.sizes} error={sizes.error} sizeSelectActionCreator={sizeSelectActionCreator}/>
                <hr className={styles.separator}/>
            </section>
            <section>
                <CoveSelect covers={covers.covers} error={covers.error} setCoverActionCreator={setCoverActionCreator}/>
                <hr className={styles.separator}/>
                <ContinueButton href={href} className={`${styles.continue} shadow`}
                                callback={nextPage}>Продолжить</ContinueButton>
            </section>
        </main>
    );
};

const mapStateToProps = (state: RootStateType) => ({
    covers: state.covers,
    sizes: state.size,
})

const mapDispatchToProps = {
    setCoverActionCreator,
    setCoverErrorActionCreator,
    removeCoverErrorActionCreator,
    sizeSelectActionCreator,
    setSizeErrorActionCreator,
    removeSizeErrorActionCreator
}

const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(Homepage)

export default ConnectedHomePage;