import React from "react";
import cartTotalSelector from "../store/cartTotalSelector";
import {useRecoilValue} from 'recoil'

const PurchaseSuccess=({close})=>{
    const cartTotal=useRecoilValue(cartTotalSelector)


    return (
        <>
            <div id="purchase-success-box">
                <h2>Purchase Successfull!</h2>
                <img src="/src/assets/checkmark-icon.png" alt="checkmark" />
                <p>Thank  you for your purchase. Your order has been successfully processed.</p>
                <div id="success-amount">
                    <h3>Total Amount:</h3>
                    <h3>{`₹${cartTotal}`}</h3>
                </div>
                <button onClick={close}>Close</button>
            </div>
        </>
    )
}

export default PurchaseSuccess