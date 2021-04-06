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
  export const userContact = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_CONTACT_START:
            return {
                loading: true,
            };
        case userConstants.USER_CONTACT_SUCCESS:
            return {
                mesage: action.payload.consfirmMessage,
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
export const Contact  = (state = {contacts: {}} , action)=>{
  switch (action.type){
      case userConstants.USER_CONTACT_START:
          return {
              loading : true,
              contacts : {}
          }
      case userConstants.USER_CONTACT_SUCCESS:
          return {
            contacts: action.payload,
              success: true
          }
      case userConstants.USER_CONTACT_FAIL:
          return {
              error : action.payload
          }
      default : return state;
  }
}