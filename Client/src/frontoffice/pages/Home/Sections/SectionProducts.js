import React, { useEffect, useState } from "react";

import GridContainer from "@FrontOfficeComponents/ui/Grid/GridContainer";
import GridItem from "@FrontOfficeComponents/ui/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import classNames from "classnames";

import styles from "@FrontOfficeAssets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import {useDispatch, useSelector} from "react-redux";
import * as productAction from "../../../../actions/productAction";
import ErrorMessage from "../../../components/Message/errorMessage";
import HomeLoader from "../../../components/Loader/HomeLoader";
import Link from "@material-ui/core/Link";

import Filter from "../Components/Filter";
import ProductList from "../Components/ProductList";
import {useProduct} from "../../../../hook/useProductHook";

const useStyles = makeStyles(styles);

export default function SectionProducts(props) {
    const classes = useStyles();


   const {products,loading,count,error,searchProductKey} = useProduct("","","","","");





    return (
        <>
        {loading ? (<>
                <HomeLoader/>
                </>
            ) : error ? (
                <>
                <ErrorMessage header="Something went wrong" message={error}/>
            </>
                ) : (
                <>
                {searchProductKey ? (
                            <>
                                <Link to="/" className="btn btn-light">
                                    Go Back{" "}
                                </Link>{" "}
                                <h1>
                                    Search Products for {searchProductKey}({count}){" "}
                                </h1>{" "}
                            </>
                                ) : (
                    <div>
                        <div className={classes.section}>
                            <div className={classes.container}>
                                <h2>Find what you need</h2>
                                <GridContainer>
                                    <GridItem md={3} sm={3}>
                                        <Filter/>
                                    </GridItem>

                                    <GridItem md={9} sm={9}>
                                        <ProductList productsLst={products}/>
                                    </GridItem>

                            </GridContainer>
                            </div>
                        </div>
                    </div>
                                )
                }
                                </>)
        }
        </>


    )
}
