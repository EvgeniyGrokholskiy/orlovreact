import {connect} from "react-redux";
import Banner from "./banner/banner";
import styles from "./homepage.module.css";
import {IRootState} from "../../redux/store";
import MyLink from "../commons/myLink/myLink";
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
import React, {ReactNode, useCallback, useEffect, useState} from "react";


interface ICoversItem {
    tabIndex: number,
    name: string,
    className: string,
    selected: boolean,
    cover: string
}

interface ICovers {
    error: boolean,
    covers: Array<ICoversItem>
}

interface ISizesItem {
    format: string,
    name: string,
    price: string,
    selected: boolean,
    size: string,
    tabIndex: number,
    top: boolean
}

interface ISizes {
    error: boolean,
    sizes: Array<ISizesItem>
}

interface IProps {
    covers: ICovers
    sizes: ISizes
    setCoverActionCreator: (index: number) => void
    setCoverErrorActionCreator: () => void
    removeCoverErrorActionCreator: () => void
    sizeSelectActionCreator: (index: number) => void
    setSizeErrorActionCreator: () => void
    removeSizeErrorActionCreator: () => void
    children?: ReactNode;
}

type TermsType = () => {
    sizeAndCoverNotSelected: boolean
    sizeSelectedCoversNot: boolean
    coverSelectedSizeNot: boolean
    allSelected: boolean
}
type isCoverSelectedType = (covers: ICovers) => boolean
type isSizesSelectedType = (sizes: ISizes) => boolean

const Homepage: React.FC<IProps> = ({
                                        covers,
                                        setCoverActionCreator,
                                        setCoverErrorActionCreator,
                                        removeCoverErrorActionCreator,
                                        sizes,
                                        sizeSelectActionCreator,
                                        setSizeErrorActionCreator,
                                        removeSizeErrorActionCreator
                                    }: IProps) => {

    const [href, setHref] = useState("#size-select")

    const isCoverSelected: isCoverSelectedType = (covers: ICovers) => {
        const selected = covers.covers.filter((item: ICoversItem) => item.selected)
        return !!selected[0];
    }

    const isSizesSelected: isSizesSelectedType = (sizes: ISizes) => {
        const selected = sizes.sizes.filter((item: ISizesItem) => item.selected)
        return !!selected[0];
    }

    const Terms: TermsType = useCallback(() => {
        const isSize: boolean = isSizesSelected(sizes)
        const isCover: boolean = isCoverSelected(covers)

        const sizeAndCoverNotSelected: boolean = (!isSize && !isCover)
        const sizeSelectedCoversNot: boolean = (!isCover && (isSize && !isCover))
        const coverSelectedSizeNot: boolean = (!isSize && (isCover && !isSize))
        const allSelected: boolean = (isSize && isCover)

        return {
            sizeAndCoverNotSelected, sizeSelectedCoversNot, coverSelectedSizeNot, allSelected
        }
    }, [sizes, covers])


    const nextPage: (() => void) | null = () => {
        const terms = Terms()

        if (terms.sizeAndCoverNotSelected) {
            setCoverErrorActionCreator()
            setSizeErrorActionCreator()
        } else if (terms.coverSelectedSizeNot) {
            setSizeErrorActionCreator()
            removeCoverErrorActionCreator()
        } else if (terms.sizeSelectedCoversNot) {
            setCoverErrorActionCreator()
            removeSizeErrorActionCreator()
        } else if (terms.allSelected) {
            removeSizeErrorActionCreator()
            removeCoverErrorActionCreator()
        }
    }

    useEffect(() => {
        const terms = Terms()

        if (terms.sizeAndCoverNotSelected) {
            setHref("#size_select")
        } else if (terms.coverSelectedSizeNot) {
            setHref("#size_select")
        } else if (terms.sizeSelectedCoversNot) {
            setHref("#cover_select")
        } else if (terms.allSelected) {
            setHref("/order")
        }

    }, [sizes, covers, Terms])


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

const mapStateToProps = (state: IRootState) => ({
    covers: state.covers,
    sizes: state.sizes,
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