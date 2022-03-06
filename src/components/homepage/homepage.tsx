import {connect} from "react-redux";
import Banner from "./banner/banner";
import styles from "./homepage.module.css";
import MyLink from "../commons/myLink/myLink";
import SizeSelect from "./sizeselect/sizeSelect";
import FocusOnSelectSlider from "./slider/slider";
import CoveSelect from "./coverSelect/coveSelect";
import {
    ICoverItem,
    ICoverSelectState,
    setCoverActionCreator,
    setCoverErrorActionCreator,
} from "../../redux/coverSelectReducer";
import {
    IRootState,
    IHomePageProps,
    iSizeAndCoversObj,
    isCoverSelectedType,
    isSizesSelectedType,
    HomePageToOrderPageTermsType
} from "../interfacesAndTypes/interfacesAndTypes";
import {
    ISizeItem,
    ISizeSelectState,
    sizeSelectActionCreator,
    setSizeErrorActionCreator,
} from "../../redux/sizeSelectReducer";
import ContinueButton from "../commons/continueButton/continueButton";
import React, {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react";


const Homepage: React.FC<IHomePageProps> = ({
                                                sizes,
                                                covers,
                                                setCoverActionCreator,
                                                sizeSelectActionCreator,
                                                setSizeErrorActionCreator,
                                                setCoverErrorActionCreator,
                                            }: IHomePageProps) => {

    const selectedCoverAndSizeToLocalStorage = (sizes: ISizeSelectState, covers: ICoverSelectState) => {

        const selectedSize = sizes.sizes.filter((item: ISizeItem) => item.selected)
        const selectedCover = covers.covers.filter((item: ICoverItem) => item.selected)
        let sizeAndCoversObj: iSizeAndCoversObj = {cover: selectedCover[0].className, size: selectedSize[0].price}
        localStorage.setItem("sizeAndCoverObj", JSON.stringify(sizeAndCoversObj))
    }

    const [href, setHref]: [href: string, setHref: Dispatch<SetStateAction<string>>] = useState<string>("#size-select")

    const isCoverSelected: isCoverSelectedType = (covers: ICoverSelectState): boolean => {
        return covers.isSelected;
    }

    const isSizesSelected: isSizesSelectedType = (sizes: ISizeSelectState): boolean => {
        return sizes.isSelected
    }

    const HomePageToOrderPageTerms: HomePageToOrderPageTermsType = useCallback(() => {

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

        const terms = HomePageToOrderPageTerms()

        if (terms.sizeAndCoverNotSelected) {
            setCoverErrorActionCreator()
            setSizeErrorActionCreator()
        } else if (terms.coverSelectedSizeNot) {
            setSizeErrorActionCreator()
        } else if (terms.sizeSelectedCoversNot) {
            setCoverErrorActionCreator()
        }
    }

    useEffect(() => {

        const terms = HomePageToOrderPageTerms()

        if (terms.sizeAndCoverNotSelected) {
            setHref("#size_select")
        } else if (terms.coverSelectedSizeNot) {
            setHref("#size_select")
        } else if (terms.sizeSelectedCoversNot) {
            setHref("#cover_select")
        } else if (terms.allSelected) {
            setHref("/order")
            selectedCoverAndSizeToLocalStorage(sizes, covers)
        }

    }, [sizes, covers, HomePageToOrderPageTerms])


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

const mapStateToProps = (state: IRootState): { covers: ICoverSelectState, sizes: ISizeSelectState } => ({
    sizes: state.sizes,
    covers: state.covers,
})

const mapDispatchToProps = {
    setCoverActionCreator,
    sizeSelectActionCreator,
    setSizeErrorActionCreator,
    setCoverErrorActionCreator
}

const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(Homepage)

export default ConnectedHomePage;