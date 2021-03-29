import * as productConstants from "../constants/productConstants";


export const listProducts = (state= {products : []} , action)=>{
    switch (action.type){
        case productConstants.PRODUCTLIST_FETCH_START :
            return {
                loading : true,
                products: [],

            };
        case productConstants.PRODUCTLIST_FETCH_SUCCESS:
            return {
                products: action.payload.productList,
                count : action.payload.totProduct,
                success : true,

            };
        case productConstants.PRODUCTLIST_FETCH_ERROR:
            return {
                error : action.payload,
            };
        default : return state;
    }
};

export const Product  = (state = {product: {}} , action)=>{
    switch (action.type){
        case productConstants.PRODUCTLIST_FETCH_START:
            return {
                loading : true,
                product : {}
            }
        case productConstants.PRODUCTLIST_FETCH_SUCCESS:
            return {
                product: action.payload,
                success: true
            }
        case productConstants.PRODUCTLIST_FETCH_ERROR:
            return {
                error : action.payload
            }
        default : return state;
    }
}
