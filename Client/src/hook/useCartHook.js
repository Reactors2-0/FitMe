import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as cartAction from "../actions/cartAction";
import {useProduct} from "./useProductHook";

export const useCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const {products} = useProduct("","","","","","")
    console.log(products)
    const [productFind,setProductFind] = useState(products)
    const {cartItems} = cart;

    let totCartItems =0;
    const TAX_RATE = 0.19;
        useEffect(()=>{
            setProductFind(products)
        },[products])
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
    const addToCartHandler = (id,qty,colorSelect,sizeSelect) => {
        dispatch(cartAction.addToCart(id,qty,colorSelect,sizeSelect));
    };

    const ColorFormProductId=(id)=>{
           let productSend = productFind.find((val)=>  val._id === id)
        console.log("sned",productSend)
        return id;
    }

    const invoiceSubtotal = subtotal(cartItems);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;
        return {cartItems,addToCartHandler,removeFromCartHandler,totCartItems,priceRow,invoiceSubtotal,invoiceTaxes,invoiceTotal,TAX_RATE,ColorFormProductId};
}
