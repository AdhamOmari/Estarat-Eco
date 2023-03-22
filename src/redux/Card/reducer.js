import * as CARD_CONST from "./constant";

const initialsState = {
    cartData: [],
};

export const addToCardReducer = (state = initialsState, action) => {


    switch (action.type) {
        case CARD_CONST.ADD_TO_CARD:

            console.log(state.cartData, "state");
            const isEexist = state.cartData?.find(
                (item) => item.id === action.payload.id
            );

            if (isEexist) {
                console.log(isEexist, "isEexist");
                const EditedItems = state.cartData.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        console.log(item, "item");
                        return item;
                    }
                });
                console.log(EditedItems, "EditedItems");

                return {
                    cartData: EditedItems,
                };
            } else {
                console.log("else");

                return {
                    cartData: [...state.cartData, { ...action.payload, quantity: 1 }],
                };
            }

        case CARD_CONST.REMOVE_FROM_CART:
            const items = state.cartData?.map((item) => {
                if (item?.id === action.payload.id) {
                    if (item?.quantity !== 1) {
                        return { ...item, quantity: item?.quantity - 1 };
                    }
                } else {
                    return item;
                }
            });

            return {
                cartData: items.filter(Boolean),
            };

        default:
            return state;
    }
};
