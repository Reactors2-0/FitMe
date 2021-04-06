import axios from "axios";
import * as userConstants from "../constants/AdminConstants";
import * as categoryConstants from "../constants/categoryConstants";

export const Repondre = (email,message) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.Repondre_SEND_START });

    await axios.post(`/api/v1/admin/Repondre`, email,message).then((resp) => {
      const confirmMessage = resp.data.message;
      dispatch({
        type: userConstants.Repondre_SEND_SUCCESS,
        payload: confirmMessage,
      });
    });
  } catch (error) {
    dispatch({
      type: userConstants.Repondre_SEND_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const Category = (categoryName) => async (dispatch) => {
  try {
    dispatch({ type: categoryConstants.Category_START });

    await axios.post(`/api/category/`,categoryName).then((resp) => {
      const confirmMessage = resp.data.message;
      dispatch({
        type: categoryConstants.Category_SUCCESS,
        payload: confirmMessage,
      });
    });
  } catch (error) {
    dispatch({
      type: categoryConstants.Category_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};
export const deleteCategory = (id) => async (dispatch, getState) => {
  try {
      dispatch({ type: categoryConstants.Category_START });
      const { userLogin: { userInfo }, } = getState();
      const config = { headers: { Authorization: `Bearer ${userInfo.token}`, }, };
      await axios.delete(`/api/category/${id}`, config).then((resp) => {
          dispatch({
              type: categoryConstants.Category_SUCCESS,
          });
      });
  } catch (error) {
      dispatch({
          type: categoryConstants.Category_FAIL,
          payload: error.response && error.response.data.error ?
              error.response.data.error :
              error.message,
      });
  }
};

export const editcategory = (id, UpdatedData) => async (dispatch, getState) => {
  try {
      dispatch({
          type: categoryConstants.Category_START
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
          .put(`/api/category/${id}`, UpdatedData, config)
          .then((resp) => {
              dispatch({
                  type: categoryConstants.Category_SUCCESS,
                  payload: "Category updated successfully",
              });
          });
  } catch (error) {
      dispatch({
          type: categoryConstants.Category_FAIL,
          payload: error.response && error.response.data.error ?
              error.response.data.error :
              error.message,
      });
  }
};
export const listCategoryForAdmin = (initialLoading) => async (dispatch) => {
  try {
      if (initialLoading) {
          dispatch({
              type: categoryConstants.Category_START
          });
      }
      await axios.get(`/api/category/`).then((resp) => {
          const categoryList = resp.data.data.results;
          const totalcategory = resp.data.data.count;
          dispatch({
              type: categoryConstants.Category_SUCCESS,
              payload: {
                categoryList,
                  totalcategory
              } ,
          });
      });
  } catch (error) {
      dispatch({
          type: categoryConstants.Category_FAIL,
          payload: error.response && error.response.data.error ?
              error.response.data.error :
              error.message,
      });
  }
};
export const categoryid = (id) => async (dispatch) => {
  try {
      dispatch({ type: categoryConstants.Category_START });

      await axios.get(`/api/category/${id}`).then((resp) => {
          const categoryi = resp.data.data;
        
          dispatch({
              type: categoryConstants.Category_SUCCESS,
              payload: categoryi,
              
          });
      });
  } catch (error) {
      dispatch({
          type: categoryConstants.Category_FAIL,
          payload:
              error.response && error.response.data.error
                  ? error.response.data.error
                  : error.message,
      });
  }
};
