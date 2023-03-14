import * as AUTH_CONST from './constans'
import magic from '../../lib/magic_sdk'

export const login = (email) => async (dispatch) => {

    console.log(email, "email");

    dispatch({
        type: AUTH_CONST.AUTH_LODGING,

    })
    try {
        console.log("try");
        const data = await magic.auth.loginWithMagicLink({ email })
        if (data) {
            console.log(data, "data");
            const token = await magic.user.getIdToken();
            const user = await magic.user.getMetadata();
            const userString = JSON.stringify(user)

            console.log({ user });

            localStorage.setItem("user", userString)
            localStorage.setItem("token", token)

            dispatch({
                type: AUTH_CONST.AUTH_SUCCESS,
                payload: { user, token }
            })
        }


    } catch (error) {
        dispatch({
            type: AUTH_CONST.AUTH_ERROR,
            payload: error

        })
    }




}


export const logOut = () => async (dispatch) => {

    dispatch({
        type: AUTH_CONST.AUTH_LODGING,

    })


    try {
        const res = await magic.user.logout();
        if (res) {
            localStorage.clear();
            dispatch({
                type: AUTH_CONST.AUTH_USER_LOGOUT,

            })

        }
        return true

    } catch (error) {

        dispatch({
            type: AUTH_CONST.AUTH_ERROR,
            payload: error
        })


        return false

    }

}


export const tokenChecker = () => async (dispatch) => {

    dispatch({
        type: AUTH_CONST.AUTH_LODGING,

    })


    try {
        const res = await magic.user.getIdToken();;
        if (res) {

            dispatch({
                type: AUTH_CONST.STOP_LOADING,

            })

        }
        return true

    } catch (error) {


        localStorage.clear();

        dispatch({
            type: AUTH_CONST.AUTH_USER_LOGOUT,
   
        })


        return false

    }


}