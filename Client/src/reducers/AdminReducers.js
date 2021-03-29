import * as userConstants from "../constants/AdminConstants";

export const Repondre = (state = { message: "" }, action) => {
  switch (action.type) {
    case userConstants.Repondre_FETCH_START:
      return {
        loading: true,
      };
    case userConstants.Repondre_FETCH_SUCCESS:
      return {
        success: true,
        message: action.payload,
      };
    case userConstants.Repondre_FETCH_FAIL:
      return {
        error: action.payload,
      };
    case userConstants.Repondre_FETCH_RSET:
      return {};

    default:
      return state;
  }
};