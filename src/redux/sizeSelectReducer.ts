const SET_SIZE = "SET_SIZE";

type SetSizeAction = {
    type: typeof SET_SIZE
    payload: number
}
type SetSizeActions = SetSizeAction

type SizeSelectReducerType = (state:InitialStateType, action: SetSizeActions)=> InitialStateType

type SizeSelectActionType = (index: number) => { type: typeof SET_SIZE, payload: number }

type InitialStateItem = {
    format: string,
    name: string,
    price: string,
    selected: boolean
    size: string,
    tabIndex: number,
    top: boolean,
}
export type InitialStateType = Array<InitialStateItem>

const InitialState: InitialStateType = [
    {
        format: "A5",
        name: "small",
        price: "990",
        selected: true,
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

export const SizeSelectReducer:SizeSelectReducerType = (state: InitialStateType = InitialState, action: SetSizeActions) => {

    switch (action.type) {
        case SET_SIZE: {

            return state.map((item: InitialStateItem) => {
                if (item.tabIndex === action.payload) {
                    return ({...item, selected: true})
                }
                return ({...item, selected: false})
            })
        }

        default:
            return state
    }
}

export const sizeSelectActionCreator: SizeSelectActionType = (index: number) => ({type: SET_SIZE, payload: index})