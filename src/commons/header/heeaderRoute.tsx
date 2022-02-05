import React from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./header";
import Back from "./back/back";

const HeaderRoute = () => {

    return (
        <header>
            <Routes>
                <Route path={"/"} element={<Header/>}/>
                <Route path={"*"} element={<Back/>}/>
            </Routes>
        </header>
    );
};

export default HeaderRoute;