import React from "react";
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Wishlist from "./components/Wishlist";
import AmazonCart from "./components/AmazonCart";

export default function App(){

    return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="wishlist" element={<Wishlist/>}/>
                <Route path="cart" element={<AmazonCart/>}/>
            </Routes>
        </BrowserRouter>

    </>
    )
}