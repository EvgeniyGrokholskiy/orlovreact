import {ISizeItem} from "./sizeSelectReducer";
import {ICoverItem} from "./coverSelectReducer";

const SELECT_OPTION_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SELECT_OPTION_ACTION"
const SET_TRACK_NAME_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_TRACK_NAME_ACTION"
const UPLOAD_IMAGE_FILE_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/UPLOAD_IMAGE_FILE_ACTION"
const SET_OPTIONAL_TEXT_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_OPTIONAL_TEXT_ACTION"
const SET_PERFORMER_NAME_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_PERFORMER_NAME_ACTION"
const SET_TRACK_NAME_ERROR_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_TRACK_NAME_ERROR_ACTION"
const UPDATE_SELECTED_OPTION_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/UPDATE_SELECTED_OPTION_ACTION"
const SET_OPTIONAL_TEXT_ERROR_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_OPTIONAL_TEXT_ERROR_ACTION"
const SET_PERFORMER_NAME_ERROR_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_PERFORMER_NAME_ERROR_ACTION"
const SET_MODAL_WINDOW_IS_OPEN_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_MODAL_WINDOW_IS_OPEN_ACTION"
const SET_MODAL_WINDOW_IS_CLOSE_ACTION = "REACTSPA/SRC/REDUX/ORDER_REDUCER/SET_MODAL_WINDOW_IS_CLOSE_ACTION"
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

interface ISetTrackNameErrorAction {
    type: typeof SET_TRACK_NAME_ERROR_ACTION
}

interface IUpdateSelectedOptionAction {
    type: typeof UPDATE_SELECTED_OPTION_ACTION
    payload: IOrderState
}

interface ISetOptionalTextErrorAction {
    type: typeof SET_OPTIONAL_TEXT_ERROR_ACTION
}

interface ISetModalWindowIsOpenAction {
    type: typeof SET_MODAL_WINDOW_IS_OPEN_ACTION
}

interface ISetModalWindowIsCloseAction {
    type: typeof SET_MODAL_WINDOW_IS_CLOSE_ACTION
}

interface ISetPerformerNameErrorAction {
    type: typeof SET_PERFORMER_NAME_ERROR_ACTION
}

interface ISetSelectedSizeOfProductAction {
    type: typeof SET_SELECTED_SIZE_OF_PRODUCT_ACTION
    payload: string
}

