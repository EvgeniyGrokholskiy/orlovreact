import React, {useState} from 'react';
import styles from "./coverSlect.module.css";
import apple from "../../assets/images/homepage/apple.jpg";
import spotify from "../../assets/images/homepage/spotify.jpg";
import vk_music from "../../assets/images/homepage/vk.jpg";
import CoverSelectButton from "./coverSelectButton/coverSelectButton";

type StateItemType = { tabIndex: number, name: string, className: string, selected: boolean, cover: any };

const CoveSelect = () => {

    const [state, setState] = useState([
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
    ]);

    const [selectedCover, setSelectedCover] = useState(apple)

    const selectCover = (index: any) => {
/*        setState((prevState => {
            debugger
            return prevState.map((item) => {
                if (index === item.tabIndex) {
                    return {...item, selected: true}
                }
                return ({
                    ...item, selected: false
                })
            })
        }))*/
        setSelectedCover(index)
    }

    return (

        <div className={styles.cover_select}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 id="cover_select" className={styles.header_text}>Выберите макет</h2>
                </div>
                <div className={styles.buttons}>
                    {
                        state.map((item: StateItemType) => {
                            return (
                                <CoverSelectButton item={item} callback={selectCover}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className="cover_select__image">
                {/*{
                    state.map((item: StateItemType) => {
                            if (item.selected) {
                                return (
                                    <img src={item.cover} alt="Проигрыватель онлайн музыки" id="cover_img" width="280"
                                         height="379"/>
                                )
                            }
                            return
                        }
                    )
                }*/}
                <img src={selectedCover} alt="Проигрыватель онлайн музыки" id="cover_img" width="280"
                     height="379"/>
            </div>
        </div>
    );
};

export default CoveSelect;