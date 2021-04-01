import React, {useEffect, useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components

import Tooltip from "@material-ui/core/Tooltip";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import styles from "@FrontOfficeAssets/jss/material-kit-pro-react/views/ecommerceStyle.js";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@FrontOfficeComponents/ui/Card/Card.js";
import CardHeader from "@FrontOfficeComponents/ui/Card/CardHeader.js";
import CardBody from "@FrontOfficeComponents/ui/Card/CardBody.js";
import CardFooter from "@FrontOfficeComponents/ui/Card/CardFooter.js";
import Button from "@FrontOfficeComponents/ui/CustomButtons/Button.js";
import { Link } from 'react-router-dom';


import suit1 from "@FrontOfficeAssets/img/examples/suit-1.jpg";
import GridItem from "../../../components/frontoffice/ui/Grid/GridItem";
import GridContainer from "../../../components/frontoffice/ui/Grid/GridContainer";
const useStyles = makeStyles(styles);
import "../../../assets/css/style.css"
import {useCart} from "../../../../hook/useCartHook";
import {addToCart} from "../../../../actions/cartAction";
import {useDispatch} from "react-redux";

export default function ProductList(props) {
    const productsLst =props.productsLst;
    const classes = useStyles();
    const dispatch = useDispatch();

    const addToCartHandler = (id) => {
        dispatch(addToCart(id, 1));
    };
return (
    <GridContainer>
    {   productsLst.slice(0, 9).map((item,index) => {
            return (
                <GridItem md={4} sm={4} key={index}>
                    <Link to={`/product/${item.id}`}>
                    <Card plain product >
                        <CardHeader noShadow image>
                            <a href="#pablo">
                                <img src={item.productImage} style={{width :200,height : 300}} alt=".."/>
                            </a>
                        </CardHeader>
                        <CardBody plain>
                            <a href="#pablo">
                                <h4 className={classes.cardTitle}>{item.brand}</h4>
                            </a>
                            <p className={classes.description}>
                                {item.description.substring(0, 40)} ...
                            </p>
                        </CardBody>
                        <CardFooter plain
                                    className={classes.justifyContentBetween}>
                            <div className={classes.priceContainer}>
                                <span className={classes.price}> {item.price} TND</span>
                            </div>
                            <Tooltip
                                id="tooltip-top"
                                title="Saved to Wishlist"
                                placement="left"
                                classes={{tooltip: classes.tooltip}}
                            >
                                <Button
                                    justIcon
                                    simple
                                    color="rose"
                                    className={classes.pullRight}
                                >
                                    <Favorite/>
                                </Button>
                            </Tooltip>
                            <Link to="/shoppingCart">
                                <button className="btn btn-outline-dark btn-fitMe-cart" onClick={()=>{addToCartHandler(item.id)}}>Add To Cart</button>
                            </Link>
                        </CardFooter>
                    </Card>
                    </Link>

                </GridItem>

            )

        })}
        <GridItem
            md={3}
            sm={3}
            className={classNames(classes.mlAuto, classes.mrAuto)}
        >
            <Button round style={{color: "rose"}}>
                Load more...
            </Button>

        </GridItem>
    </GridContainer>
        )

}
