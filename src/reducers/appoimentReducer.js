/* eslint-disable import/no-anonymous-default-export */
import {
    OPEN_APPOIMENT_MODAL, CLOSE_APPOIMENT_MODAL, CHANGE_VALUE, SUBMIT_LOADING, FAILED_SUBMIT_APPOIMENT
} from '../actions/types';

const initialState = {
    isModalOpen: false,
    selectedDoctor: null,
    value: {
        name: null,
        mobile: null,
        email: null,
        date: null
    },
    isAvilable: true,
    formErrors: '',
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {

        case OPEN_APPOIMENT_MODAL:
            return {
                ...state,
                isModalOpen: true,
                selectedDoctor: action.payload
            }
        case CHANGE_VALUE:


            if (action?.payload?.available) {
                return {
                    ...state,
                    value: {
                        ...state.value,
                        [action.payload.field]: action.payload.value,

                    },
                    isAvilable: action.payload.available === 'YES' ? true : false
                }
            } else {
                return {
                    ...state,
                    value: {
                        ...state.value,
                        [action.payload.field]: action.payload.value,

                    }
                }
            }

        case SUBMIT_LOADING:

            return {
                ...state,
                loading: true
            }
        case FAILED_SUBMIT_APPOIMENT:


            return {
                ...state,
                loading: false
            }

        case CLOSE_APPOIMENT_MODAL:
            return {
                ...state,
                isModalOpen: false,
                selectedDoctor: null,
                value: {
                    name: null,
                    mobile: null,
                    email: null,
                    date: null
                },
                isAvilable: true,
                formErrors: '',
                loading: false
            }

        default:
            return state;
    }
}