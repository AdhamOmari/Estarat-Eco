import * as FETCH_CONST from './constans'

const initialsState = {

    data: [],
    loading: false,
    error: null
}


export const FetchData = (state = initialsState, action) => {


    switch (action.type) {
        case FETCH_CONST.FETCH_LODGING:

            return {
                ...state,
                loading: true
            }
        case FETCH_CONST.FETCH_GOOD:


            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case FETCH_CONST.FETCH_ERROR:


            return {
                ...state,
                loading: false,
                error: action.payload
            }


        default:
            return state
    }
}