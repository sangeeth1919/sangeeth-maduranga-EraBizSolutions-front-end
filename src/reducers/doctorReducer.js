/* eslint-disable import/no-anonymous-default-export */
import {
    GET_DOCTORS, SET_LOADING, VIEW_DOCTOR, SEARCH_KEYWORD_DOCTOR
} from '../actions/types';

const initialState = {
    doctors: [],
    loading: false,
    selectedDoctor: null,
    searchKey: {
        name: null
    }
}



export default function (state = initialState, action) {
    switch (action.type) {

        case GET_DOCTORS:
            return {
                ...state,
                doctors: action.payload,
                selectedDoctor: null,
                loading: false
            }
        case SEARCH_KEYWORD_DOCTOR:
            return {
                ...state,
                searchKey: {
                    ...state.searchKey,
                    [action.payload.field]: action.payload.value,
            
                }
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case VIEW_DOCTOR:
            return {
                ...state,
                selectedDoctor: action.payload
            }
        default:
            return state;
    }
}