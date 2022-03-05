import React from 'react';
import styles from "./coverSlect.module.css";
import {ICoverItem} from "../../../redux/coverSelectReducer";
import AppleCover from "./../../../assets/images/homepage/apple.jpg";
import CoverSelectButton from "./coverSelectButton/coverSelectButton";
import {ICoverSelectProps} from "../../interfacesAndTypes/interfacesAndTypes";


const CoveSelect: React.FC<ICoverSelectProps> = ({covers, error, setCoverActionCreator}: ICoverSelectProps) => {

    const setCover = (): ICoverItem => {
        const coversArray = covers.filter((item: ICoverItem) => {
                if (item.selected) {
                    return (
                        <img key={item.tabIndex} src={item.cover} alt="Обложка проигрывателя онлайн музыки" width="280"
                             height="379"/>
                    )
                }
                return null
            }
        )
        return coversArray[0]
    }

    let selectedCover: ICoverItem = setCover()

    return (

        <div className={styles.cover_select}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 id="cover_select" className={`${styles.header_text} ${error ? styles.error : ""}`}>
                        Выберите макет
                    </h2>
                </div>
                <div className={styles.buttons}>
                    {
                        covers.map((item: ICoverItem) => {
                            return (
                                <CoverSelectButton key={item.tabIndex} item={item} callback={setCoverActionCreator}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.cover_select__image}>
                {
                    <img src={selectedCover ? selectedCover.cover : AppleCover}
                         alt="Обложка проигрывателя онлайн музыки"
                         width="280" height="379"/>
                }
            </div>
        </div>
    );
};

export default CoveSelect;