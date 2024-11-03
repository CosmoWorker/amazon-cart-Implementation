import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import itemsAtom from "../store/wishItemsState";
import cartItemsAtom from "../store/cartItemsState";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Wishlist=()=>{
    const items=useRecoilValue(itemsAtom);
    const navigate=useNavigate()
    const [cartItems,setCartItems]=useRecoilState(cartItemsAtom)
    const [addedToCart, setAddedToCart]=useState([])
    
    const itemToCart=(item)=>{
        if (addedToCart.includes(item.id)){
            navigate('/cart')
            return;
        }
        setAddedToCart((prev)=>[...prev, item.id])
        const currentItem=items.find((i)=>item.id===i.id)
        if(currentItem){
            setCartItems((prevCartItems)=>[...prevCartItems, {...item}])
        }

    }

    return (
        <>
            <div id="wishlist-page">
                <h2>Your Wish List</h2>
                <p>Public</p>
                <div id="search-inp-grid">
                    <img src="/src/assets/table-grid.png" alt="table-grid" />
                    <img src="/src/assets/search.png" alt="search" id="search"/><input type="text" placeholder="  Search in Future" readOnly/>
                </div>
            </div>
            <div id="wishlist-items">
                {
                    items.map((item)=>
                        <div id="wishlist-item" key={item.id}>
                            <img src={item.img} alt={item.name} />
                            <h3>{item.title}</h3>
                            <h3 id="wishlist-price">{`₹${item.price}`}</h3>
                            <button onClick={()=>itemToCart(item)}>
                                {addedToCart.includes(item.id)?"Proceed to Checkout":"Add to Cart"}
                            </button>
                        </div>
                    )
                }
            </div>
        </>
    )
}




export default Wishlist;