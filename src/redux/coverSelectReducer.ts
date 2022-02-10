import apple from "../assets/images/homepage/apple.jpg";
import vk_music from "../assets/images/homepage/vk.jpg";
import spotify from "../assets/images/homepage/spotify.jpg";

const SET_COVER = "SET_COVER"

type SetCoverAction = {
    type: typeof SET_COVER
    payload: number
}

type CoverSelectActions = SetCoverAction

type coverSelectReducerType = (state:InitialStateType, action:CoverSelectActions) => InitialStateType

type SetCoverActionCreatorType = (index: number) => { type: typeof SET_COVER, payload: number }

type StateItem = {
    tabIndex: number,
    name: string,
    className: string,
    selected: boolean,
    cover: any
}

export type InitialStateType = Array<StateItem>

const initialState: InitialStateType = [
    {
        tabIndex: 9,
        name: "Apple Music",
        className: "apple",
        selected: true,
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

const coverSelectReducer:coverSelectReducerType = (state: InitialStateType = initialState, action: CoverSelectActions) => {
    switch (action.type) {
        case SET_COVER: {
            const newState: any = state.map((item: StateItem) => {
                if (action.payload === item.tabIndex) {
                    return {
                        ...item, selected: true
                    }
                }
                return {
                    ...item, selected: false
                }
            })
            return newState
        }
        default:
            return state
    }
}

export const setCoverActionCreator: SetCoverActionCreatorType = (index: number) => ({type: SET_COVER, payload: index})

export default coverSelectReducer;