import React from "react";
import styles from "./playerCover.module.css";
import appleCover from "./../../../assets/images/order/apple_w_o_text.jpg";
import vkPlayerCover from "./../../../assets/images/order/vk_w_o_text.jpg";
import {IPlayerCoverProps} from "../../interfacesAndTypes/interfacesAndTypes";
import spotifyCover from "./../../../assets/images/order/spotify_w_o_text.jpg";


const PlayerCover: React.FC<IPlayerCoverProps> = ({
                                                      cover,
                                                      uploadedCover,
                                                      trackName,
                                                      performerName,
                                                      optionalText,
                                                      top,
                                                      left,
                                                      height,
                                                  }: IPlayerCoverProps) => {

    const get = (() => {
        switch (cover) {
            case "apple": {
                return ({cover: appleCover, className: styles.apple})
            }
            case "spotify": {
                return ({cover: spotifyCover, className: styles.spotify})
            }
            case "vk_music": {
                return ({cover: vkPlayerCover, className: styles.vk})
            }
            default: {
                return ({cover: appleCover, className: styles.apple})
            }
        }
    })()

    const topToString = `${top}px`
    const leftToString = `${left}px`
    const heightToString = `${height}px`

    return (
        <div className={styles.background_image}>
            <img className={styles.player_theme} src={get.cover} alt="Тема плейера"
                 width="280" height="379"/>
            <div className={styles.user_img_container}>
                <img style={{
                    cursor: "all-scroll",
                    position: "relative",
                    top: topToString,
                    left: leftToString,
                    height: heightToString,
                    width: "auto"
                }}
                     src={uploadedCover} alt=""/>
            </div>
            <div className={`${styles.user_text_container} ${get.className}`}>
                <span
                    className={`${styles.user_text} ${styles.user_text_track} ${get.className}`}>{trackName}</span>
                <span
                    className={`${styles.user_text} ${styles.user_text_performer} ${get.className}`}>{performerName}</span>
                <span
                    className={`${styles.user_text} ${styles.user_text_optional} ${get.className}`}>{optionalText}</span>
            </div>
        </div>
    );
};

export default PlayerCover;