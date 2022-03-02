import apple from "../assets/images/homepage/apple.jpg";
import vk_music from "../assets/images/homepage/vk.jpg";
import spotify from "../assets/images/homepage/spotify.jpg";

const SET_COVER = "REACTSPA/SRC/REDUX/COVER_SELECT_REDUCER/SET_COVER"
const SET_COVER_ERROR = "REACTSPA/SRC/REDUX/COVER_SELECT_REDUCER/SET_COVER_ERROR"
const REMOVE_COVER_ERROR = "REACTSPA/SRC/REDUX/COVER_SELECT_REDUCER/REMOVE_COVER_ERROR"

interface ISetCoverAction {
    type: typeof SET_COVER
    payload: number
}

interface ISetErrorAction {
    type: typeof SET_COVER_ERROR
}

interface IRemoveErrorAction {
    type: typeof REMOVE_COVER_ERROR
}

type CoverSelectActionsType = ISetCoverAction | ISetErrorAction | IRemoveErrorAction

type coverSelectReducerType = (state: IInitialState, action: CoverSelectActionsType) => IInitialState

type SetErrorActionCreatorType = () => { type: typeof SET_COVER_ERROR }
type RemoveErrorActionCreatorType = () => { type: typeof REMOVE_COVER_ERROR }
type SetCoverActionCreatorType = (index: number) => { type: typeof SET_COVER, payload: number }

interface IStateItem {
    tabIndex: number,
    name: string,
    className: string,
    selected: boolean,
    cover: string
}

export interface IInitialState {
    error: boolean
    covers: Array<IStateItem>
}

const initialState: IInitialState = {
    error: false,
    covers: [
        {
            tabIndex: 9,
            name: "Apple Music",
            className: "apple",
            selected: false,
            cover: apple
        },
        {
            tabIndex: 10,
            name: "Spotify",
            className: "spotify",
            selected: false,
            cover: spotify
        },
        {
            tabIndex: 11,
            name: "Музыка VK",
            className: "vk_music",
            selected: false,
            cover: vk_music
        }
    ]
}

const coverSelectReducer: coverSelectReducerType = (state: IInitialState = initialState, action: CoverSelectActionsType): IInitialState => {
    switch (action.type) {
        case SET_COVER: {
            const newState: Array<IStateItem> = state.covers.map((item: IStateItem) => {
                if (action.payload === item.tabIndex) {
                    sessionStorage.setItem("cover", item.className)
                    return {
                        ...item, selected: true
                    }
                }
                return {
                    ...item, selected: false
                }
            })
            return ({
                ...state, covers: newState, error: false
            })
        }

        case SET_COVER_ERROR: {
            return ({
                ...state, error: true
            })
        }

        case REMOVE_COVER_ERROR: {
            return ({
                ...state, error: false
            })
        }
        default:
            return state
    }
}

export const setCoverErrorActionCreator: SetErrorActionCreatorType = () => ({type: SET_COVER_ERROR})
export const removeCoverErrorActionCreator: RemoveErrorActionCreatorType = () => ({type: REMOVE_COVER_ERROR})
export const setCoverActionCreator: SetCoverActionCreatorType = (index: number) => ({type: SET_COVER, payload: index})

export default coverSelectReducer