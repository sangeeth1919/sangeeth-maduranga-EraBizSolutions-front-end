import axios from "axios";
import {
    GET_DOCTORS, SET_LOADING, VIEW_DOCTOR, SEARCH_DOCTOR,SEARCH_KEYWORD_DOCTOR
} from './types';

const url = process.env.REACT_APP_API_URL

export const getDoctors = () => async (dispatch) => {



    const baseURL = url + 'doctor'
    dispatch(setLoading());
    let doctors = []
    try {
        const res = await axios.get(baseURL)
        doctors = res?.data?.data ? res.data.data : []

        dispatch(
            {
                type: GET_DOCTORS,
                payload: doctors
            }
        )
    } catch (error) {
        dispatch(
            {
                type: GET_DOCTORS,
                payload: []
            }
        )
        //if somehow failed to connect to the server
        alert('failed to connect server...')
        throw new Error(error);
    }

}



export const searchDoctor = (data) => async (dispatch) => {



    const baseURL = url + 'doctor/filter'
    dispatch(setLoading());
    let doctors = []
    try {
        const res = await axios.post(baseURL,data)
        
        doctors = res?.data?.data ? res.data.data : []

        dispatch(
            {
                type: GET_DOCTORS,
                payload: doctors
            }
        )
    } catch (error) {
        dispatch(
            {
                type: GET_DOCTORS,
                payload: []
            }
        )
        //if somehow failed to connect to the server
        alert('failed to connect server...')
        throw new Error(error);
    }

}

export const changeValue = (data) => async (dispatch) => {
   
    dispatch(
        {
            type: SEARCH_KEYWORD_DOCTOR,
            payload: data
        }
    )
}

export const viewDoctor = (data) => dispatch => {

    dispatch(
        {
            type: VIEW_DOCTOR,
            payload: data
        }
    )


}



export const setLoading = () => dispatch => {

    dispatch(
        {
            type: SET_LOADING,
            payload: true
        }
    )


}



