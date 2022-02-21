import {ICoversItem, ISizesItem} from "../components/interfacesAndTypes/interfacesAndTypes";

const ENTER_TRACK_NAME_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/ENTER_TRACK_NAME_ACTION"
const ENTER_PERFORMER_NAME_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/ENTER_TRACK_NAME_ACTION"
const ENTER_OPTIONAL_TEXT_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/ENTER_TRACK_NAME_ACTION"

interface IEnterTrackNameAction {
    type: typeof ENTER_TRACK_NAME_ACTION
    payload: string
}

interface IEnterPerformerNameAction {
    type: typeof ENTER_PERFORMER_NAME_ACTION
    payload: string
}

interface IEnterOptionalTextAction {
    type: typeof ENTER_OPTIONAL_TEXT_ACTION,
    payload: string
}

type actionType = IEnterTrackNameAction | IEnterPerformerNameAction | IEnterOptionalTextAction

interface IOrderOptionItem {
    id: string
    name: string
    isSelected: boolean
    price: number
}

export interface IOrder {
    size: ISizesItem | null
    cover: ICoversItem | null
    trackName: string
    performerName: string
    optionalText: string
    orderOption: Array<IOrderOptionItem>
}

const initialState: IOrder = {
    cover: null,
    orderOption: [
        /*{
            id:"1"
            name: "Оживить фото (QR-код)",
            isSelected: false,
            price: 500
        },*/
        {
            id: "2",
            name: "Добавить крепление на стену",
            isSelected: false,
            price: 100
        },
        {
            id: "3",
            name: "Добавить подарочную упаковку",
            isSelected: false,
            price: 300
        },
        {
            id: "4",
            name: "Добавить поздравительную открытку",
            isSelected: false,
            price: 150
        },
        {
            id: "5",
            name: "Добавить подставку",
            isSelected: false,
            price: 500
        },
        {
            id: "6",
            name: "Добавить лазерную гравировку на подставку",
            isSelected: false,
            price: 300
        }

    ],
    optionalText: "",
    performerName: "",
    size: null,
    trackName: ""
}

type OrderReducerType = (state: IOrder, action: any) => IOrder

const orderReducer: OrderReducerType = (state: IOrder = initialState, action: actionType): IOrder => {
    switch (action.type) {
        case ENTER_TRACK_NAME_ACTION: {
            return {
                ...state, trackName: action.payload
            }
        }
        case ENTER_PERFORMER_NAME_ACTION: {
            return {
                ...state, trackName: action.payload
            }
        }
        case ENTER_OPTIONAL_TEXT_ACTION: {
            return {
                ...state, trackName: action.payload
            }
        }
        default: {
            return state
        }
    }
}

type enterTrackNameActionCreatorType = (name: string) => {
    type: typeof ENTER_TRACK_NAME_ACTION
    payload: string
}

type enterPerformerNameActionCreatorType = (name: string) => {
    type: typeof ENTER_PERFORMER_NAME_ACTION
    payload: string
}

type enterOptionalTextActionCreatorType = (name: string) => {
    type: typeof ENTER_TRACK_NAME_ACTION
    payload: string
}

export const enterTrackNameActionCreator: enterTrackNameActionCreatorType = (name: string): IEnterTrackNameAction => {
    return {
        type: ENTER_TRACK_NAME_ACTION,
        payload: name
    }
}

export const enterPerformerNameActionCreator: enterPerformerNameActionCreatorType = (name: string): IEnterPerformerNameAction => {
    return {
        type: ENTER_PERFORMER_NAME_ACTION,
        payload: name
    }
}

export const enterOptionalTextActionCreator: enterOptionalTextActionCreatorType = (name: string): IEnterOptionalTextAction => {
    return {
        type: ENTER_TRACK_NAME_ACTION,
        payload: name
    }
}

export default orderReducer