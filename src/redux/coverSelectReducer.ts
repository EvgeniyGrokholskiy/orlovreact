import apple from "../assets/images/homepage/apple.jpg";
import vk_music from "../assets/images/homepage/vk.jpg";
import spotify from "../assets/images/homepage/spotify.jpg";

const SET_COVER = "SET_COVER"
const SET_COVER_ERROR = "SET_COVER_ERROR"
const REMOVE_COVER_ERROR = "REMOVE_COVER_ERROR"

type SetCoverAction = {
    type: typeof SET_COVER
    payload: number
}
type SetErrorAction = {
    type: typeof SET_COVER_ERROR
}
type RemoveErrorAction = {
    type: typeof REMOVE_COVER_ERROR
}

type CoverSelectActions = SetCoverAction | SetErrorAction | RemoveErrorAction

type coverSelectReducerType = (state: IInitialState, action: CoverSelectActions) => IInitialState

type SetCoverActionCreatorType = (index: number) => { type: typeof SET_COVER, payload: number }
type SetErrorActionCreatorType = () => { type: typeof SET_COVER_ERROR }
type RemoveErrorActionCreatorType = () => { type: typeof REMOVE_COVER_ERROR }

type StateItem = {
    tabIndex: number,
    name: string,
    className: string,
    selected: boolean,
    cover: any
}

export interface IInitialState {
    error: boolean
    covers: Array<StateItem>
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

export const coverSelectReducer: coverSelectReducerType = (state: IInitialState = initialState, action: CoverSelectActions): IInitialState => {
    switch (action.type) {
        case SET_COVER: {
            const newState: Array<StateItem> = state.covers.map((item: StateItem) => {
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

export const setCoverActionCreator: SetCoverActionCreatorType = (index: number) => ({type: SET_COVER, payload: index})
export const setCoverErrorActionCreator: SetErrorActionCreatorType = () => ({type: SET_COVER_ERROR})
export const removeCoverErrorActionCreator: RemoveErrorActionCreatorType = () => ({type: REMOVE_COVER_ERROR})