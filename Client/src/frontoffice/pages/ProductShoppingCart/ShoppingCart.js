/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
// core components

import Parallax from "../../components/ui/Parallax/Parallax.js";
import GridContainer from "../../components/ui/Grid/GridContainer.js";
import GridItem from "../../components/ui/Grid/GridItem.js";
import Button from "../../components/ui/CustomButtons/Button.js";
import Card from "../../components/ui/Card/Card.js";
import CardBody from "../../components/ui/Card/CardBody.js";

import shoppingCartStyle from "../../assets/jss/material-kit-pro-react/views/shoppingCartStyle.js";

import {useDispatch} from "react-redux";
import {useCart} from "../../../hook/useCartHook";
import  { Link, Redirect,useHistory } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as cartConstants from "../../../constants/cartConstants";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
const useStyles = makeStyles(shoppingCartStyle);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});


export default function ShoppingCartPage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 1;
    },[onclick]);
    const classes = useStyles();
    const dispatch = useDispatch();
    let history = useHistory();

    const {cartItems,addToCartHandler,removeFromCartHandler,totCartItems,priceRow,invoiceSubtotal,invoiceTaxes,invoiceTotal,TAX_RATE} = useCart();


    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
    }

    function resetCart(){
        dispatch({
            type: cartConstants.CART_RESET
        })

    }

 const passToOrder = ()=>{
            const user =localStorage.getItem('authUser');
     console.log(user)
     if(!user){
         history.push("/login")
     }else{
         history.push("/ecommerce-checkout")
     }

 }

    return (
        <div className="d-flex flex-column justify-content-between justify-items-center">
            <Parallax
                image={require("../../assets/img/examples/bg2.jpg")}
                filter="dark"
                small
            >

                <div className={classes.container} >
                    <GridContainer>
                        <GridItem
                            md={10}
                            sm={10}
                            className={classNames(
                                classes.mlAuto,
                                classes.mrAuto,
                                classes.textCenter
                            )}
                        >
                            <h2 className={classes.title}>Shopping Page</h2>
                        </GridItem>



                    </GridContainer>


                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}  style={{width : "70%",marginLeft : "15%"}}>
                <div className={classes.container}>
                    <Card plain >
                        <CardBody plain >
                            <h3 className={classes.cardTitle}>Shopping Cart</h3>

                            <Paper className={classes.root}>
                                {cartItems.length === 0 ? (
                                    <>
                                        Your cart is empty <Link to="/">Go Back</Link>
                                    </>
                                ) : (
                                    <>
                                <Table className={classes.table} >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>&nbsp;</TableCell>
                                            <TableCell>Product</TableCell>
                                            <TableCell align="right">Color</TableCell>
                                            <TableCell align="right">Size</TableCell>
                                            <TableCell align="right">QTY.</TableCell>
                                            <TableCell align="right">Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {cartItems.map(row => (

                                            <TableRow >
                                                <TableCell className={classes.imgContainer} >
                                                    <img src={row.productImage} alt="..." className={classes.img}/>
                                                </TableCell>

                                                <TableCell>  <Link to={`/product/${row.productId}`} style={{color : "black"}}>  {row.productName}</Link>
                                                   </TableCell>

                                                <TableCell align="right">red</TableCell>
                                                <TableCell align="right">M</TableCell>
                                                <TableCell align="right">
                                        <span key={row.id}  className="d-flex justify-content-center">
                                            {` `}
                                          <div className={classes.buttonGroup} >
                                            <Button
                                                size="sm"
                                                round
                                                className={classes.firstButton}
                                                onClick={()=> {
                                                        removeFromCartHandler(row.productId, 1)
                                                }}

                                            >
                                              <Remove />
                                            </Button>
                                            <Button
                                                color="tumblr"
                                                size="sm"
                                                round
                                                className={classes.lastButton}
                                                onClick={()=> {
                                                    addToCartHandler(row.productId, 1)
                                                }}
                                            >

                                                <div style={{position : "absolute",marginRight : 60,fontSize : 20}}>{row.qty}</div>
                                              <Add/>

                                            </Button>
                                          </div>

                                        </span>
                                                </TableCell>
                                                <TableCell align="right">{ccyFormat(priceRow(row.price,row.qty))}</TableCell>
                                            </TableRow>
                                        ))}



                                    </TableBody>


                                </Table>

                                    <Table style={{marginLeft : "20%"}}>
                                        <TableBody >
                                            <TableRow >

                                                <TableCell rowSpan={3} />
                                                <TableCell colSpan={2}>Subtotal</TableCell>
                                                <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Tax</TableCell>
                                                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell colSpan={2}>Total</TableCell>
                                                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>

                                                <TableCell className="d-flex flex-column">
                                                    <button className="btn btn-outline-danger  w-50" onClick={()=>resetCart()}>Reset shopping cart !</button>
                                                    <button className="btn btn-outline-dark btn-fitMe  w-50 mt-1" onClick={passToOrder}>Pass to order !</button>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </>
                                    )}
                            </Paper>


                        </CardBody>
                    </Card>
                </div>
            </div>

        </div>
    );
}

