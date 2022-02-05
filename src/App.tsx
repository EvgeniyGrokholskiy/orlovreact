import React from 'react';
import './App.css';
import Order from "./order/order";
import Policy from "./policy/policy";
import Reviews from './reviews/reviews';
import Page404 from './page404/page404';
import Delivery from "./delivery/delivery";
import Homepage from "./homepage/homepage";
import Promotions from "./promotions/promotions";
import {Link, Route, Routes} from "react-router-dom";
import HeaderRoute from "./commons/header/heeaderRoute";
import Footer from "./commons/footer/footer";

function App() {
    return (
        <div className={"wrapper"}>
            <HeaderRoute/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/delivery" element={<Delivery/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/policy" element={<Policy/>}/>
                <Route path="/promotions" element={<Promotions/>}/>
                <Route path="/reviews" element={<Reviews/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
