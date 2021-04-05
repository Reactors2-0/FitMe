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
