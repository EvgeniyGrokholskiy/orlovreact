import React, {ReactNode} from 'react';
import styles from "./coverSlect.module.css";
import CoverSelectButton from "./coverSelectButton/coverSelectButton";
import AppleCover from "./../../../assets/images/homepage/apple.jpg"


type PropsType = {
    covers: Array<{ tabIndex: number, name: string, className: string, selected: boolean, cover: any }>
    error: boolean
    setCoverActionCreator: (index: number) => void
    children?: ReactNode
}

type StateItemType = { tabIndex: number, name: string, className: string, selected: boolean, cover: any };

const CoveSelect: React.FC<PropsType> = ({covers, error, setCoverActionCreator}: PropsType) => {

    const setCover = () => {
        return covers.filter((item: StateItemType) => {
                if (item.selected) {
                    return (
                        <img key={item.tabIndex} src={item.cover} alt="Обложка проигрывателя онлайн музыки" width="280"
                             height="379"/>
                    )
                }
                return null
            }
        )
    }

    let selectedCover: StateItemType | Array<any> = setCover()

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
                    <img src={selectedCover[0] ? selectedCover[0].cover : AppleCover}
                         alt="Обложка проигрывателя онлайн музыки"
                         width="280" height="379"/>
                }
            </div>
        </div>
    );
};

export default CoveSelect;