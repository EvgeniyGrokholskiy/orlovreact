import React from 'react';
import styles from "./tuningButton.module.css";
import MyButton from "../../commons/myButton/myButton";

interface ITuningButtonsProps {
    changeTop: (payload:string) => void
    changeLeft: (payload:string) => void
    changeHeight: (payload:string) => void
}

const TuningButtons: React.FC<ITuningButtonsProps> = ({changeTop, changeLeft, changeHeight}: ITuningButtonsProps) => {

    const imageTuning = (action: string): void => {
        switch (action) {
            case "+": {
                changeHeight(action)
                break
            }
            case "-": {
                changeHeight(action)
                break
            }
            case "left": {
                changeLeft(action)
                break
            }
            case "right": {
                changeLeft(action)
                break
            }
            case "up": {
                changeTop(action)
                break
            }
            case "down": {
                changeTop(action)
                break
            }
        }
    }

    return (
        <>
            <div className={styles.container}>
                <MyButton className={`${styles.increase} ${styles.item} shadow`} callback={imageTuning} id={"+"}>
                    <svg className={styles.sign} xmlns="http://www.w3.org/2000/svg" width="15"
                         height="15" viewBox="0 0 1267.000000 1280.000000"
                         preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                           stroke="none">
                            <path
                                d="M6150 12794 c-195 -19 -398 -76 -550 -155 -338 -176 -592 -520 -691 -938 -54 -226 -52 -157 -56 -2058 l-4 -1763 -1712 0 c-1854 0 -1839 0 -2071 -54 -403 -96 -739 -346 -906 -676 -114 -227 -170 -514 -157 -817 17 -398 156 -724 421 -989 200 -199 415 -319 695 -385 204 -49 183 -49 2013 -49 l1717 0 4 -1762 c4 -1902 2 -1833 56 -2059 100 -421 345 -751 688 -927 124 -64 249 -105 402 -134 168 -32 494 -32 663 0 300 56 514 167 713 366 234 236 365 511 421 886 16 105 18 270 21 1873 l4 1757 1717 0 c1888 0 1849 -1 2091 61 400 103 715 350 886 698 151 305 196 741 115 1126 -83 402 -328 720 -697 907 -120 62 -190 87 -332 123 -218 55 -211 55 -2068 55 l-1712 0 -4 1763 c-3 1564 -5 1774 -20 1869 -59 391 -203 678 -463 928 -184 177 -393 280 -669 331 -108 20 -406 33 -515 23z"/>
                        </g>
                    </svg>
                </MyButton>
                <MyButton className={`${styles.reduction} ${styles.item} shadow`} callback={imageTuning}
                          id={"-"}>
                    <svg className={styles.sign} xmlns="http://www.w3.org/2000/svg"
                         height="15px" viewBox="0 0 24 24"
                         width="15px">
                        <path d="M18,11H6c-1.104,0-2,0.896-2,2s0.896,2,2,2h12c1.104,0,2-0.896,2-2S19.104,11,18,11z"/>
                    </svg>
                </MyButton>
                <MyButton className={`${styles.move_button} shadow`} callback={imageTuning} id={"left"}>влево</MyButton>
                <MyButton className={`${styles.move_button} shadow`} callback={imageTuning}
                          id={"right"}>вправо</MyButton>
                <MyButton className={`${styles.move_button} shadow`} callback={imageTuning} id={"up"}>вверх</MyButton>
                <MyButton className={`${styles.move_button} shadow`} callback={imageTuning} id={"down"}>вниз</MyButton>
            </div>
        </>
    );
};

export default TuningButtons;