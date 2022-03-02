import React from 'react';
import {connect} from "react-redux";
import styles from "./order.module.css";
import Input from "../commons/input/input";
import UploadFile from "./uploadFile/uploadFile";
import TotalPrice from "./totalPrice/totalPrice";
import SocialLinks from "./socialLinks/socialLinks";
import PlayerCover from "./playerCover/playerCover";
import TuningButtons from "./tunungButtons/tuningButtons";
import HeaderWithPrice from "../commons/headerWithPrice/headerWithPrice";
import {IOrderProps, IRootState} from "../interfacesAndTypes/interfacesAndTypes";
import {
    setTrackNameActionCreator,
    uploadImageFileActionCreator,
    setOptionalTextActionCreator,
    setPerformerNameActionCreator,
    changeImageMagnificationActionCreator,
    changeImagePositionUpDownActionCreator,
    changeImagePositionLeftRightActionCreator, IOrderOptionItem, selectOptionActionCreator, IOrderState
} from '../../redux/orderReducer';
import MyButton from "../commons/myButton/myButton";


const Order: React.FC<IOrderProps> = ({
                                          order,
                                          selectOptionActionCreator,
                                          setTrackNameActionCreator,
                                          setOptionalTextActionCreator,
                                          uploadImageFileActionCreator,
                                          setPerformerNameActionCreator,
                                          changeImageMagnificationActionCreator,
                                          changeImagePositionUpDownActionCreator,
                                          changeImagePositionLeftRightActionCreator
                                      }: IOrderProps) => {
    const getPrice = (order: IOrderState, startOfCount?: number) => {
        let totalPrice: number = 0
        order.orderOption.forEach((item: IOrderOptionItem) => {
            item.isSelected ? totalPrice += item.price : totalPrice += 0
        })
        return totalPrice
    }

    return (
        <main>
            <div className={styles.main_container}>
                <section>
                    <div className={styles.image_container}>
                        <PlayerCover cover={order.cover?.name} optionalText={order.optionalText}
                                     trackName={order.trackName}
                                     performerName={order.performerName} uploadedCover={order.uploadedImage}
                                     height={order.height} top={order.top} left={order.left}/>
                        <TuningButtons changeHeight={changeImageMagnificationActionCreator}
                                       changeTop={changeImagePositionUpDownActionCreator}
                                       changeLeft={changeImagePositionLeftRightActionCreator}/>
                        <SocialLinks/>
                        <TotalPrice price={getPrice(order)}/>
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
                        <MyButton className={styles.sendOrder}>{"Оформить заказ"}</MyButton>
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
    changeImageMagnificationActionCreator,
    changeImagePositionUpDownActionCreator,
    changeImagePositionLeftRightActionCreator
}
const ConnectedOrder = connect(mapStateToProps, mapDispatchToProps)(Order)

export default ConnectedOrder;