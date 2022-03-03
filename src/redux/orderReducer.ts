import {ICoversItem, ISizesItem} from "../components/interfacesAndTypes/interfacesAndTypes";

const SELECT_OPTION_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SELECT_OPTION_ACTION"
const SET_TRACK_NAME_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_TRACK_NAME_ACTION"
const SET_OPTIONAL_TEXT_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_OPTIONAL_TEXT_ACTION"
const UPLOAD_IMAGE_FILE_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/UPLOAD_IMAGE_FILE_ACTION"
const SET_PERFORMER_NAME_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_PERFORMER_NAME_ACTION"
const SET_SELECTED_SIZE_OF_PRODUCT_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_SELECTED_SIZE_OF_PRODUCT_ACTION"
const SET_SELECTED_COVER_OF_PRODUCT_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_SELECTED_COVER_OF_PRODUCT_ACTION"
const CHANGE_IMAGE_POSITION_AND_MAGNIFICATION_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/CHANGE_IMAGE_POSITION_AND_MAGNIFICATION_ACTION"

interface ISelectOptionAction {
    type: typeof SELECT_OPTION_ACTION
    payload: string
}

interface ISetTrackNameAction {
    type: typeof SET_TRACK_NAME_ACTION
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

interface ISetPerformerNameAction {
    type: typeof SET_PERFORMER_NAME_ACTION
    payload: string
}

interface ISetSelectedSizeOfProductAction {
    type: typeof SET_SELECTED_SIZE_OF_PRODUCT_ACTION
    payload: ISizesItem
}

interface ISetSelectedCoverOfProductAction {
    type: typeof SET_SELECTED_COVER_OF_PRODUCT_ACTION
    payload: ICoversItem
}

interface IChangeImagePositionAndMagnificationAction {
    type: typeof CHANGE_IMAGE_POSITION_AND_MAGNIFICATION_ACTION
    payload: string
}

type actionType =
    ISelectOptionAction
    | ISetTrackNameAction
    | ISetOptionalTextAction
    | IUploadImageFileAction
    | ISetPerformerNameAction
    | ISetSelectedSizeOfProductAction
    | ISetSelectedCoverOfProductAction
    | IChangeImagePositionAndMagnificationAction

export interface IOrderOptionItem {
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
            id:"0"
            name: "Оживить фото (QR-код)",
            isSelected: false,
            price: 500
        },*/
        {
            id: "1",
            name: "Дополнительный текст или дата",
            isSelected: false,
            price: 100
        },
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
        case SELECT_OPTION_ACTION: {
            const newArray: Array<IOrderOptionItem> = state.orderOption.map((item: IOrderOptionItem) => {
                if (item.id === action.payload) {
                    return {
                        ...item, isSelected: !item.isSelected
                    }
                }
                return item
            })

            return {
                ...state, orderOption: newArray
            }
        }
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
        case SET_SELECTED_SIZE_OF_PRODUCT_ACTION: {
            return {
                ...state, size: action.payload
            }
        }
        case SET_SELECTED_COVER_OF_PRODUCT_ACTION: {
            return {
                ...state, cover: action.payload
            }
        }
        case CHANGE_IMAGE_POSITION_AND_MAGNIFICATION_ACTION: {

            let newMagnification: number = state.height
            let newVerticalPosition: number = state.top
            let newHorizontalPosition: number = state.left

            switch (action.payload) {
                case "+": {
                    return {
                        ...state, height: newMagnification += 10
                    }
                }
                case "-": {
                    return {
                        ...state, height: newMagnification -= 10
                    }
                }
                case "up": {
                    return {
                        ...state, top: newVerticalPosition -= 5
                    }
                }
                case "down": {
                    return {
                        ...state, top: newVerticalPosition += 5
                    }
                }
                case "left": {
                    return {
                        ...state, left: newHorizontalPosition -= 5
                    }
                }
                case "right": {
                    return {
                        ...state, left: newHorizontalPosition += 5
                    }
                }
                default: {
                    return state
                }
            }
        }
        default: {
            return state
        }
    }
}

export type selectOptionActionCreatorType = (id: string) => {
    type: typeof SELECT_OPTION_ACTION
    payload: string
}

export type setTrackNameActionCreatorType = (payload: string) => {
    type: typeof SET_TRACK_NAME_ACTION
    payload: string
}

export type setOptionalTextActionCreatorType = (payload: string) => {
    type: typeof SET_OPTIONAL_TEXT_ACTION
    payload: string
}

export type setPerformerNameActionCreatorType = (payload: string) => {
    type: typeof SET_PERFORMER_NAME_ACTION
    payload: string
}

export type uploadImageFileActionCreatorType = (payload: string | undefined) => {
    type: typeof UPLOAD_IMAGE_FILE_ACTION
    payload: string | undefined
}

export type setSelectedSizeOfProductActionCreatorType = (payload: ISizesItem) => {
    type: typeof SET_SELECTED_SIZE_OF_PRODUCT_ACTION
    payload: ISizesItem
}

export type setSelectedCoverOfProductActionCreatorType = (payload: ICoversItem) => {
    type: typeof SET_SELECTED_COVER_OF_PRODUCT_ACTION
    payload: ICoversItem
}

export type changeImagePositionAndMagnificationActionCreatorType = (payload: string) => {
    type: typeof CHANGE_IMAGE_POSITION_AND_MAGNIFICATION_ACTION
    payload: string
}

export const selectOptionActionCreator: selectOptionActionCreatorType = (id: string): ISelectOptionAction => {
    return {
        type: SELECT_OPTION_ACTION,
        payload: id
    }
}

export const setTrackNameActionCreator: setTrackNameActionCreatorType = (payload: string): ISetTrackNameAction => {
    return {
        type: SET_TRACK_NAME_ACTION,
        payload
    }
}

export const setOptionalTextActionCreator: setOptionalTextActionCreatorType = (payload: string): ISetOptionalTextAction => {
    return {
        type: SET_OPTIONAL_TEXT_ACTION,
        payload
    }
}

export const setPerformerNameActionCreator: setPerformerNameActionCreatorType = (payload: string): ISetPerformerNameAction => {
    return {
        type: SET_PERFORMER_NAME_ACTION,
        payload
    }
}

export const uploadImageFileActionCreator: uploadImageFileActionCreatorType = (payload: string | undefined): IUploadImageFileAction => {
    return {
        type: UPLOAD_IMAGE_FILE_ACTION,
        payload
    }
}

export const setSelectedSizeOfProductActionCreator: setSelectedSizeOfProductActionCreatorType = (payload:ISizesItem) => {
    return {
        type: SET_SELECTED_SIZE_OF_PRODUCT_ACTION,
        payload
    }
}

export const setSelectedCoverOfProductActionCreator: setSelectedCoverOfProductActionCreatorType = (payload:ICoversItem) => {
    return {
        type: SET_SELECTED_COVER_OF_PRODUCT_ACTION,
        payload
    }
}

export const changeImagePositionAndMagnificationActionCreator: changeImagePositionAndMagnificationActionCreatorType = (payload: string) => {
    return {
        type: CHANGE_IMAGE_POSITION_AND_MAGNIFICATION_ACTION,
        payload
    }
}

export default orderReducer