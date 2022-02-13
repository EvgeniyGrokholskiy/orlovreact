const SET_SIZE = "REACTSPA/SRC/REDUX/SIZE_SELECT_REDUCER/SET_SIZE"
const SET_SIZE_ERROR = "REACTSPA/SRC/REDUX/SIZE_SELECT_REDUCER/SET_SIZE_ERROR"
const REMOVE_SIZE_ERROR = "REACTSPA/SRC/REDUX/SIZE_SELECT_REDUCER/REMOVE_SIZE_ERROR"

interface ISetSizeAction {
    type: typeof SET_SIZE
    payload: number
}
interface ISetErrorAction {
    type: typeof SET_SIZE_ERROR
}
interface IRemoveErrorAction {
    type: typeof REMOVE_SIZE_ERROR
}
type SetSizeActions = ISetSizeAction | ISetErrorAction | IRemoveErrorAction

type SizeSelectReducerType = (state: ISizeSelectStateType, action: SetSizeActions) => ISizeSelectStateType

type SizeSelectActionType = (index: number) => { type: typeof SET_SIZE, payload: number }
type SetErrorActionType = () => { type: typeof SET_SIZE_ERROR}
type RemoveErrorActionType = () => { type: typeof REMOVE_SIZE_ERROR}

interface IInitialStateItem {
    format: string,
    name: string,
    price: string,
    selected: boolean
    size: string,
    tabIndex: number,
    top: boolean,
}
export interface ISizeSelectStateType {
    error: boolean
    sizes: Array<IInitialStateItem>
}

const InitialState: ISizeSelectStateType = {
    error: false,
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

export const SizeSelectReducer: SizeSelectReducerType = (state: ISizeSelectStateType = InitialState, action: SetSizeActions) => {

    switch (action.type) {
        case SET_SIZE: {

            const newSizes = state.sizes.map((item: IInitialStateItem) => {
                if (item.tabIndex === action.payload) {
                    sessionStorage.setItem("size", item.name)
                    return ({...item, selected: true})
                }
                return ({...item, selected: false})
            })
            return ({
                ...state, sizes:newSizes, error: false
            })
        }

        case SET_SIZE_ERROR: {
            return ({
                ...state, error: true
            })
        }

        case REMOVE_SIZE_ERROR: {
            return ({
                ...state,error:false
            })
        }

        default:
            return state
    }
}

export const sizeSelectActionCreator: SizeSelectActionType = (index: number) => ({type: SET_SIZE, payload: index})
export const setSizeErrorActionCreator: SetErrorActionType = () => ({type: SET_SIZE_ERROR})
export const removeSizeErrorActionCreator: RemoveErrorActionType = () => ({type: REMOVE_SIZE_ERROR})