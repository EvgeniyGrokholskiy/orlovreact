import React, {useEffect} from 'react';
import {connect} from "react-redux";
import styles from "./order.module.css";
import Input from "../commons/input/input";
import UploadFile from "./uploadFile/uploadFile";
import TotalPrice from "./totalPrice/totalPrice";
import MyButton from "../commons/myButton/myButton";
import PlayerCover from "./playerCover/playerCover";
import SocialLinks from "./socialLinks/socialLinks";
import TuningButtons from "./tunungButtons/tuningButtons";
import HeaderWithPrice from "../commons/headerWithPrice/headerWithPrice";
import {
    getPriceType,
    ICoversItem,
    IOrderProps,
    IRootState,
    iSizeAndCoversObj, ISizesItem
} from "../interfacesAndTypes/interfacesAndTypes";
import {
    IOrderState,
    IOrderOptionItem,
    setTrackNameActionCreator,
    selectOptionActionCreator,
    uploadImageFileActionCreator,
    setOptionalTextActionCreator,
    setPerformerNameActionCreator,
    changeImagePositionAndMagnificationActionCreator,
    setSelectedSizeOfProductActionCreator,
    setSelectedCoverOfProductActionCreator
} from '../../redux/orderReducer';


const Order: React.FC<IOrderProps> = ({
                                          order,
                                          selectOptionActionCreator,
                                          setTrackNameActionCreator,
                                          setOptionalTextActionCreator,
                                          uploadImageFileActionCreator,
                                          setPerformerNameActionCreator,
                                          setSelectedSizeOfProductActionCreator,
                                          setSelectedCoverOfProductActionCreator,
                                          changeImagePositionAndMagnificationActionCreator
                                      }: IOrderProps) => {

    const getPrice: getPriceType = (order: IOrderState, startOfCount: string | undefined) => {
        const startOfCountValue = Number.parseFloat(startOfCount ? startOfCount : "0")
        let totalPrice: number = startOfCountValue
        order.orderOption.forEach((item: IOrderOptionItem) => {
            item.isSelected ? totalPrice += item.price : totalPrice += 0
        })
        return totalPrice
    }

    useEffect(() => {

        const selectedSizeAndCoverString: string | null = localStorage.getItem("price")

        if (selectedSizeAndCoverString) {
            const selectedSizeAndCoverObj: iSizeAndCoversObj = JSON.parse(selectedSizeAndCoverString)
            const cover: ICoversItem = selectedSizeAndCoverObj.cover
            const size: ISizesItem = selectedSizeAndCoverObj.size
            if (order.cover?.name !== cover.name) {
                setSelectedCoverOfProductActionCreator(cover)
            }
            if (order.size?.name !== size.name) {
                setSelectedSizeOfProductActionCreator(size)
            }
        }
    },[])

   useEffect(()=>{

        const trackName = localStorage.getItem("trackName")
        const performerName = localStorage.getItem("performerName")
        const optionalText = localStorage.getItem("optionalText")

        if (order.trackName !== trackName) {
            setTrackNameActionCreator(trackName ? trackName : "")
        }
        if (order.performerName !== performerName) {
            setPerformerNameActionCreator(performerName ? performerName : "")
        }
        if (order.optionalText !== optionalText) {
            setOptionalTextActionCreator(optionalText ? optionalText : "")
        }
    },[])

    useEffect(() => {

        localStorage.setItem("trackName", order.trackName)
        localStorage.setItem("performerName", order.performerName)
        localStorage.setItem("optionalText", order.optionalText)

    },[order.trackName, order.performerName, order.optionalText])

    return (
        <main>
            <div className={styles.main_container}>
                <section>
                    <div className={styles.image_container}>
                        <PlayerCover cover={order.cover?.className} optionalText={order.optionalText}
                                     trackName={order.trackName}
                                     performerName={order.performerName} uploadedCover={order.uploadedImage}
                                     height={order.height} top={order.top} left={order.left}/>
                        <TuningButtons callback={changeImagePositionAndMagnificationActionCreator}/>
                        <SocialLinks/>
                        <TotalPrice price={getPrice(order, order.size?.price)}/>
                    </div>
                </section>
                <section>
                    <div className={styles.form_container}>
                        <HeaderWithPrice header={"Название трека"}/>
                        <Input value={order.trackName} placeholder={"Трек"} callback={setTrackNameActionCreator}/>
                        <HeaderWithPrice header={"Название исполнителя"}/>
                        <Input value={order.performerName} placeholder={"Исполнитель"}
                               callback={setPerformerNameActionCreator}/>
                        <UploadFile callback={uploadImageFileActionCreator}/>
                        <HeaderWithPrice header={"Дополнительный текст или дата"} price={100}
                                         callback={selectOptionActionCreator}
                                         isSelected={order.orderOption[0].isSelected} id={order.orderOption[0].id}/>
                        <Input placeholder={"Текст"} value={order.optionalText}
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
                        <MyButton className={`${styles.sendOrder} shadow`} id={""}
                                  callback={undefined}>{"Оформить заказ"}</MyButton>
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
    setSelectedSizeOfProductActionCreator,
    setSelectedCoverOfProductActionCreator,
    changeImagePositionAndMagnificationActionCreator
}
const ConnectedOrder = connect(mapStateToProps, mapDispatchToProps)(Order)

export default ConnectedOrder;