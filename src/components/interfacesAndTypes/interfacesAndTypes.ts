import React, {ChangeEvent, ReactNode} from "react";
import {
    IOrderState,
    selectOptionActionCreatorType,
    setTrackNameActionCreatorType,
    uploadImageFileActionCreatorType,
    setOptionalTextActionCreatorType,
    setPerformerNameActionCreatorType,
    setTrackNameErrorActionCreatorType,
    updateSelectedOptionActionCreatorType,
    setOptionalTextErrorActionCreatorType,
    setModalWindowIsOpenActionCreatorType,
    setPerformerNameErrorActionCreatorType,
    setSelectedSizeOfProductActionCreatorType,
    setSelectedCoverOfProductActionCreatorType,
    changeImagePositionAndMagnificationActionCreatorType,
} from "../../redux/orderReducer";
import {
    ICoverSelectState,
    ICoverItem,
    setCoverActionCreatorType,
    setCoverErrorActionCreatorType
} from "../../redux/coverSelectReducer";
import {
    ISizeItem,
    ISizeSelectState,
    setSizeErrorActionCreatorType,
    sizeSelectActionCreatorType
} from "../../redux/sizeSelectReducer";

/************************ROOTStateInterface************************************************/

export interface IRootState {
    order: IOrderState
    covers: ICoverSelectState
    sizes: ISizeSelectState
}

/*****************************************************************************************/

/*******************componentPropsInterfaces**********************************************/

export interface IInputProps {
    placeholder: string
    isDisabled?: boolean
    value: string | undefined
    callback: (payload: string) => void
}

export interface IOrderProps {
    order: IOrderState
    selectOptionActionCreator: selectOptionActionCreatorType
    setTrackNameActionCreator: setTrackNameActionCreatorType
    setOptionalTextActionCreator: setOptionalTextActionCreatorType
    uploadImageFileActionCreator: uploadImageFileActionCreatorType
    setPerformerNameActionCreator: setPerformerNameActionCreatorType
    setTrackNameErrorActionCreator: setTrackNameErrorActionCreatorType
    setPerformerErrorActionCreator: setPerformerNameErrorActionCreatorType
    updateSelectedOptionActionCreator: updateSelectedOptionActionCreatorType
    setModalWindowIsOpenActionCreator: setModalWindowIsOpenActionCreatorType
    setOptionalTextErrorActionCreator: setOptionalTextErrorActionCreatorType
    setSelectedSizeOfProductActionCreator: setSelectedSizeOfProductActionCreatorType
    setSelectedCoverOfProductActionCreator: setSelectedCoverOfProductActionCreatorType
    changeImagePositionAndMagnificationActionCreator: changeImagePositionAndMagnificationActionCreatorType
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
    children?: ReactNode;
    sizes: ISizeSelectState
    covers: ICoverSelectState
    setCoverActionCreator: setCoverActionCreatorType
    sizeSelectActionCreator: sizeSelectActionCreatorType
    setSizeErrorActionCreator: setSizeErrorActionCreatorType
    setCoverErrorActionCreator: setCoverErrorActionCreatorType
}

export interface IMyButtonProps {
    id?: string
    className: string
    children: ReactNode
    callback?: null | (() => void) | ((action: string) => void)
}

export interface ISizeSelectProps {
    error: boolean
    children?: ReactNode
    sizes: Array<ISizeItem>
    sizeSelectActionCreator: (index: number) => void
}

export interface ICoverSelectProps {
    error: boolean
    children?: ReactNode
    covers: Array<ICoverItem>
    setCoverActionCreator: (index: number) => void
}

export interface IPlayerCoverProps {
    top: number
    left: number
    height: number
    trackName: string
    optionalText: string
    performerName: string
    cover: string | undefined
    uploadedCover: string | undefined
}

export interface iSizeAndCoversObj {
    size: string
    cover: string
}

export interface ITuningButtonsProps {
    callback: (payload: string) => void
}

export interface IContinueButtonProps {
    href: string
    children?: ReactNode
    className: string
    callback: ((event:React.MouseEvent<HTMLAnchorElement>) => void) | null
}

export interface IHeaderWithPriceProps {
    id?: string
    header: string
    price?: number
    error?: boolean
    anchor?: string
    isListItem?: boolean
    isSelected?: boolean
    callback?: (id: string) => void
}

export interface ICoverSelectButtonProps {
    item: ICoverItem
    children?: ReactNode
    callback: (index: number) => void
}

export type HomePageToOrderPageTermsType = () => {
    allSelected: boolean
    coverSelectedSizeNot: boolean
    sizeSelectedCoversNot: boolean
    sizeAndCoverNotSelected: boolean
}


export type isSizesSelectedType = (sizes: ISizeSelectState) => boolean
export type isCoverSelectedType = (covers: ICoverSelectState) => boolean
export type onChangeType = (event: ChangeEvent<HTMLInputElement>) => void
export type getPriceType = (order: IOrderState, startOfCount?: string | undefined) => number
