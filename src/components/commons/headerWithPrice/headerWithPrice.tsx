import {useDispatch} from "react-redux";
import styles from "./headerWithPrice.module.css";
import React, {Dispatch, ReducerAction} from "react";
import {IHeaderWithPriceProps} from "../../interfacesAndTypes/interfacesAndTypes";
import {setOptionalTextActionCreator, setOptionalTextActionCreatorType} from "../../../redux/orderReducer";


const HeaderWithPrice: React.FC<IHeaderWithPriceProps> = ({
                                                              id,
                                                              price,
                                                              error,
                                                              anchor,
                                                              header,
                                                              callback,
                                                              isListItem,
                                                              isSelected
                                                          }: IHeaderWithPriceProps) => {

    const priceToString = `+${price} р.`
    const dispatch: Dispatch<ReducerAction<setOptionalTextActionCreatorType>> = useDispatch()

    return (
        <div id={anchor} className={isListItem ? `${styles.container} ${styles.listItem}` : styles.container}>
            <div className={styles.text_and_price}>
                <p className={error ? `${styles.text} ${styles.error}` : styles.text}>{header}</p>
                <p className={styles.price}>{price ? priceToString : undefined}</p>
            </div>
            {
                !!price && !!callback ?
                    <span className={`${styles.checkbox} ${isSelected ? styles.check : ""}`} onClick={() => {
                        if (id === "1" && isSelected) {
                            localStorage.setItem("optionalText", "")
                            dispatch(setOptionalTextActionCreator(""))
                            callback(id ? id : "")
                        } else callback(id ? id : "")
                    }}/>
                    :
                    undefined
            }
        </div>
    );
};

export default HeaderWithPrice;