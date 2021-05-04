import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import * as brandAction from "@Actions/brandAction";
import "../../assets/css/style.css"



const BrandPage = ({ match }) => {
    const brandId = match.params.brandId;
    const brandData = useSelector((state) => state.Brand);
    const { loading, brand, error, success } = brandData;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(brandAction.brand(brandId));
        console.log(brand);
    }, [dispatch, brandId]);

    return (
        <>
            { loading && (<>Loading...</>)}
            { error && (<>Error whilst fetching brand!</>)}
            { success && (
                <> BRAND HERE </>
            )}
        </>
    );
};


export default BrandPage;
