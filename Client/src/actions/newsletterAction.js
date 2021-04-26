import axios from "axios";
import * as newsletterConstants from "../constants/newsletterConstants";

export const Register = ( email) => async (dispatch) => {
    try {
        dispatch({ type: newsletterConstants.NEWSLETTER_START });

        const registerData = {
            email,
        };

        await axios.post(`/api/newsletter/`, registerData).then((resp) => {
            const consfirmMessage = resp.data.message;

            dispatch({
                type: newsletterConstants.NEWSLETTER_SUCCESS,
                payload: consfirmMessage,
            });
        });
    } catch (error) {
        dispatch({
            type: newsletterConstants.NEWSLETTER_FAIL,
            payload:
                error.response && error.response.data.error
                    ? error.response.data.error
                    : error.message,
        });
    }
};