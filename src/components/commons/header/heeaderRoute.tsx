import React from "react";
import Header from "./header";
import Back from "./back/back";
import {Route, Routes} from "react-router-dom";


const HeaderRoute: React.FC = () => {

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