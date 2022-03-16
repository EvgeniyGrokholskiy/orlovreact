const SET_SIZE_ACTION = "REACTSPA/SRC/REDUX/SIZE_SELECT_REDUCER/SET_SIZE_ACTION"
const SET_SIZE_ERROR_ACTION = "REACTSPA/SRC/REDUX/SIZE_SELECT_REDUCER/SET_SIZE_ERROR_ACTION"

export interface ISetSizeAction {
    type: typeof SET_SIZE_ACTION
    payload: number
}

export interface ISetErrorAction {
    type: typeof SET_SIZE_ERROR_ACTION
}

type SetSizeActions = ISetSizeAction | ISetErrorAction


export interface ISizeItem {
    top: boolean,
    name: string,
    size: string,
    price: string,
    format: string,
    selected: boolean
    tabIndex: number,
}

export interface ISizeSelectState {
    error: boolean
    isSelected: boolean
    sizes: Array<ISizeItem>
}

const InitialState: ISizeSelectState = {
    error: false,
    isSelected: false,
    sizes: [
        {
            format: "A5",
            name: "small",
            price: "990",
            selected: false,
            size: "148.0×210.0 мм, толщина 3 мм",
            tabIndex: 5,
            top: false
        },
        {
            format: "A4",
            name: "medium",
            price: "1490",
            selected: false,
            size: "210.0×297.0 мм, толщина 3 мм",
            tabIndex: 6,
            top: false
        },
        {
            format: "A3",
            name: "large",
            price: "3990",
            selected: false,
            size: "300.0×400.0 мм, толщина 3 мм",
            tabIndex: 7,
            top: false
        },
        {
            format: "Брелок с колечком",
            name: "trinket",
            price: "490",
            selected: false,
            size: "50,0×65,0 мм, толщина 3 мм",
            tabIndex: 8,
            top: true
        }
    ]
}

type SizeSelectReducerType = (state: ISizeSelectState, action: SetSizeActions) => ISizeSelectState


const sizeSelectReducer: SizeSelectReducerType = (state: ISizeSelectState = InitialState, action: SetSizeActions) => {

    switch (action.type) {
        case SET_SIZE_ACTION: {

            const newSizes = state.sizes.map((item: ISizeItem) => {
                if (item.tabIndex === action.payload) {
                    sessionStorage.setItem("size", item.name)
                    return ({...item, selected: true})
                }
                return ({...item, selected: false})
            })
            return ({
                ...state, sizes: newSizes, error: false, isSelected: true
            })
        }

        case SET_SIZE_ERROR_ACTION: {
            return ({
                ...state, error: true
            })
        }

        default:
            return state
    }
}

export type setSizeErrorActionCreatorType = () => ISetErrorAction
export type sizeSelectActionCreatorType = (index: number) => ISetSizeAction


export const setSizeErrorActionCreator: setSizeErrorActionCreatorType = () => ({type: SET_SIZE_ERROR_ACTION})
export const sizeSelectActionCreator: sizeSelectActionCreatorType = (index: number) => ({type: SET_SIZE_ACTION, payload: index})

export default sizeSelectReducer