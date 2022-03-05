import {connect} from "react-redux";
import styles from "./order.module.css";
import Input from "../commons/input/input";
import React, {useEffect, useState} from 'react';
import UploadFile from "./uploadFile/uploadFile";
import TotalPrice from "./totalPrice/totalPrice";
import PlayerCover from "./playerCover/playerCover";
import SocialLinks from "./socialLinks/socialLinks";
import TuningButtons from "./tunungButtons/tuningButtons";
import ContinueButton from "../commons/continueButton/continueButton";
import HeaderWithPrice from "../commons/headerWithPrice/headerWithPrice";
import {
    IRootState,
    IOrderProps,
    getPriceType,
    iSizeAndCoversObj
} from "../interfacesAndTypes/interfacesAndTypes";
import {
    IOrderState,
    IOrderOptionItem,
    setTrackNameActionCreator,
    selectOptionActionCreator,
    uploadImageFileActionCreator,
    setOptionalTextActionCreator,
    setPerformerNameActionCreator,
    setPerformerErrorActionCreator,
    setTrackNameErrorActionCreator,
    updateSelectedOptionActionCreator,
    setOptionalTextErrorActionCreator,
    setSelectedSizeOfProductActionCreator,
    setSelectedCoverOfProductActionCreator,
    changeImagePositionAndMagnificationActionCreator, setModalWindowIsOpenActionCreator
} from '../../redux/orderReducer';


