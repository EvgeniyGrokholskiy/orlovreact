import Modal from "./modal/modal";
import {connect} from "react-redux";
import styles from "./order.module.css";
import {getPrice} from "../../redux/selectors";
import MyInput from "../commons/input/myInput";
import React, {useEffect, useState} from "react";
import UploadFile from "./uploadFile/uploadFile";
import TotalPrice from "./totalPrice/totalPrice";
import PlayerCover from "./playerCover/playerCover";
import SocialLinks from "./socialLinks/socialLinks";
import TuningButtons from "./tunungButtons/tuningButtons";
import ContinueButton from "../commons/continueButton/continueButton";
import HeaderWithPrice from "../commons/headerWithPrice/headerWithPrice";
import {IOrderProps, IRootState} from "../interfacesAndTypes/interfacesAndTypes";
import {
    IOrderState,
    IOrderOptionItem,
    selectOptionActionCreator,
    setTrackNameActionCreator,
    setOptionalTextActionCreator,
    uploadImageFileActionCreator,
    setPerformerNameActionCreator,
    setPerformerErrorActionCreator,
    setTrackNameErrorActionCreator,
    setOptionalTextErrorActionCreator,
    setModalWindowIsOpenActionCreator,
    updateSelectedOptionActionCreator,
    setModalWindowIsCloseActionCreator,
    setSelectedSizeOfProductActionCreator,
    setSelectedCoverOfProductActionCreator,
    changeImagePositionAndMagnificationActionCreator,
} from "../../redux/orderReducer";
import {localStoreAPI} from "../../API/localStore";


const Order: React.FC<IOrderProps> = ({
                                          order,
                                          price,
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
                                          setModalWindowIsCloseActionCreator,
                                          setSelectedSizeOfProductActionCreator,
                                          setSelectedCoverOfProductActionCreator,
                                          changeImagePositionAndMagnificationActionCreator
                                      }: IOrderProps) => {

    useEffect(() => {
        const selectedSizeAndCoverString = localStoreAPI.getSizeAndCoverFromLocalState()
        if (selectedSizeAndCoverString) {
            setSelectedCoverOfProductActionCreator(selectedSizeAndCoverString.cover)
            setSelectedSizeOfProductActionCreator(selectedSizeAndCoverString.size)
        }
    }, [])

    useEffect(() => {
        const orderFromLocalStorage = localStoreAPI.getOrderFromLocalStorage()
        if (orderFromLocalStorage) {
            updateSelectedOptionActionCreator(orderFromLocalStorage)
        }
    }, [])

    useEffect(() => {
        localStoreAPI.setOrderToLocalStorage(order)
    }, [order])

    const [href, setHref] = useState("#trackName")

    const OrderPageToSendEmailTerms = (order: IOrderState) => {

        const isTrackName: boolean = !!order.trackName
        const isPerformerName: boolean = !!order.performerName
        const isOptionalText: boolean = !!order.optionalText
        const isOptionalTextSelected: boolean = order.orderOption[0].isSelected

        const allInputIsEmpty: boolean = !isTrackName && !isPerformerName && isOptionalTextSelected && isOptionalText
        const trackInputNotEmptyPerformerIsEmpty: boolean = isTrackName && !isPerformerName
        const performerInputNotEmptyTrackIsEmpty: boolean = !isTrackName && isPerformerName
        const allInputIsNotEmpty: boolean = isTrackName && isPerformerName && isOptionalTextSelected && isOptionalText
        const allInputIsNotEmptyWithOutOptionalText: boolean = isTrackName && isPerformerName && !isOptionalTextSelected

        return {
            allInputIsEmpty,
            performerInputNotEmptyTrackIsEmpty,
            trackInputNotEmptyPerformerIsEmpty,
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
                        <TotalPrice price={price}/>
                    </div>
                </section>
                <section>
                    <div className={styles.form_container}>
                        <HeaderWithPrice header={"Название трека"} anchor={"trackName"} error={order.trackNameError}/>
                        <MyInput value={order.trackName} placeholder={"Трек"} callback={setTrackNameActionCreator}/>
                        <HeaderWithPrice header={"Название исполнителя"} anchor={"performerName"}
                                         error={order.performerNameError}/>
                        <MyInput value={order.performerName} placeholder={"Исполнитель"}
                                 callback={setPerformerNameActionCreator}/>
                        <UploadFile callback={uploadImageFileActionCreator}/>
                        <HeaderWithPrice header={"Дополнительный текст или дата"}
                                         price={100} anchor={"optionalText"} error={order.optionalTextError}
                                         callback={selectOptionActionCreator}
                                         isSelected={order.orderOption[0].isSelected} id={order.orderOption[0].id}/>
                        <MyInput placeholder={"Текст"} value={order.orderOption[0].isSelected ? order.optionalText : ""}
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
                            order.isSendOrderWindow ? <Modal
                                close={(event) => {
                                    event.preventDefault()
                                    setModalWindowIsCloseActionCreator()
                                }}
                                submit={(event) => {
                                    event.preventDefault()
                                    console.log("submit")
                                }}/> : undefined
                        }
                    </div>
                </section>
            </div>
        </main>
    );
};

const mapStateToProps = (state: IRootState) => {
    return {
        order: state.order,
        price: getPrice(state, state.order.selectedSizePrice)
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
    setModalWindowIsCloseActionCreator,
    setSelectedSizeOfProductActionCreator,
    setSelectedCoverOfProductActionCreator,
    changeImagePositionAndMagnificationActionCreator
}
const ConnectedOrder = connect(mapStateToProps, mapDispatchToProps)(Order)

export default ConnectedOrder;