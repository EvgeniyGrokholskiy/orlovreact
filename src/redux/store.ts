import {combineReducers, createStore} from 'redux'
import {SizeSelectReducer, SizeSelectStateType} from "./sizeSelectReducer";
import {coverSelectReducer, IInitialState} from "./coverSelectReducer";

export interface IRootState {
    covers: IInitialState
    sizes: SizeSelectStateType
}

const reducers = combineReducers({
    covers: coverSelectReducer,
    sizes: SizeSelectReducer
})

const store = createStore(reducers);

export default store;