const Order: React.FC<IOrderProps> = ({
                                          order,
                                          selectOptionActionCreator,
                                          setTrackNameActionCreator,
                                          setOptionalTextActionCreator,
                                          uploadImageFileActionCreator,
                                          setPerformerNameActionCreator,
                                          setTrackNameErrorActionCreator,
                                          setPerformerErrorActionCreator,
                                          setOptionalTextErrorActionCreator,
                                          setModalWindowIsOpenActionCreator,
                                          updateSelectedOptionActionCreator,
                                          setSelectedSizeOfProductActionCreator,
                                          setSelectedCoverOfProductActionCreator,
                                          changeImagePositionAndMagnificationActionCreator
                                      }: IOrderProps) => {

    const getPrice: getPriceType = (order: IOrderState, startOfCount: string | undefined) => {
        const startOfCountValue = Number.parseFloat(startOfCount ? startOfCount : "0")
        let totalPrice: number = startOfCountValue
        order.orderOption?.forEach((item: IOrderOptionItem) => {
            item.isSelected ? totalPrice += item.price : totalPrice += 0
        })
        return totalPrice
    }

    useEffect(() => {

        const selectedSizeAndCoverString: string | null = localStorage.getItem("sizeAndCoverObj")

        if (selectedSizeAndCoverString) {
            const selectedSizeAndCoverObj: iSizeAndCoversObj = JSON.parse(selectedSizeAndCoverString)
            const cover: string = selectedSizeAndCoverObj.cover
            const size: string = selectedSizeAndCoverObj.size
            if (order.selectedCoverName !== cover) {
                setSelectedCoverOfProductActionCreator(cover)
            }
            if (order.selectedSizePrice !== size) {
                setSelectedSizeOfProductActionCreator(size)
            }
        }
    }, [])

    const getOrderFromLocalStorage = () => {

        const orderString: string | null = localStorage.getItem("order")

        if (orderString) {
            const order: IOrderState = JSON.parse(orderString)
            return order
        }
    }

    useEffect(() => {

        const orderFromLocalStorage = getOrderFromLocalStorage()

        const trackName = orderFromLocalStorage?.trackName
        const performerName = orderFromLocalStorage?.performerName
        const optionalText = orderFromLocalStorage?.optionalText

        if (order.trackName !== trackName) {
            setTrackNameActionCreator(trackName ? trackName : "")
        }
        if (order.performerName !== performerName) {
            setPerformerNameActionCreator(performerName ? performerName : "")
        }
        if (order.optionalText !== optionalText) {
            setOptionalTextActionCreator(optionalText ? optionalText : "")
        }
        if (orderFromLocalStorage) {
            updateSelectedOptionActionCreator(orderFromLocalStorage.orderOption)
        }
    }, [])

    useEffect(() => {

        const orderToLocalstorageString = JSON.stringify(order)
        localStorage.setItem("order", orderToLocalstorageString)
        localStorage.setItem("trackName", order.trackName)
        localStorage.setItem("performerName", order.performerName)
        localStorage.setItem("optionalText", order.optionalText)

    }, [order])

    const [href, setHref] = useState("#trackName")

    const OrderPageToSendEmailTerms = (order: IOrderState) => {

        const isTrackName: boolean = !!order.trackName
        const isPerformerName: boolean = !!order.performerName
        const isOptionalText: boolean = !!order.optionalText
        const isOptionalTextSelected: boolean = order.orderOption[0].isSelected

        const allInputIsEmpty: boolean = !isTrackName && !isPerformerName && isOptionalTextSelected && isOptionalText
        const performerInputNotEmptyTrackIsEmpty: boolean = !isTrackName && isPerformerName
        const trackInputNotEmptyPerformerIsEmpty: boolean = isTrackName && !isPerformerName
        const trackAndPerformerNotEmptyOptionalIsEmpty: boolean = isTrackName && isPerformerName
        const allInputIsNotEmpty: boolean = isTrackName && isPerformerName && isOptionalTextSelected && isOptionalText
        const allInputIsNotEmptyWithOutOptionalText: boolean = isTrackName && isPerformerName && !isOptionalTextSelected

        return {
            allInputIsEmpty,
            performerInputNotEmptyTrackIsEmpty,
            trackInputNotEmptyPerformerIsEmpty,
            trackAndPerformerNotEmptyOptionalIsEmpty,
            allInputIsNotEmpty,
            allInputIsNotEmptyWithOutOptionalText
        }
    }

    const nextPage = (event: React.MouseEvent<HTMLAnchorElement>) => {


        const terms = OrderPageToSendEmailTerms(order)

        if (order.trackName.length === 0) {
            setTrackNameErrorActionCreator()
        }
        if (order.performerName.length === 0) {
            setPerformerErrorActionCreator()
        }
        if (order.orderOption[0].isSelected && (order.optionalText.length === 0)) {
            setOptionalTextErrorActionCreator()
        }
        if (terms.allInputIsNotEmpty || terms.allInputIsNotEmptyWithOutOptionalText) {
            event.preventDefault()
            setModalWindowIsOpenActionCreator()
        }
    }

    useEffect(() => {

        const terms = OrderPageToSendEmailTerms(order)

        if (terms.allInputIsEmpty && terms.performerInputNotEmptyTrackIsEmpty) {
            setHref("#trackName")
        }
        if (terms.trackInputNotEmptyPerformerIsEmpty) {
            setHref("#performerName")
        }
        if (terms.allInputIsNotEmpty || terms.allInputIsNotEmptyWithOutOptionalText) {
            setHref("")
        }
    }, [order, OrderPageToSendEmailTerms])

    return (
        <main>
            <div className={styles.main_container}>
                <section>
                    <div className={styles.image_container}>
                        <PlayerCover cover={order.selectedCoverName} optionalText={order.optionalText}
                                     trackName={order.trackName}
                                     performerName={order.performerName} uploadedCover={order.uploadedImage}
                                     height={order.height} top={order.top} left={order.left}/>
                        <TuningButtons callback={changeImagePositionAndMagnificationActionCreator}/>
                        <SocialLinks/>
                        <TotalPrice price={getPrice(order, order.selectedSizePrice)}/>
                    </div>
                </section>
                <section>
                    <div className={styles.form_container}>
                        <HeaderWithPrice header={"Название трека"} anchor={"trackName"} error={order.trackNameError}/>
                        <Input value={order.trackName} placeholder={"Трек"} callback={setTrackNameActionCreator}/>
                        <HeaderWithPrice header={"Название исполнителя"} anchor={"performerName"}
                                         error={order.performerNameError}/>
                        <Input value={order.performerName} placeholder={"Исполнитель"}
                               callback={setPerformerNameActionCreator}/>
                        <UploadFile callback={uploadImageFileActionCreator}/>
                        <HeaderWithPrice header={"Дополнительный текст или дата"}
                                         price={100} anchor={"optionalText"} error={order.optionalTextError}
                                         callback={selectOptionActionCreator}
                                         isSelected={order.orderOption[0].isSelected} id={order.orderOption[0].id}/>
                        <Input placeholder={"Текст"} value={order.orderOption[0].isSelected ? order.optionalText : ""}
                               callback={setOptionalTextActionCreator} isDisabled={!order.orderOption[0].isSelected}/>
                        {
                            order.orderOption.map((item: IOrderOptionItem) => {
                                if (item.id === "1") return undefined
                                return <HeaderWithPrice isListItem={true} key={item.id} header={item.name}
                                                        price={item.price} id={item.id}
                                                        isSelected={item.isSelected}
                                                        callback={selectOptionActionCreator}/>
                            })
                        }
                        <ContinueButton className={`${styles.sendOrder} shadow`} href={href}
                                        callback={nextPage}>{"Оформить заказ"}</ContinueButton>
                        {
                            order.isSendOrderWindow ? <div>{"modal"}</div> : undefined
                        }
                    </div>
                </section>
            </div>
        </main>
    );
};

const mapStateToProps = (state: IRootState) => {
    return {
        order: state.order
    }
}

const mapDispatchToProps = {
    selectOptionActionCreator,
    setTrackNameActionCreator,
    setOptionalTextActionCreator,
    uploadImageFileActionCreator,
    setPerformerNameActionCreator,
    setTrackNameErrorActionCreator,
    setPerformerErrorActionCreator,
    setOptionalTextErrorActionCreator,
    setModalWindowIsOpenActionCreator,
    updateSelectedOptionActionCreator,
    setSelectedSizeOfProductActionCreator,
    setSelectedCoverOfProductActionCreator,
    changeImagePositionAndMagnificationActionCreator
}
const ConnectedOrder = connect(mapStateToProps, mapDispatchToProps)(Order)

export default ConnectedOrder;