import React from 'react';
import {connect} from "react-redux";
import styles from "./order.module.css";
import {IRootState} from "../../redux/store";
import PlayerCover from "./playerCover/playerCover";
import TotalPrice from "./totalPrice/totalPrice";
import SocialLinks from "./socialLinks/socialLinks";
import TuningButtons from "./tunungButtons/tuningButtons";
import HeaderWithPrice from "../commons/headerWithPrice/headerWithPrice";
import Input from "../commons/input/input";
import {
    changeImageMagnificationActionCreator,
    changeImagePositionLeftRightActionCreator,
    changeImagePositionUpDownActionCreator,

    IOrderState,
    setOptionalTextActionCreator,
    setPerformerNameActionCreator,
    setTrackNameActionCreator,
    uploadImageFileActionCreator
} from '../../redux/orderReducer';
import UploadFile from "./uploadFile/uploadFile";


interface IOrderProps {
    order: IOrderState
    setTrackNameActionCreator: (name: string) => void
    setPerformerNameActionCreator: (name: string) => void
    setOptionalTextActionCreator: (name: string) => void
    uploadImageFileActionCreator: (payload: any) => void
    changeImagePositionUpDownActionCreator: (payload: string) => void
    changeImagePositionLeftRightActionCreator: (payload: string) => void
    changeImageMagnificationActionCreator: (payload: string) => void
}

const Order: React.FC<IOrderProps> = ({
                                          order,
                                          setTrackNameActionCreator,
                                          setPerformerNameActionCreator,
                                          setOptionalTextActionCreator,
                                          uploadImageFileActionCreator,
                                          changeImagePositionUpDownActionCreator,
                                          changeImagePositionLeftRightActionCreator,
                                          changeImageMagnificationActionCreator
                                      }: IOrderProps) => {

    return (
        <main>
            <section>
                <div className={styles.image_container}>
                    <PlayerCover cover={order.cover?.name} optionalText={order.optionalText} trackName={order.trackName}
                                 performerName={order.performerName} uploadedCover={order.uploadedImage}
                                 height={order.height} top={order.top} left={order.left}/>
                    <TuningButtons changeHeight={changeImageMagnificationActionCreator}
                                   changeTop={changeImagePositionUpDownActionCreator}
                                   changeLeft={changeImagePositionLeftRightActionCreator}/>
                    <SocialLinks/>
                    <TotalPrice/>
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
                </div>
            </section>
        </main>
    );
};

const mapStateToProps = (state: IRootState) => {
    return {
        order: state.order
    }
}

const mapDispatchToProps = {
    setTrackNameActionCreator,
    setPerformerNameActionCreator,
    setOptionalTextActionCreator,
    uploadImageFileActionCreator,
    changeImagePositionUpDownActionCreator,
    changeImagePositionLeftRightActionCreator,
    changeImageMagnificationActionCreator
}
const ConnectedOrder = connect(mapStateToProps, mapDispatchToProps)(Order)

export default ConnectedOrder;