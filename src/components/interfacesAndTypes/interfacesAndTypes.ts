import {ReactNode} from "react";

export interface ICoversItem {
    tabIndex: number,
    name: string,
    className: string,
    selected: boolean,
    cover: string
}

export interface ICovers {
    error: boolean,
    covers: Array<ICoversItem>
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

export interface ISizes {
    error: boolean,
    sizes: Array<ISizesItem>
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

export type TermsType = () => {
    sizeAndCoverNotSelected: boolean
    sizeSelectedCoversNot: boolean
    coverSelectedSizeNot: boolean
    allSelected: boolean
}

export type isCoverSelectedType = (covers: ICovers) => boolean
export type isSizesSelectedType = (sizes: ISizes) => boolean