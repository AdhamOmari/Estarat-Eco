
import * as FETCH_CONST from './constans'

export const FetchData = () => async (dispatch) => {



    dispatch({
        type: FETCH_CONST.FETCH_LODGING,

    })
    try {
        const dataFetch = await fetch("https://run.mocky.io/v3/ebee18cb-838a-440f-bf61-e406587748a2");



        const data = await dataFetch.json()

        if (data) {
            dispatch({
                type: FETCH_CONST.FETCH_GOOD,
                payload: data
            })
        } else {
            console.log("error");
        }




    } catch (error) {
        dispatch({
            type: FETCH_CONST.FETCH_ERROR,
            payload: error

        })
    }




}