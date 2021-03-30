import * as brandConstants from "../constants/brandConstants";

export const listBrands = (state = { brands: [] }, action) => {
  switch (action.type) {
    case brandConstants.BRANDLIST_FETCH_START:
      return {
        loading: true,
        brands: [],
      };
    case brandConstants.BRANDLIST_FETCH_SUCCESS:
      return {
        brands: action.payload.brandList,
        count: action.payload.totalBrands,
        success: true,
      };
    case brandConstants.BRANDLIST_FETCH_ERROR:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};

export const brandByUserId = (state = { brand: {} }, action) => {
  switch (action.type) {
    case brandConstants.BRAND_FETCH_START:
      return {
        loading: true,
        brand: {},
      };
    case brandConstants.BRAND_FETCH_SUCCESS:
      return {
        brand: action.payload,
        success: true,
      };
    case brandConstants.BRAND_FETCH_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};

export const Brand = (state = { brand: {} }, action) => {
  switch (action.type) {
    case brandConstants.BRAND_FETCH_START:
      return {
        loading: true,
        brand: {},
      };
    case brandConstants.BRAND_FETCH_SUCCESS:
      return {
        brand: action.payload,
        success: true,
      };
    case brandConstants.BRAND_FETCH_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};


export const deleteBrand = (state = {}, action) => {
  switch (action.type) {
    case brandConstants.DELETE_BRAND_START:
      return {
        loading: true,
      };
    case brandConstants.DELETE_BRAND_SUCCESS:
      return {
        success: true,
      };
    case brandConstants.DELETE_BRAND_FAIL:
      return {
        error: action.payload,
      };

    case brandConstants.DELETE_BRAND_RESET:
      return {};

    default:
      return state;
  }
};

export const createBrand = (state = {}, action) => {
  switch (action.type) {
    case brandConstants.CREATE_BRAND_START:
      return {
        loading: true,
      };
    case brandConstants.CREATE_BRAND_SUCCESS:
      return {
        success: true,
      };
    case brandConstants.CREATE_BRAND_FAIL:
      return {
        error: action.payload,
      };

    case brandConstants.CREATE_BRAND_RESET:
      return {};

    default:
      return state;
  }
};

export const editBrand = (state = {}, action) => {
  switch (action.type) {
    case brandConstants.EDIT_BRAND_START:
      return {
        loading: true,
      };
    case brandConstants.EDIT_BRAND_SUCCESS:
      return {
        success: true,
      };
    case brandConstants.EDIT_BRAND_FAIL:
      return {
        error: action.payload,
      };
    case brandConstants.EDIT_BRAND_RESET:
      return {};
    default:
      return state;
  }
};
