import React from "react";
import styles from "./sizeSelect.module.css"
import SizeSelectButton from "./syzeSelectButton/sizeSelectButton";
import {IItem, ISizeSelectProps} from "../../interfacesAndTypes/interfacesAndTypes";


const SizeSelect: React.FC<ISizeSelectProps> = ({error, sizes, sizeSelectActionCreator}: ISizeSelectProps) => {

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