interface ISetSelectedCoverOfProductAction {
    type: typeof SET_SELECTED_COVER_OF_PRODUCT_ACTION
    payload: string
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
    | ISetTrackNameErrorAction
    | IUpdateSelectedOptionAction
    | ISetModalWindowIsOpenAction
    | ISetOptionalTextErrorAction
    | ISetModalWindowIsCloseAction
    | ISetPerformerNameErrorAction
    | ISetSelectedSizeOfProductAction
    | ISetSelectedCoverOfProductAction
    | IChangeImagePositionAndMagnificationAction


export interface IOrderState {
    top: number
    left: number
    height: number
    trackName: string
    optionalText: string
    performerName: string
    size: ISizeItem | null
    trackNameError: boolean
    cover: ICoverItem | null
    selectedCoverName: string
    selectedSizePrice: string
    optionalTextError: boolean
    isSendOrderWindow: boolean
    performerNameError: boolean
    uploadedImage: string | undefined
    orderOption: Array<IOrderOptionItem>
}

export interface IOrderOptionItem {
    id: string
    name: string
    isSelected: boolean
    price: number
}

const initialState: IOrderState = {
    cover: null,
    selectedCoverName: "apple",
    uploadedImage: undefined,
    isSendOrderWindow: false,
    orderOption: [
        /*{
            id:"0"
            name: "?????????????? ???????? (QR-??????)",
            isSelected: false,
            price: 500
        },*/
        {
            id: "1",
            name: "???????????????????????????? ?????????? ?????? ????????",
            isSelected: false,
            price: 100
        },
        {
            id: "2",
            name: "???????????????? ?????????????????? ???? ??????????",
            isSelected: false,
            price: 100
        },
        {
            id: "3",
            name: "???????????????? ???????????????????? ????????????????",
            isSelected: false,
            price: 300
        },
        {
            id: "4",
            name: "???????????????? ?????????????????????????????? ????????????????",
            isSelected: false,
            price: 150
        },
        {
            id: "5",
            name: "???????????????? ??????????????????",
            isSelected: false,
            price: 500
        },
        {
            id: "6",
            name: "???????????????? ???????????????? ???????????????????? ???? ??????????????????",
            isSelected: false,
            price: 300
        }

    ],
    optionalText: "",
    optionalTextError: false,
    performerName: "",
    performerNameError: false,
    size: null,
    selectedSizePrice: "0",
    trackName: "",
    trackNameError: false,
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
                ...state, trackName: action.payload, trackNameError: false
            }
        }
        case SET_OPTIONAL_TEXT_ACTION: {
            return {
                ...state, optionalText: action.payload, optionalTextError: false
            }
        }
        case UPLOAD_IMAGE_FILE_ACTION: {
            return {
                ...state, uploadedImage: action.payload
            }
        }
        case SET_PERFORMER_NAME_ACTION: {
            return {
                ...state, performerName: action.payload, performerNameError: false
            }
        }
        case SET_TRACK_NAME_ERROR_ACTION: {
            return {
                ...state, trackNameError: true
            }
        }
        case UPDATE_SELECTED_OPTION_ACTION: {
            return {
                ...action.payload
            }
        }
        case SET_OPTIONAL_TEXT_ERROR_ACTION: {
            return {
                ...state, optionalTextError: true
            }
        }
        case SET_MODAL_WINDOW_IS_OPEN_ACTION: {
            return {
                ...state, isSendOrderWindow: true
            }
        }
        case SET_MODAL_WINDOW_IS_CLOSE_ACTION: {
            return {
                ...state, isSendOrderWindow: false
            }
        }
        case SET_PERFORMER_NAME_ERROR_ACTION: {
            return {
                ...state, performerNameError: true
            }
        }
        case SET_SELECTED_SIZE_OF_PRODUCT_ACTION: {
            return {
                ...state, selectedSizePrice: action.payload
            }
        }
        case SET_SELECTED_COVER_OF_PRODUCT_ACTION: {
            return {
                ...state, selectedCoverName: action.payload
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


export type selectOptionActionCreatorType = (id: string) => ISelectOptionAction

export type setTrackNameErrorActionCreatorType = () => ISetTrackNameErrorAction

export type setTrackNameActionCreatorType = (payload: string) => ISetTrackNameAction

export type setOptionalTextErrorActionCreatorType = () => ISetOptionalTextErrorAction

export type setModalWindowIsOpenActionCreatorType = () => ISetModalWindowIsOpenAction

export type setModalWindowIsCloseActionCreatorType = () => ISetModalWindowIsCloseAction

export type setPerformerNameErrorActionCreatorType = () => ISetPerformerNameErrorAction

export type setOptionalTextActionCreatorType = (payload: string) => ISetOptionalTextAction

export type setPerformerNameActionCreatorType = (payload: string) => ISetPerformerNameAction

export type uploadImageFileActionCreatorType = (payload: string | undefined) => IUploadImageFileAction

export type updateSelectedOptionActionCreatorType = (payload: IOrderState) => IUpdateSelectedOptionAction

export type setSelectedSizeOfProductActionCreatorType = (payload: string) => ISetSelectedSizeOfProductAction

export type setSelectedCoverOfProductActionCreatorType = (payload: string) => ISetSelectedCoverOfProductAction

export type changeImagePositionAndMagnificationActionCreatorType = (payload: string) => IChangeImagePositionAndMagnificationAction


export const selectOptionActionCreator: selectOptionActionCreatorType = (id: string) => {
    return {
        type: SELECT_OPTION_ACTION,
        payload: id
    }
}

export const setTrackNameErrorActionCreator: setTrackNameErrorActionCreatorType = () => {
    return {
        type: SET_TRACK_NAME_ERROR_ACTION
    }
}

export const setPerformerErrorActionCreator: setPerformerNameErrorActionCreatorType = () => {
    return {
        type: SET_PERFORMER_NAME_ERROR_ACTION
    }
}

export const setTrackNameActionCreator: setTrackNameActionCreatorType = (payload: string) => {
    return {
        type: SET_TRACK_NAME_ACTION,
        payload
    }
}

export const setModalWindowIsOpenActionCreator: setModalWindowIsOpenActionCreatorType = () => {
    return {
        type: SET_MODAL_WINDOW_IS_OPEN_ACTION
    }
}

export const setOptionalTextErrorActionCreator: setOptionalTextErrorActionCreatorType = () => {
    return {
        type: SET_OPTIONAL_TEXT_ERROR_ACTION
    }
}

export const setModalWindowIsCloseActionCreator: setModalWindowIsCloseActionCreatorType = () => {
    return {
        type: SET_MODAL_WINDOW_IS_CLOSE_ACTION
    }
}

export const setOptionalTextActionCreator: setOptionalTextActionCreatorType = (payload: string) => {
    return {
        type: SET_OPTIONAL_TEXT_ACTION,
        payload
    }
}

export const setPerformerNameActionCreator: setPerformerNameActionCreatorType = (payload: string) => {
    return {
        type: SET_PERFORMER_NAME_ACTION,
        payload
    }
}

export const uploadImageFileActionCreator: uploadImageFileActionCreatorType = (payload: string | undefined) => {
    return {
        type: UPLOAD_IMAGE_FILE_ACTION,
        payload
    }
}

export const updateSelectedOptionActionCreator: updateSelectedOptionActionCreatorType = (payload: IOrderState) => {
    return {
        type: UPDATE_SELECTED_OPTION_ACTION,
        payload
    }
}

export const setSelectedSizeOfProductActionCreator: setSelectedSizeOfProductActionCreatorType = (payload: string) => {
    return {
        type: SET_SELECTED_SIZE_OF_PRODUCT_ACTION,
        payload
    }
}

export const setSelectedCoverOfProductActionCreator: setSelectedCoverOfProductActionCreatorType = (payload: string) => {
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