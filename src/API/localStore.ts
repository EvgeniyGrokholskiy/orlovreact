import {IOrderState} from "../redux/orderReducer";

export interface ILocalStoreAPI {
    getOrderFromLocalStorage: () => IOrderState | undefined
    getSizeAndCoverFromLocalState: () => { cover: string, size: string } | undefined
    setOrderToLocalStorage: (order: IOrderState) => void
    removeItem: (item: string) => void
}


export const localStoreAPI: ILocalStoreAPI = {

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