import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as cartAction from "../actions/cartAction";

export const useCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    let totCartItems =0;
    cartItems.map((item)=>{
        totCartItems+=item.qty;
    })



    const removeFromCartHandler = (id,qty) => {
        dispatch(cartAction.removeItemFromCart(id,qty));
    };
    const addToCartHandler = (id,qty) => {
        dispatch(cartAction.addToCart(id,qty));
    };
    return {cartItems,addToCartHandler,removeFromCartHandler,totCartItems};
}
