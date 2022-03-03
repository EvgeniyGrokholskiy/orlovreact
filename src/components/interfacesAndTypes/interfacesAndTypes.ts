import {ChangeEvent, ReactNode} from "react";
import {changeImagePositionAndMagnificationActionCreator, IOrderState} from "../../redux/orderReducer";
import {IInitialState} from "../../redux/coverSelectReducer";
import {ISizeSelectState} from "../../redux/sizeSelectReducer";

export interface IItem {
    top: boolean,
    name: string,
    size: string,
    price: string,
    format: string,
    selected: boolean
    tabIndex: number,
}

export interface ISizes {
    error: boolean,
    sizes: Array<ISizesItem>
}

export interface IProps {
    error: boolean
    children?: ReactNode
    covers: Array<ICover>
    setCoverActionCreator: (index: number) => void
}

export interface ICover {
    name: string,
    cover: string
    selected: boolean,
    tabIndex: number,
    className: string,
}

export interface ICovers {
    error: boolean,
    covers: Array<ICoversItem>
}

export interface IRootState {
    order: IOrderState
    covers: IInitialState
    sizes: ISizeSelectState
}

export interface IStateItem {
    name: string,
    cover: string
    tabIndex: number,
    selected: boolean,
    className: string,
}

export interface ISizesItem {
    format: string,
    name: string,
    price: string,
    selected: boolean,
    size: string,
    tabIndex: number,
    top: boolean
}

export interface ICoversItem {
    tabIndex: number,
    name: string,
    className: string,
    selected: boolean,
    cover: string
}

export interface IInputProps {
    placeholder: string
    isDisabled?: boolean
    value: string | undefined
    callback: (payload: string) => void
}

export interface IOrderProps {
    order: IOrderState
    selectOptionActionCreator: (id: string) => void
    setTrackNameActionCreator: (name: string) => void
    setOptionalTextActionCreator: (name: string) => void
    uploadImageFileActionCreator: (payload: any) => void
    setPerformerNameActionCreator: (name: string) => void
    setSelectedSizeOfProductActionCreator: (payload: ISizesItem) => void
    setSelectedCoverOfProductActionCreator: (payload: ICoversItem) => void
    changeImagePositionAndMagnificationActionCreator: (payload: string) => void
}

export type TermsType = () => {
    sizeAndCoverNotSelected: boolean
    sizeSelectedCoversNot: boolean
    coverSelectedSizeNot: boolean
    allSelected: boolean
}

export interface IMyLinkProps {
    rel?: string
    href: string
    target?: string
    ariaLabel: string
    className: string
    children?: ReactNode
    referrerPolicy?: string
}

export interface IHomePageProps {
    covers: ICovers
    sizes: ISizes
    setCoverActionCreator: (index: number) => void
    setCoverErrorActionCreator: () => void
    removeCoverErrorActionCreator: () => void
    sizeSelectActionCreator: (index: number) => void
    setSizeErrorActionCreator: () => void
    removeSizeErrorActionCreator: () => void
    children?: ReactNode;
}

export interface IMyButtonProps {
    id?: string
    className: string
    children: ReactNode
    callback?: null | (() => void) | ((action: string) => void)
}

export interface ISizeSelectProps {
    error: boolean
    sizes: Array<IItem>
    children?: ReactNode
    sizeSelectActionCreator: (index: number) => void
}

export interface IPlayerCoverProps {
    cover: string | undefined
    uploadedCover: string | undefined
    trackName: string
    performerName: string
    optionalText: string
    top: number
    left: number
    height: number
}

export interface IContinueButtonProps {
    href: string
    children?: ReactNode
    className: string
    callback: (() => void) | null
}

export interface IHeaderWithPriceProps {
    id?: string
    header: string
    price?: number
    isListItem?: boolean
    isSelected?: boolean
    callback?: (id: string) => void
}

export interface ICoverSelectButtonProps {
    item: IStateItem
    callback: (index: number) => void
    children?: ReactNode
}

export interface ITuningButtonsProps {
    callback: (payload: string) => void
}

export interface iSizeAndCoversObj {
    cover: ICoversItem
    size: ISizesItem
}


export type isSizesSelectedType = (sizes: ISizes) => boolean
export type isCoverSelectedType = (covers: ICovers) => boolean
export type onChangeType = (event: ChangeEvent<HTMLInputElement>) => void
export type getPriceType = (order: IOrderState, startOfCount?: string | undefined) => number
