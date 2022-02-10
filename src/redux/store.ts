import {combineReducers, createStore} from 'redux'
import coverSelectReducer, {IInitialState} from "./coverSelectReducer";
import {SizeSelectReducer, SizeSelectStateType} from "./sizeSelectReducer";


const reducers = combineReducers({
    covers: coverSelectReducer,
    size: SizeSelectReducer
})

const store = createStore(reducers);

export type RootStateType = ReturnType<typeof store.getState>

export default store;