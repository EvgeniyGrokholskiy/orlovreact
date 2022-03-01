import {combineReducers, createStore} from 'redux'
import sizeSelectReducer, {ISizeSelectState} from "./sizeSelectReducer";
import coverSelectReducer, {IInitialState} from "./coverSelectReducer";
import orderReducer, {IOrderState} from "./orderReducer";

export interface IRootState {
    covers: IInitialState
    sizes: ISizeSelectState
    order: IOrderState
}

const reducers = combineReducers({
    covers: coverSelectReducer,
    sizes: sizeSelectReducer,
    order: orderReducer
})

const store = createStore(reducers);

export default store;