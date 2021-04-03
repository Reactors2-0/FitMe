import axios from "axios";
import * as productConstansts from "../constants/productConstants";
import * as productConstants from "../constants/productConstants";

export const listProducts = (productInfo) => async (dispatch) =>{
    const {
        searchProductKey,
        sort,
        category,
        initialLoading,
        ltORgt
    } = productInfo;

    try{
        if(initialLoading){
            dispatch({type : productConstansts.PRODUCTLIST_FETCH_START});

        }
        const queryString = [
            sort.length > 0 ? `sort=${sort.join(",")}` : "",
            searchProductKey !== "" ?`&keyword=${searchProductKey}` : "",
            category !== "" ? `&category=${category}` : "",
            `&priceMin=${ltORgt[0]}`,
            `&priceMax=${ltORgt[1]}`,

        ];

        await axios.get(`http://localhost:3000/api/product/?${queryString.join("")}`).then((res)=>{
            const productList = res.data.data.results;
            const totProduct = res.data.data.count;
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

export const product = (id) => async (dispatch) => {
    try {
        dispatch({ type: productConstants.PRODUCT_FETCH_START });

        await axios.get(`http://localhost:3000/api/product/${id}`).then((resp) => {
            const product = resp.data.data;
            dispatch({
                type: productConstants.PRODUCT_FETCH_SUCCESS,
                payload: product,
            });
        });
    } catch (error) {
        dispatch({
            type: productConstants.PRODUCT_FETCH_FAIL,
            payload:
                error.response && error.response.data.error
                    ? error.response.data.error
                    : error.message,
        });
    }
};


export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: productConstants.DELETE_PRODUCT_START });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/product/${id}`, config).then((resp) => {
            dispatch({
                type: productConstants.DELETE_PRODUCT_SUCCESS,
            });
        });
    } catch (error) {
        dispatch({
            type: productConstants.DELETE_PRODUCT_FAIL,
            payload:
                error.response && error.response.data.error
                    ? error.response.data.error
                    : error.message,
        });
    }
};

export const createProduct = (formData) => async (dispatch, getState) => {

    try {
        dispatch({ type: productConstants.CREATE_PRODUCT_START });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.post("/api/product/", formData, config).then((resp) => {
            dispatch({
                type: productConstants.CREATE_PRODUCT_SUCCESS,
            });
        });
    } catch (error) {
        dispatch({
            type: productConstants.CREATE_PRODUCT_FAIL,
            payload:
                error.response && error.response.data.error
                    ? error.response.data.error
                    : error.message,
        });
    }
};

export const EditProduct = (id, UpdatedData) => async (dispatch, getState) => {
    try {
        dispatch({ type: productConstants.EDIT_PRODUCT_START });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios
            .put(`/api/product/${id}`, UpdatedData, config)
            .then((resp) => {
                dispatch({
                    type: productConstants.EDIT_PRODUCT_SUCCESS,
                    payload: "Product updated successfully",
                });
            });
    } catch (error) {
        dispatch({
            type: productConstants.EDIT_PRODUCT_FAIL,
            payload:
                error.response && error.response.data.error
                    ? error.response.data.error
                    : error.message,
        });
    }
};
