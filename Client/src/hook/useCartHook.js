import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as cartAction from "../actions/cartAction";

export const useCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    let totCartItems =0;
    const TAX_RATE = 0.19;

    cartItems.map((item)=>{
        totCartItems+=item.qty;
    })


    function priceRow(qty, unit) {
        return qty * unit;
    }



    function subtotal(items) {
        return items.map(({ price,qty }) => priceRow(qty , price)).reduce((sum, i) => sum + i, 0);
    }

    const removeFromCartHandler = (id,qty) => {
        dispatch(cartAction.removeItemFromCart(id,qty));
    };
    const addToCartHandler = (id,qty) => {
        dispatch(cartAction.addToCart(id,qty));
    };

    const invoiceSubtotal = subtotal(cartItems);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;
    return {cartItems,addToCartHandler,removeFromCartHandler,totCartItems,priceRow,invoiceSubtotal,invoiceTaxes,invoiceTotal,TAX_RATE};
}
