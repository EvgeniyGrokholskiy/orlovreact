import orderReducer from "./orderReducer";
import {combineReducers, createStore} from 'redux'
import sizeSelectReducer from "./sizeSelectReducer";
import coverSelectReducer from "./coverSelectReducer";


const reducers = combineReducers({
    order: orderReducer,
    sizes: sizeSelectReducer,
    covers: coverSelectReducer
})

const store = createStore(reducers);

export default store;