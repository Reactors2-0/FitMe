import axios from "axios";
import * as brandConstants from "../constants/brandConstants";

export const listBrands = (brandInfo) => async (dispatch) => {
    const {
        searchBrandKey,
        sort,
        initialLoading,
    } = brandInfo;

    try {
        if (initialLoading) {
            dispatch({
                type: brandConstants.BRANDLIST_FETCH_START
            });
        }

        const queryString = [
            sort.length > 0 ? `sort=${sort.join(",")}` : "",
            searchBrandKey !== "" ? `&keyWord=${searchBrandKey}` : "",
        ];

        await axios.get(`/api/brands/?${queryString.join("")}`).then((resp) => {
            const brandList = resp.data.data.results;
            const totalBrands = resp.data.data.count;

            dispatch({
                type: brandConstants.BRANDLIST_FETCH_SUCCESS,
                payload: {
                    brandList,
                    totalBrands
                },
            });
        });
    } catch (error) {
        dispatch({
            type: brandConstants.BRANDLIST_FETCH_ERROR,
            payload: error.response && error.response.data.error ?
                error.response.data.error :
                error.message,
        });
    }
};

export const listBrandsForAdmin = (initialLoading) => async (dispatch) => {
    try {
        if (initialLoading) {
            dispatch({
                type: brandConstants.BRANDLIST_FETCH_START
            });
        }

        await axios.get(`/api/brands/`).then((resp) => {
            const brandList = resp.data.data.results;
            const totalBrands = resp.data.data.count;

            dispatch({
                type: brandConstants.BRANDLIST_FETCH_SUCCESS,
                payload: {
                    brandList,
                    totalBrands
                },
            });
        });
    } catch (error) {
        dispatch({
            type: brandConstants.BRANDLIST_FETCH_ERROR,
            payload: error.response && error.response.data.error ?
                error.response.data.error :
                error.message,
        });
    }
};

export const brand = (id) => async (dispatch) => {
    try {
        dispatch({
            type: brandConstants.BRAND_FETCH_START
        });

        await axios.get(`/api/brands/${id}`).then((resp) => {
            const brand = resp.data.data;

            dispatch({
                type: brandConstants.BRAND_FETCH_SUCCESS,
                payload: brand,
            });
        });
    } catch (error) {
        dispatch({
            type: brandConstants.BRAND_FETCH_FAIL,
            payload: error.response && error.response.data.error ?
                error.response.data.error :
                error.message,
        });
    }
};
export const brandByUserId = (userid) => async (dispatch) => {
    try {
        dispatch({
            type: brandConstants.BRAND_FETCH_START
        });

        await axios.get(`/api/brands/${userid}/getbyuser`).then((resp) => {
            const brand = resp.data.data;
            dispatch({
                type: brandConstants.BRAND_FETCH_SUCCESS,
                payload: brand,
            });
        });
    } catch (error) {
        dispatch({
            type: brandConstants.BRAND_FETCH_FAIL,
            payload: error.response && error.response.data.error ?
                error.response.data.error :
                error.message,
        });
    }
};
export const deleteBrand = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: brandConstants.DELETE_BRAND_START });
        const { userLogin: { userInfo }, } = getState();
        const config = { headers: { Authorization: `Bearer ${userInfo.token}`, }, };
        await axios.delete(`/api/brands/${id}`, config).then((resp) => {
            dispatch({
                type: brandConstants.DELETE_BRAND_SUCCESS,
            });
        });
    } catch (error) {
        dispatch({
            type: brandConstants.DELETE_BRAND_FAIL,
            payload: error.response && error.response.data.error ?
                error.response.data.error :
                error.message,
        });
    }
};

export const createBrand = (formData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: brandConstants.CREATE_BRAND_START
        });
        const { userLogin: { userInfo }, } = getState();
        const config = { headers: { Authorization: `Bearer ${userInfo.token}`, }, };
        await axios.post("/api/brands/", formData, config).then((resp) => {
            dispatch({ type: brandConstants.CREATE_BRAND_SUCCESS, });
        });
    } catch (error) {
        dispatch({
            type: brandConstants.CREATE_BRAND_FAIL,
            payload: error.response && error.response.data.error ?
                error.response.data.error :
                error.message,
        });
    }
};

export const editBrand = (id, UpdatedData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: brandConstants.EDIT_BRAND_START
        });

        const {
            userLogin: {
                userInfo
            },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios
            .put(`/api/brands/${id}`, UpdatedData, config)
            .then((resp) => {
                dispatch({
                    type: brandConstants.EDIT_BRAND_SUCCESS,
                    payload: "Brand updated successfully",
                });
            });
    } catch (error) {
        dispatch({
            type: brandConstants.EDIT_BRAND_FAIL,
            payload: error.response && error.response.data.error ?
                error.response.data.error :
                error.message,
        });
    }
};
