import React, {useState} from "react";
import styles from "./sizeSelect.module.css"
import SizeSelectButton from "./syzeSelectButton/sizeSelectButton";

const SizeSelect = () => {

    const [state, setState] = useState([
        {
            name: "small",
            tabIndex: 5,
            format: "A5",
            size: "148.0×210.0 мм, толщина 3 мм",
            price: "990",
            top: false
        },
        {
            name: "medium",
            tabIndex: 6,
            format: "A4",
            size: "210.0×297.0 мм, толщина 3 мм",
            price: "1490",
            top: false
        },
        {
            name: "large",
            tabIndex: 7,
            format: "A3",
            size: "300.0×400.0 мм, толщина 3 мм",
            price: "3990",
            top: false
        },
        {
            name: "trinket",
            tabIndex: 8,
            format: "Брелок с колечком",
            size: "50,0×65,0 мм, толщина 3 мм",
            price: "490",
            top: true
        }
    ])

    return (
        <div className={styles.size_select}>
            <div className={styles.header}>
                <h2 id="size_select" className={styles.header__text}>Выберите размер</h2>
            </div>
            <div className={styles.buttons}>
                {
                    state.map((item: { name: string, tabIndex: number, format: string, size: string, price: string, top: boolean }) => {
                        return <SizeSelectButton key={item.tabIndex} name={item.name} tabIndex={item.tabIndex} format={item.format} size={item.size}
                                                 price={item.price} top={item.top}/>
                    })
                }
            </div>
        </div>
    );
};

export default SizeSelect;