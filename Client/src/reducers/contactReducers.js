import * as userConstants from "../constants/contactConstants";


export const ContactList = (state = { contacts: [] }, action) => {
    switch (action.type) {
      case userConstants.USER_CONTACT_START:
        return {
          loading: true,
        };
      case userConstants.USER_CONTACT_SUCCESS:
        return {
          contacts: action.payload.categoryList,
          count: action.payload.totalcategory,
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
