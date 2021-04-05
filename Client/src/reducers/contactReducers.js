import * as userConstants from "../constants/contactConstants";



export const userContact = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_CONTACT_START:
            return {
                loading: true,
            };
        case userConstants.USER_CONTACT_SUCCESS:
            return {
                mesage: action.payload,
                success: true,
            };
        case userConstants.USER_CONTACT_FAIL:
            return {
                error: action.payload,
            };

        default:
            return state;
    }
};

