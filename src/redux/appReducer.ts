const SET_HREF = "REACTSPA/SRC/REDUX/APP_REDUCER/SET_HREF"

interface ISetHrefAction {
    type: typeof SET_HREF
    payload: string
}

export interface IAppState {
    href: string
}

export const initialState: IAppState = {
    href: "#size-select"
}

type actionsType = ISetHrefAction
type appReducerType = (state: IAppState, action: actionsType) => IAppState

const appReducer: appReducerType = (state = initialState, action: actionsType): IAppState => {
    switch (action.type) {
        case SET_HREF: {
            return {
                ...state, href: action.payload
            }
        }
        default:
            return state
    }
}

export type setHrefActionCreatorType = (payload: string) => ISetHrefAction


export const setHrefActionCreator: setHrefActionCreatorType = (payload: string) => ({type: SET_HREF, payload})

export default appReducer
