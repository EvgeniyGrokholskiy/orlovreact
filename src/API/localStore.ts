import {IOrderState} from "../redux/orderReducer";
import {ISizeItem, ISizeSelectState } from "../redux/sizeSelectReducer";
import {ICoverItem, ICoverSelectState } from "../redux/coverSelectReducer";
import { iSizeAndCoversObj } from "../components/interfacesAndTypes/interfacesAndTypes";

export interface ILocalStoreAPI {
    selectedCoverAndSizeToLocalStorage: (sizes: ISizeSelectState, covers: ICoverSelectState) => void
    getOrderFromLocalStorage: () => IOrderState | undefined
    getSizeAndCoverFromLocalState: () => { cover: string, size: string } | undefined
    setOrderToLocalStorage: (order: IOrderState) => void
    removeItem: (item: string) => void
}


export const localStoreAPI: ILocalStoreAPI = {

    selectedCoverAndSizeToLocalStorage: (sizes: ISizeSelectState, covers: ICoverSelectState) => {
        const selectedSize = sizes.sizes.filter((item: ISizeItem) => item.selected)
        const selectedCover = covers.covers.filter((item: ICoverItem) => item.selected)
        let sizeAndCoversObj: iSizeAndCoversObj = {cover: selectedCover[0].className, size: selectedSize[0].price}
        localStorage.setItem("sizeAndCoverObj", JSON.stringify(sizeAndCoversObj))
    },

    getOrderFromLocalStorage: (): IOrderState | undefined => {
        const orderString: string | null = localStorage.getItem("order")
        if (orderString) {
            return JSON.parse(orderString)
        }
    },

    getSizeAndCoverFromLocalState: (): { cover: string, size: string } | undefined => {
        const selectedSizeAndCoverString: string | null = localStorage.getItem("sizeAndCoverObj")
        if (selectedSizeAndCoverString) {
            return JSON.parse(selectedSizeAndCoverString)
        }
    },

    setOrderToLocalStorage: (order: IOrderState) => {
        const orderToLocalstorageString = JSON.stringify(order)
        localStorage.setItem("order", orderToLocalstorageString)
    },
    removeItem: (item:string) => {
        localStorage.removeItem(item)
    }
}