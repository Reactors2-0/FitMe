import * as userConstants from "../constants/AdminConstants";
import * as CategoryConstants from "../constants/categoryConstants";

export const Repondre = (state = { message: "" }, action) => {
  switch (action.type) {
    case userConstants.Repondre_SEND_START:
      return {
        loading: true,
      };
    case userConstants.Repondre_SEND_SUCCESS:
      return {
        success: true,
        message: action.payload,
      };
    case userConstants.Repondre_SEND_FAIL:
      return {
        error: action.payload,
      };
    case userConstants.Repondre_SEND_RSET:
      return {};

    default:
      return state;
  }
};


export const categoryList = (state = { categorys: [] }, action) => {
  switch (action.type) {
    case CategoryConstants.Category_START:
      return {
        loading: true,
      };
    case CategoryConstants.Category_SUCCESS:
      return {
        categorys: action.payload.categoryList,
        count: action.payload.totalcategory,
        success: true,
      };
    case CategoryConstants.Category_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};