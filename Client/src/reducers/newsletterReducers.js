import * as newsConstants from "../constants/newsletterConstants";


export const NewsList = (state = { contacts: [] }, action) => {
    switch (action.type) {
      case newsConstants.NEWSLETTER_START:
        return {
          loading: true,
        };
      case newsConstants.NEWSLETTER_SUCCESS:
        return {
          contacts: action.payload.categoryList,
          count: action.payload.totalcategory,
          
          success: true,
        };
      case newsConstants.NEWSLETTER_FAIL:
        return {
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  export const Newsuser = (state = {}, action) => {
    switch (action.type) {
        case newsConstants.NEWSLETTER_START:
            return {
                loading: true,
            };
        case newsConstants.NEWSLETTER_SUCCESS:
            return {
                mesage: action.payload.consfirmMessage,
                success: true,
            };
        case newsConstants.NEWSLETTER_FAIL:
            return {
                error: action.payload,
            };

        default:
            return state;
    }
};
export const News  = (state = {contacts: {}} , action)=>{
  switch (action.type){
      case newsConstants.NEWSLETTER_START:
          return {
              loading : true,
              contacts : {}
          }
      case newsConstants.NEWSLETTER_SUCCESS:
          return {
            contacts: action.payload,
              success: true
          }
      case newsConstants.NEWSLETTER_FAIL:
          return {
              error : action.payload
          }
      default : return state;
  }
}