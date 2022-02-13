import React, {ReactNode} from 'react';
import styles from "./coverSlect.module.css";
import AppleCover from "./../../../assets/images/homepage/apple.jpg";
import CoverSelectButton from "./coverSelectButton/coverSelectButton";

interface ICover {
    tabIndex: number,
    name: string,
    className: string,
    selected: boolean,
    cover: string
}

interface IProps {
    covers: Array<ICover>
    error: boolean
    setCoverActionCreator: (index: number) => void
    children?: ReactNode
}


const CoveSelect: React.FC<IProps> = ({covers, error, setCoverActionCreator}: IProps) => {

    const setCover = () => {

        return (
            covers.filter((item: ICover) => {
                    if (item.selected) {
                        return (
                            <img key={item.tabIndex} src={item.cover} alt="Обложка проигрывателя онлайн музыки" width="280"
                                 height="379"/>
                        )
                    }
                    return null
                }
            )
        )
    }

    let selectedCover: ICover | Array<ICover> | Array<null> = setCover()

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
                        covers.map((item: ICover) => {
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