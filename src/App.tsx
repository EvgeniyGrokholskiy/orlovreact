import './App.css';
import React from 'react';
import Order from "./components/order/order";
import Policy from "./components/policy/policy";
import Reviews from './components/reviews/reviews';
import Page404 from './components/page404/page404';
import {Link, Route, Routes} from "react-router-dom";
import Delivery from "./components/delivery/delivery";
import Footer from "./components/commons/footer/footer";
import Promotions from "./components/promotions/promotions";
import ConnectedHomePage from './components/homepage/homepage';
import HeaderRoute from "./components/commons/header/heeaderRoute";

function App() {
    return (
        <div className={"wrapper"}>
            <HeaderRoute/>
            <Routes>
                <Route path="/" element={<ConnectedHomePage/>}/>
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
