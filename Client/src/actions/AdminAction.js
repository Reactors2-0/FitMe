import axios from "axios";
import * as AdminConstants from "../constants/AdminConstants";
import * as userConstants from "../constants/userConstants";


export const Repondre = (resetPasswordData) => async (dispatch) => {
  try {
    dispatch({ type: AdminConstants.Repondre_FETCH_START });

    await axios
        .post(`/api/v1/Admin/Repondre`, resetPasswordData)
        .then((resp) => {
          const confirmMessage = resp.data.message;
          dispatch({
            type: AdminConstants.Repondre_FETCH_SUCCESS,
            payload: confirmMessage,
          });
        });
  } catch (error) {
    dispatch({
      type: AdminConstants.Repondre_FETCH_FAIL,
      payload:
          error.response && error.response.data.error
              ? error.response.data.error
              : error.message,
    });
  }
};


