import React, {ReactNode} from 'react';
import styles from "../coverSlect.module.css";

interface IStateItem {
    tabIndex: number,
    name: string,
    className: string,
    selected: boolean,
    cover: any
}

interface IProps {
    item: IStateItem
    callback: (index: number) => void
    children?: ReactNode
}


const CoverSelectButton: React.FC<IProps> = ({item, callback}: IProps) => {

    return (
        <div
            className={`${item.className} ${styles.button} ${item.selected ? styles.selected : ""} shadow shadow-no_shadow`}
            onClick={() => {
                callback(item.tabIndex)
            }}
        >
            <p className={styles.text}>{item.name}</p>
        </div>
    );
};

export default CoverSelectButton;