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

export const Category = (name) => async (dispatch) => {
  try {
    dispatch({ type: categoryConstants.Category_START });

    await axios.post(`/api/catgory/createcatgory`,name).then((resp) => {
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
