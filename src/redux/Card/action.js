
import * as CARD_CONST from './constant';

export const cartDataAction = (item) => async (dispatch) => {

    dispatch({
        type: CARD_CONST.ADD_TO_CARD,
        payload: item
    })

}
export function Remove_From_Cart(item) {
    return (dispatch) => {

        dispatch({
            type: CARD_CONST.REMOVE_FROM_CART,
            payload: item,
        })
    }

}