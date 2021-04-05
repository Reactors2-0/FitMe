import axios from "axios";
import * as userConstants from "../constants/contactConstants";

export const Register = (name, email, phone, message) => async (dispatch) => {
    try {
        dispatch({ type: userConstants.USER_CONTACT_START });

        const registerData = {
            name,
            email,
            phone,
            message,
        };

        await axios.post(`/api/contact/contactus`, registerData).then((resp) => {
            const consfirmMessage = resp.data.message;

            dispatch({
                type: userConstants.USER_CONTACT_SUCCESS,
                payload: consfirmMessage,
            });
        });
    } catch (error) {
        dispatch({
            type: userConstants.USER_CONTACT_FAIL,
            payload:
                error.response && error.response.data.error
                    ? error.response.data.error
                    : error.message,
        });
    }
};
export const listContactForContact = (initialLoading) => async (dispatch) => {
    try {
        if (initialLoading) {
            dispatch({
                type: userConstants.USER_CONTACT_START
            });
        }
        await axios.get(`/api/contact/`).then((resp) => {
            const categoryList = resp.data.data.results;
            const totalcategory = resp.data.data.count;
            dispatch({
                type: userConstants.USER_CONTACT_SUCCESS,
                payload: {
                  categoryList,
                    totalcategory
                } ,
            });
        });
    } catch (error) {
        dispatch({
            type: userConstants.USER_CONTACT_FAIL,
            payload: error.response && error.response.data.error ?
                error.response.data.error :
                error.message,
        });
    }
  };
  