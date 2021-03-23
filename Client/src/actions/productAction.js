import axios from "axios";
import * as productConstansts from "../constants/productConstants";

export const listProducts = (productInfo) => async (dispatch) =>{
    const {
        searchProductKey,
        sort,
        category,
        priceRange,
        initialLoading,
        ItORgt
    } = productInfo;

    try{
        if(initialLoading){
            dispatch({type : productConstansts.PRODUCTLIST_FETCH_START});

        }
        const queryString = [
            sort.length > 0 ? `sort=${sort.join(",")}` : "",
            searchProductKey !== "" ?`&keyword=${searchProductKey}` : "",
            category !== "" ? `&category=${category}` : "",
            priceRange !== "" ? `&price[${ItORgt}]=${Number(priceRange)}` : ""
        ];

        await axios.get(`http://localhost:3000/api/product/?${queryString.join("")}`).then((res)=>{
            const productList = res.data.data.results;
            const totProduct = res.data.data.count;
            console.log(productList)
            dispatch({
                type : productConstansts.PRODUCTLIST_FETCH_SUCCESS,
                payload : {productList , totProduct},
            });
        })
    }catch (error){
        dispatch({
            type : productConstansts.PRODUCTLIST_FETCH_ERROR,
            payload : error.response && error.response.data.error
                    ? error.response.data.error : error.message
        });
    }

};

