import React, {ReactNode} from "react";
import styles from "./sizeSelect.module.css"
import SizeSelectButton from "./syzeSelectButton/sizeSelectButton";

interface IItem {
    format: string,
    name: string,
    price: string,
    selected: boolean
    size: string,
    tabIndex: number,
    top: boolean,
}

interface IProps {
    sizes: Array<IItem>
    error: boolean
    sizeSelectActionCreator: (index: number) => void
    children?: ReactNode
}


const SizeSelect: React.FC<IProps> = ({sizes, error, sizeSelectActionCreator}: IProps) => {

    return (
        <div id={"size_select"} className={styles.size_select}>
            <div className={styles.header}>
                <h2 className={`${styles.header__text} ${error ? styles.error : ""}`}>Выберите
                    размер</h2>
            </div>
            <div className={styles.buttons}>
                {
                    sizes.map((item: IItem) => {
                        return <SizeSelectButton key={item.tabIndex} callback={sizeSelectActionCreator} name={item.name}
                                                 tabIndex={item.tabIndex} format={item.format} size={item.size}
                                                 price={item.price} top={item.top} selected={item.selected}/>
                    })
                }
            </div>
        </div>
    );
};

export default SizeSelect;