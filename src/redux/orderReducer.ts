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

interface ISetModalWindowIsOpenAction {
    type: typeof SET_MODAL_WINDOW_IS_OPEN_ACTION
}

interface ISetOptionalTextErrorAction {
    type: typeof SET_OPTIONAL_TEXT_ERROR_ACTION
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

export type setTrackNameErrorActionCreatorType = () => {
    type: typeof SET_TRACK_NAME_ERROR_ACTION
}

export type setModalWindowIsOpenActionCreatorType = () => {
    type: typeof SET_MODAL_WINDOW_IS_OPEN_ACTION
}

export type setOptionalTextErrorActionCreatorType = () => {
    type: typeof SET_OPTIONAL_TEXT_ERROR_ACTION
}

export type setPerformerNameErrorActionCreatorType = () => {
    type: typeof SET_PERFORMER_NAME_ERROR_ACTION
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

export type setSelectedSizeOfProductActionCreatorType = (payload: string) => {
    type: typeof SET_SELECTED_SIZE_OF_PRODUCT_ACTION
    payload: string
}

export type setSelectedCoverOfProductActionCreatorType = (payload: string) => {
    type: typeof SET_SELECTED_COVER_OF_PRODUCT_ACTION
    payload: string
}

export type uploadImageFileActionCreatorType = (payload: string | undefined) => {
    type: typeof UPLOAD_IMAGE_FILE_ACTION
    payload: string | undefined
}

export type changeImagePositionAndMagnificationActionCreatorType = (payload: string) => {
    type: typeof CHANGE_IMAGE_POSITION_AND_MAGNIFICATION_ACTION
    payload: string
}

export type updateSelectedOptionActionCreatorType = (payload: IOrderState/*Array<IOrderOptionItem>*/) => {
    type: typeof UPDATE_SELECTED_OPTION_ACTION
    /*payload: Array<IOrderOptionItem>*/
    payload: IOrderState
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

export const setTrackNameErrorActionCreator: setTrackNameErrorActionCreatorType = (): ISetTrackNameErrorAction => {
    return {
        type: SET_TRACK_NAME_ERROR_ACTION
    }
}

export const setPerformerErrorActionCreator: setPerformerNameErrorActionCreatorType = (): ISetPerformerNameErrorAction => {
    return {
        type: SET_PERFORMER_NAME_ERROR_ACTION
    }
}

export const setOptionalTextActionCreator: setOptionalTextActionCreatorType = (payload: string): ISetOptionalTextAction => {
    return {
        type: SET_OPTIONAL_TEXT_ACTION,
        payload
    }
}

export const setModalWindowIsOpenActionCreator: setModalWindowIsOpenActionCreatorType = (): ISetModalWindowIsOpenAction => {
    return {
        type: SET_MODAL_WINDOW_IS_OPEN_ACTION
    }
}

export const setOptionalTextErrorActionCreator: setOptionalTextErrorActionCreatorType = (): ISetOptionalTextErrorAction => {
    return {
        type: SET_OPTIONAL_TEXT_ERROR_ACTION
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

export const setSelectedSizeOfProductActionCreator: setSelectedSizeOfProductActionCreatorType = (payload: string): ISetSelectedSizeOfProductAction => {
    return {
        type: SET_SELECTED_SIZE_OF_PRODUCT_ACTION,
        payload
    }
}

export const setSelectedCoverOfProductActionCreator: setSelectedCoverOfProductActionCreatorType = (payload: string): ISetSelectedCoverOfProductAction => {
    return {
        type: SET_SELECTED_COVER_OF_PRODUCT_ACTION,
        payload
    }
}

export const updateSelectedOptionActionCreator: updateSelectedOptionActionCreatorType = (payload: IOrderState): IUpdateSelectedOptionAction => {
    return {
        type: UPDATE_SELECTED_OPTION_ACTION,
        payload
    }
}

export const changeImagePositionAndMagnificationActionCreator: changeImagePositionAndMagnificationActionCreatorType = (payload: string): IChangeImagePositionAndMagnificationAction => {
    return {
        type: CHANGE_IMAGE_POSITION_AND_MAGNIFICATION_ACTION,
        payload
    }
}

export default orderReducer