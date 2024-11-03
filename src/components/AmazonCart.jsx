import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from 'recoil'
import cartItemsAtom from "../store/cartItemsState";
import cartTotalSelector from "../store/cartTotalSelector";
import PurchaseSuccess from "./PurchaseSuccess";

const AmazonCart=()=>{
    const [cartItems, setCartItems]=useRecoilState(cartItemsAtom)
    const cartTotal=useRecoilValue(cartTotalSelector)
    const [isPurchased, setIsPurchased]=useState(false)

    const plus=(id)=>{
        setCartItems((prevCartItems)=>{
            return prevCartItems.map((i)=>i.id===id?{...i, quantity: i.quantity + 1}: i)
        })
    }
    
    const subtract=(id)=>{
        setCartItems((prevCartItems)=>{
            const item=prevCartItems.find((d)=>d.id===id)
            if (item.quantity===1){
                return prevCartItems.filter((i)=>i.id!==id)
            }
            else{
                return prevCartItems.map((i)=>i.id===id?{...i, quantity : i.quantity-1}:i)
            }

        })
    }
    
    const remove=(id)=>{
        return setCartItems((prevCartItems)=>prevCartItems.filter((item)=>item.id!=id))
    }

    const proceed=()=>{
        setIsPurchased(true)
    }

    const handleClose=()=>{
        setCartItems([])
        setIsPurchased(false)
    }
    
    return (
        <div id="cart-sum-box">
            {isPurchased && (
                <div id="overlay">
                    <PurchaseSuccess close={handleClose}/>
                </div>
            )}
            <div id="shopping-cart" >
                <h2>Shopping Cart</h2>
                {
                    cartItems.length===0?
                    <div id="cart-empty">Your Cart is Empty :(</div>
                    :
                    cartItems.map((cartItem)=>
                        <div id="added-item" key={cartItem.id}>
                            <img src={cartItem.img} alt={cartItem.name} />
                            <div id="added-item-info">
                                <h3>{cartItem.title} </h3>
                                <p id="stock">In stock</p>
                                <div id="add-delete-box">
                                    <button id="minus" onClick={()=>subtract(cartItem.id)}>_</button>
                                    <p>{cartItem.quantity}</p>
                                    <button id="add" onClick={()=>plus(cartItem.id)}>+</button>
                                    <button id="delete" onClick={()=>remove(cartItem.id)}>Delete</button>
                                </div>
                            </div>
                            <div id="cart-price">
                                {`₹${cartItem.price}`}
                            </div>
                        </div>
                    )
                }
            </div>
            {
                cartTotal>0?
                    <div id="order-summary">
                        <h3 id="summary-head">Order Summary</h3>
                        <div id="items">
                            <p>{`Items(${cartItems.length}):`}</p>
                            <p>{`₹${cartTotal}`}</p>
                        </div>
                        <div id="order-total">
                            <h3>Order Total: </h3>
                            <h3>{`₹${cartTotal}`}</h3>
                        </div>
                        <button onClick={proceed}>Proceed to Buy</button>
                    </div>
                :""
            }
        </div>
    )
}

export default AmazonCart;
