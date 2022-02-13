import {combineReducers, createStore} from 'redux'
import {SizeSelectReducer, ISizeSelectStateType} from "./sizeSelectReducer";
import {coverSelectReducer, IInitialState} from "./coverSelectReducer";

export interface IRootState {
    covers: IInitialState
    sizes: ISizeSelectStateType
}

const reducers = combineReducers({
    covers: coverSelectReducer,
    sizes: SizeSelectReducer
})

const store = createStore(reducers);

export default store;