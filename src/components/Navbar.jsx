import React from "react";
import { Link } from "react-router-dom";
import cartItemsAtom from "../store/cartItemsState";
import { useRecoilValue } from 'recoil'

const Navbar=()=>{
    const cartItems=useRecoilValue(cartItemsAtom)

    return (
        <>
            <header>
                <div id="name">
                    <h1>amazon</h1>
                    <h2>.in</h2>
                </div>
                <div id="cart-wrapper">
                    <p>Hello, User</p >
                    <div id="cart-icon-box">
                        {cartItems.length>0?<p id="cart-count">{cartItems.reduce((accum, q)=>accum+q.quantity,0)}</p>: ""}
                        <Link to='/cart'><img src="/src/assets/cart-icon.png" alt="cart"/></Link>
                    </div>
                </div>
            </header>
            <div id="wishlist-btn-box">
                <Link to='/wishlist'>
                    <button>
                        Your Wish List <br />
                        <p>Default List</p>
                    </button>
                </Link>
            </div>
        </>
    )
}   

export default Navbar;