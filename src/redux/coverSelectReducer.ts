import apple from "../assets/images/homepage/apple.jpg";
import vk_music from "../assets/images/homepage/vk.jpg";
import spotify from "../assets/images/homepage/spotify.jpg";

const SET_COVER = "REACTSPA/SRC/REDUX/COVER_SELECT_REDUCER/SET_COVER"
const SET_COVER_ERROR = "REACTSPA/SRC/REDUX/COVER_SELECT_REDUCER/SET_COVER_ERROR"

interface ISetCoverAction {
    type: typeof SET_COVER
    payload: number
}

interface ISetErrorAction {
    type: typeof SET_COVER_ERROR
}

type coverSelectActionsType = ISetCoverAction | ISetErrorAction

type coverSelectReducerType = (state: ICoverSelectState, action: coverSelectActionsType) => ICoverSelectState

export type setCoverErrorActionCreatorType = () => { type: typeof SET_COVER_ERROR }
export type setCoverActionCreatorType = (index: number) => { type: typeof SET_COVER, payload: number }

export interface ICoverItem {
    tabIndex: number,
    name: string,
    className: string,
    selected: boolean,
    cover: string
}

export interface ICoverSelectState {
    error: boolean
    isSelected: boolean
    covers: Array<ICoverItem>
}

const initialState: ICoverSelectState = {
    error: false,
    isSelected: false,
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

const coverSelectReducer: coverSelectReducerType = (state: ICoverSelectState = initialState, action: coverSelectActionsType): ICoverSelectState => {
    switch (action.type) {
        case SET_COVER: {
            const newState: Array<ICoverItem> = state.covers.map((item: ICoverItem) => {
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
                ...state, covers: newState, error: false, isSelected: true
            })
        }

        case SET_COVER_ERROR: {
            return ({
                ...state, error: true
            })
        }

        default:
            return state
    }
}

export const setCoverErrorActionCreator: setCoverErrorActionCreatorType = () => ({type: SET_COVER_ERROR})
export const setCoverActionCreator: setCoverActionCreatorType = (index: number) => ({type: SET_COVER, payload: index})

export default coverSelectReducer