import React, {Dispatch} from 'react';
import {connect} from "react-redux";
import {AnyAction} from 'redux';
import {IRootState} from "../../redux/store";
import {
    enterOptionalTextActionCreator,
    enterPerformerNameActionCreator,
    enterTrackNameActionCreator
} from "../../redux/orderReducer";


const Order: React.FC = () => {

    return (
        <div>
            order
        </div>
    );
};

const mapStateToProps = (state: IRootState) => {
    return {
        order: state.order
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        enterTrackNameActionCreator: (name: string) => dispatch(enterTrackNameActionCreator(name)),
        enterPerformerNameActionCreator: (name: string) => dispatch(enterPerformerNameActionCreator(name)),
        enterOptionalTextActionCreator: (name: string) => dispatch(enterOptionalTextActionCreator(name))
    }
}
const ConnectedOrder = connect(mapStateToProps,mapDispatchToProps)(Order)

export default ConnectedOrder;