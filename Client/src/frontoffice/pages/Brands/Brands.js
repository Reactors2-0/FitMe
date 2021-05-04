import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { TextField} from "@material-ui/core/";


import GridItem from "@FrontOfficeComponents/ui/Grid/GridItem";
import GridContainer from "@FrontOfficeComponents/ui/Grid/GridContainer";
import "../../assets/css/style.css"
import * as brandAction from "@Actions/brandAction";
import Brand from '@FrontOfficeComponents/Brand/Brand';

export default function Brands() {
    const dispatch = useDispatch();
    const fetchBrands = useSelector((state) => state.listBrands);
    const { brands , count , loading, error} = fetchBrands;
    const [brandsList, setBrandsList] = useState(brands);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        const brandInfo = {
            searchBrandKey: "",
            sort : "",
            initialLoading:true,
        };
        dispatch(brandAction.listBrandsForAdmin(brandInfo.initialLoading));
    }, [dispatch]);
    useEffect(()=>{
        setBrandsList(brands);
    }, [brands])

    return (
        <GridContainer style={{height:"100vh"}}>
            <TextField
                variant="outlined"
                type="text"
                margin="normal"
                required
                fullWidth
                id="brandName"
                label="Brand Name"
                name="brandName"
                autoComplete="email"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {brandsList.map((item,index) => {
                return (
                    <GridItem md={4} sm={3}>
                        { searchTerm.length > 0 && item.brandName.toLowerCase().startsWith(searchTerm.toLowerCase()) && item.verify ? (<Brand key={index} brand={item}/>) : searchTerm.length === 0 && item.verify ? (<Brand key={index} brand={item}/>) : (<>Sorry no matches found!</>)}

                    </GridItem>
                )
            })}
        </GridContainer>
    )
}
