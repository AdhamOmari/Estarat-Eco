import * as AUTH_CONST from './constans'

const initialsState = {
    isAuth: false,
    token: "",
    user: {},
    loading: false,
    error: null
}


export const authReducer = (state = initialsState, action) => {


    switch (action.type) {
        case AUTH_CONST.AUTH_LODGING:

            return {
                ...state,
                loading: true
            }
        case AUTH_CONST.AUTH_SUCCESS:


            return {
                ...state,
                loading: false,
                user: action.payload.user,
                isAuth: true,
                token: action.payload.token
            }
        case AUTH_CONST.AUTH_ERROR:


            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case AUTH_CONST.AUTH_USER_LOGOUT:


            return {
                ...state,
                isAuth: false,
                token: "",
                user: {},
                loading: false,
            }
        case AUTH_CONST.STOP_LOADING:


            return {
                ...state,
                loading: false,
            }

        default:
            return state
    }
}