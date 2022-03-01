import {ICoversItem, ISizesItem} from "../components/interfacesAndTypes/interfacesAndTypes";

const SET_TRACK_NAME_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_TRACK_NAME_ACTION"
const SET_PERFORMER_NAME_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_PERFORMER_NAME_ACTION"
const SET_OPTIONAL_TEXT_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_OPTIONAL_TEXT_ACTION"
const UPLOAD_IMAGE_FILE_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/UPLOAD_IMAGE_FILE_ACTION"
const CHANGE_IMAGE_POSITION_UP_DOWN_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/CHANGE_IMAGE_POSITION_UP_DOWN_ACTION"
const CHANGE_IMAGE_POSITION_LEFT_RIGHT_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/CHANGE_IMAGE_POSITION_LEFT_RIGHT_ACTION"
const CHANGE_IMAGE_MAGNIFICATION_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/CHANGE_IMAGE_MAGNIFICATION_ACTION"

interface ISetTrackNameAction {
    type: typeof SET_TRACK_NAME_ACTION
    payload: string
}

interface ISetPerformerNameAction {
    type: typeof SET_PERFORMER_NAME_ACTION
    payload: string
}

interface ISetOptionalTextAction {
    type: typeof SET_OPTIONAL_TEXT_ACTION
    payload: string
}

interface IUploadImageFileAction {
    type: typeof UPLOAD_IMAGE_FILE_ACTION
    payload: string | undefined
}

interface IChangeImagePositionUpDownAction {
    type: typeof CHANGE_IMAGE_POSITION_UP_DOWN_ACTION
    payload: string
}

interface IChangeImagePositionLeftRightAction {
    type: typeof CHANGE_IMAGE_POSITION_LEFT_RIGHT_ACTION
    payload: string
}

interface IChangeImageMagnificationAction {
    type: typeof CHANGE_IMAGE_MAGNIFICATION_ACTION
    payload: string
}

type actionType =
    ISetTrackNameAction
    | ISetPerformerNameAction
    | ISetOptionalTextAction
    | IUploadImageFileAction
    | IChangeImagePositionUpDownAction
    | IChangeImagePositionLeftRightAction
    | IChangeImageMagnificationAction

interface IOrderOptionItem {
    id: string
    name: string
    isSelected: boolean
    price: number
}

export interface IOrderState {
    size: ISizesItem | null
    cover: ICoversItem | null
    uploadedImage: string | undefined
    trackName: string
    performerName: string
    optionalText: string
    top: number
    left: number
    height: number
    orderOption: Array<IOrderOptionItem>
}

const initialState: IOrderState = {
    cover: null,
    uploadedImage: undefined,
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
    trackName: "",
    top: 0,
    left: 0,
    height: 203
}

type OrderReducerType = (state: IOrderState, action: actionType) => IOrderState

const orderReducer: OrderReducerType = (state: IOrderState = initialState, action: actionType): IOrderState => {
    switch (action.type) {
        case SET_TRACK_NAME_ACTION: {
            return {
                ...state, trackName: action.payload
            }
        }
        case SET_PERFORMER_NAME_ACTION: {
            return {
                ...state, performerName: action.payload
            }
        }
        case SET_OPTIONAL_TEXT_ACTION: {
            return {
                ...state, optionalText: action.payload
            }
        }
        case UPLOAD_IMAGE_FILE_ACTION: {
            return {
                ...state, uploadedImage: action.payload
            }
        }
        case CHANGE_IMAGE_POSITION_UP_DOWN_ACTION: {

            let newPosition: number = state.top

            if (action.payload === "up") {
                newPosition += 5
            }
            if (action.payload === "down") {
                newPosition -= 5
            }
            return {
                ...state, top: newPosition
            }
        }
        case CHANGE_IMAGE_POSITION_LEFT_RIGHT_ACTION: {

            let newPosition: number = state.left

            if (action.payload === "right") {
                newPosition += 5
            }
            if (action.payload === "left") {
                newPosition -= 5
            }
            return {
                ...state, left: newPosition
            }
        }
        case CHANGE_IMAGE_MAGNIFICATION_ACTION: {
debugger
            let newMagnification: number = state.height

            if (action.payload === "+") {
                newMagnification += 10
            }
            if (action.payload === "-") {
                newMagnification -= 10
            }
            return {
                ...state, height: newMagnification
            }
        }
        default: {
            return state
        }
    }
}

export type setTrackNameActionCreatorType = (payload: string) => {
    type: typeof SET_TRACK_NAME_ACTION
    payload: string
}

export type setPerformerNameActionCreatorType = (payload: string) => {
    type: typeof SET_PERFORMER_NAME_ACTION
    payload: string
}

export type setOptionalTextActionCreatorType = (payload: string) => {
    type: typeof SET_OPTIONAL_TEXT_ACTION
    payload: string
}

export type uploadImageFileActionCreatorType = (payload: string | undefined) => {
    type: typeof UPLOAD_IMAGE_FILE_ACTION
    payload: string | undefined
}

export type changeImagePositionUpDownActionCreatorType = (payload: string) => {
    type: typeof CHANGE_IMAGE_POSITION_UP_DOWN_ACTION
    payload: string
}

export type changeImagePositionLeftRightActionCreatorType = (payload: string) => {
    type: typeof CHANGE_IMAGE_POSITION_LEFT_RIGHT_ACTION
    payload: string
}

export type changeImageMagnificationActionCreatorType = (payload: string) => {
    type: typeof CHANGE_IMAGE_MAGNIFICATION_ACTION
    payload: string
}


export const setTrackNameActionCreator: setTrackNameActionCreatorType = (payload: string): ISetTrackNameAction => {
    return {
        type: SET_TRACK_NAME_ACTION,
        payload
    }
}

export const setPerformerNameActionCreator: setPerformerNameActionCreatorType = (payload: string): ISetPerformerNameAction => {
    return {
        type: SET_PERFORMER_NAME_ACTION,
        payload
    }
}

export const setOptionalTextActionCreator: setOptionalTextActionCreatorType = (payload: string): ISetOptionalTextAction => {
    return {
        type: SET_OPTIONAL_TEXT_ACTION,
        payload
    }
}

export const uploadImageFileActionCreator: uploadImageFileActionCreatorType = (payload: string | undefined): IUploadImageFileAction => {
    return {
        type: UPLOAD_IMAGE_FILE_ACTION,
        payload
    }
}

export const changeImagePositionUpDownActionCreator: changeImagePositionUpDownActionCreatorType = (payload: string) => {
    return {
        type: CHANGE_IMAGE_POSITION_UP_DOWN_ACTION,
        payload
    }
}

export const changeImagePositionLeftRightActionCreator: changeImagePositionLeftRightActionCreatorType = (payload: string) => {
    return {
        type: CHANGE_IMAGE_POSITION_LEFT_RIGHT_ACTION,
        payload
    }
}

export const changeImageMagnificationActionCreator: changeImageMagnificationActionCreatorType = (payload: string) => {
    return {
        type: CHANGE_IMAGE_MAGNIFICATION_ACTION,
        payload
    }
}

export default orderReducer