import {IRootState} from "../components/interfacesAndTypes/interfacesAndTypes";
import {IOrderOptionItem} from "./orderReducer";

export const getPrice = (state:IRootState, startOfCount: string | undefined): number => {
    const initialValue = Number.parseFloat(startOfCount ? startOfCount : "0")
    let totalPrice: number = initialValue
    state.order.orderOption?.forEach((item: IOrderOptionItem) => {
        item.isSelected ? totalPrice += item.price : totalPrice += 0
    })
    return totalPrice
}