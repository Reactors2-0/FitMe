import * as userConstants from "../constants/AdminReducers";

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
