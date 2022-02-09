import apple from "../assets/images/homepage/apple.jpg";
import spotify from "../assets/images/homepage/spotify.jpg";
import vk_music from "../assets/images/homepage/vk.jpg";

const SET_COVER = "SET_COVER"

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

const coverSelectReducer = (state: InitialStateType = initialState, action: { type: string, payload?: any }) => {
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

type SetCoverActionType = (index: number) => { type: typeof SET_COVER, payload: number }

export const setCoverActionCreator: SetCoverActionType = (index: number) => ({type: SET_COVER, payload: index})

export default coverSelectReducer;