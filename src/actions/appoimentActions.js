import axios from "axios";

import {
    OPEN_APPOIMENT_MODAL, CLOSE_APPOIMENT_MODAL, CHANGE_VALUE, SUBMIT_APPOIMENT, SUBMIT_LOADING, FAILED_SUBMIT_APPOIMENT,SUCCESS_SUBMIT_APPOIMENT
} from './types';
const url = process.env.REACT_APP_API_URL

export const openAppoimentModal = (data) => (dispatch) => {
    dispatch(
        {
            type: OPEN_APPOIMENT_MODAL,
            payload: data
        }
    )

}

export const changeValue = (data) => async (dispatch) => {
    if(data.field==='date'){
        if(!data.value || data.value==''){
            dispatch(
                {
                    type: CHANGE_VALUE, payload: data
                }
            )
        }else{
            const baseURL = url + 'appoiment/get-appoiments'
            const res = await axios.post(baseURL, {
                doctor:data.doctorId,
                value:data.value,
            })

            dispatch(
                {
                    type: CHANGE_VALUE, payload: {
                        ...data,
                        available:res?.data?.available?'YES':'NO'
                    }
                }
            )

            
        }
       

    }
    else{
        dispatch(
            {
                type: CHANGE_VALUE, payload: data
            }
        )
    }
    
}

export const submitAppoiment = (data) => async (dispatch) => {
    dispatch(submitAppoimentLoading())
    const baseURL = url + 'appoiment/make-appoiments'
    const pay={
        "name": data.name,
        "mobile": data.mobile,
        "email": data.email,
        "date": data.date,
        "doctor": data.doctor
    }
    try {
        const res = await axios.post(baseURL, pay)
        // doctors = res?.data?.data ? res.data.data : []

        dispatch(
            {
                type: SUCCESS_SUBMIT_APPOIMENT,
            }
        )
        return res
    } catch (error) {

        dispatch(
            {
                type: FAILED_SUBMIT_APPOIMENT,
            }
        )
        throw new Error(error);
    }

    // dispatch(
    //     {
    //         type: SUBMIT_APPOIMENT, payload:data
    //     }
    // )
}

export const submitAppoimentLoading = () => (dispatch) => {

    dispatch(
        {
            type: SUBMIT_LOADING
        }
    )
}


export const closeAppoimentModal = () => (dispatch) => {
    dispatch(
        {
            type: CLOSE_APPOIMENT_MODAL
        }
    )

}







