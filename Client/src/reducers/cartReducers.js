import * as cartConstants from "../constants/cartConstants";

export const cartReducer = (
    state = { cartItems: [], shippingAddress: {}, paymentMethod: "" },
    action
) => {
    switch (action.type) {
        case cartConstants.ADD_TO_CART_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(
                (x) => {
                    return x.productId === item.productId
                }
            );
            if (existItem) {
                state.cartItems.map((val,key)=> {
                    if (val.productId === item.productId) {
                        state.cartItems[key].qty+=item.qty;
                    }
                })

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }

        case cartConstants.CART_REMOVE_ITEM:
            state.cartItems.map((val,key)=> {
                if (val.productId === action.payload.id) {
                    if (val.qty > 1) {
                        state.cartItems[key].qty -= action.payload.qty;
                    } else {
                        state.cartItems = state.cartItems.filter(
                            (x) => x.productId !== action.payload.id
                        )

                    }
                }
                })

            return {...state}

        case cartConstants.CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload,
            };
        case cartConstants.CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload,
            };
        case cartConstants.CART_RESET:
            return {
                cartItems: [],
                shippingAddress: {},
                paymentMethod: "",
            };
        default:
            return state;
    }
};
