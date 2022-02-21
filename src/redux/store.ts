import {combineReducers, createStore} from 'redux'
import sizeSelectReducer, {ISizeSelectStateType} from "./sizeSelectReducer";
import coverSelectReducer, {IInitialState} from "./coverSelectReducer";
import orderReducer, {IOrder} from "./orderReducer";

export interface IRootState {
    covers: IInitialState
    sizes: ISizeSelectStateType
    order: IOrder
}

const reducers = combineReducers({
    covers: coverSelectReducer,
    sizes: sizeSelectReducer,
    order: orderReducer
})

const store = createStore(reducers);

export default store;