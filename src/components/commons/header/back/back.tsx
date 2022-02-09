import React from 'react';
import {Link} from "react-router-dom";
import style from "./back.module.css"

const Back = () => {
    return (
        <Link to={"/"} className={style.link}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20"
                 height="14" fill="none">
                <g clipPath="url(#clip0)">
                    <path
                        fill="#000"
                        d="M19 6H3.41l4.3-4.29A1 1 0 106.29.3l-6 6a1 1 0 000 1.41l6 6a1 1 0 001.41-1.4L3.41 8H19a1 1 0 000-2z"/>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <path fill="#fff" d="M0 0h20v14H0z"/>
                    </clipPath>
                </defs>
            </svg>
            Назад
          </span>
        </Link>
    );
};

export default Back;