import React, {ReactNode} from "react";
import styles from "./sizeSelect.module.css"
import SizeSelectButton from "./syzeSelectButton/sizeSelectButton";


type ItemType = {
    format: string,
    name: string,
    price: string,
    selected: boolean
    size: string,
    tabIndex: number,
    top: boolean,
}

type PropsType = {
    sizes: Array<ItemType>
    sizeSelectActionCreator: (index: number) => void
    children?:ReactNode
}

const SizeSelect:React.FC<PropsType> = ({sizes, sizeSelectActionCreator}: PropsType) => {

    return (
        <div className={styles.size_select}>
            <div className={styles.header}>
                <h2 id="size_select" className={styles.header__text}>Выберите размер</h2>
            </div>
            <div className={styles.buttons}>
                {
                    sizes.map((item: ItemType) => {
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