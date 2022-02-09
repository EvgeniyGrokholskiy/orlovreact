import React from 'react';
import styles from "./coverSlect.module.css";
import CoverSelectButton from "./coverSelectButton/coverSelectButton";
import {setCoverActionCreator} from "../../../redux/coverSelectReducer";


type PropsType = {
    covers: Array<{ tabIndex: number, name: string, className: string, selected: boolean, cover: any }>
    setCoverActionCreator: (index: number) => void
}

type StateItemType = { tabIndex: number, name: string, className: string, selected: boolean, cover: any };

const CoveSelect = ({covers, setCoverActionCreator}: PropsType) => {

    return (

        <div className={styles.cover_select}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 id="cover_select" className={styles.header_text}>Выберите макет</h2>
                </div>
                <div className={styles.buttons}>
                    {
                        covers.map((item: StateItemType) => {
                            return (
                                <CoverSelectButton key={item.tabIndex} item={item} callback={setCoverActionCreator}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.cover_select__image}>
                {
                    covers.map((item: StateItemType) => {
                            if (item.selected) {
                                return (
                                    <img key={item.tabIndex} src={item.cover} alt="Обложка проигрывателя онлайн музыки"
                                         id="cover_img" width="280" height="379"/>
                                )
                            }
                            return null
                        }
                    )
                }
                {/* <img src={selectedCover} alt="Проигрыватель онлайн музыки" id="cover_img" width="280"
                     height="379"/>*/}
            </div>
        </div>
    );
};

export default CoveSelect;