import {Action, State} from "./defs";
import {
    APP_INIT_FAIL,
    APP_INIT_START,
    APP_INIT_SUCCESS,
    GET_INFECTIONS_SUCCESS,
    GET_USER_SUCCESS,
    SELECT_INFECTION
} from "./actions";

export default (state: State, action: Action): State => {
    console.log(action.type)
    switch (action.type) {
        case APP_INIT_START: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case APP_INIT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case APP_INIT_FAIL: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        }
        // case GET_USER_START: {
        //     return {
        //         ...state,
        //         isLoading: true,
        //     };
        // }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload
            };
        }
        // case GET_USER_FAIL: {
        //     return {
        //         ...state,
        //         isLoading: false,
        //         user: null,
        //         isError: true
        //     };
        // }
        // case GET_INFECTIONS_START: {
        //     return {
        //         ...state,
        //         isLoading: true,
        //         isError: false,
        //     };
        // }
        case GET_INFECTIONS_SUCCESS: {
            return {
                ...state,
                infections: action.payload,

            };
        }
        // case GET_INFECTIONS_FAIL: {
        //     return {
        //         ...state,
        //         isLoading: false,
        //         isError: true,
        //         infections: []
        //     };
        // }
        case SELECT_INFECTION: {
            return {
                ...state,
                selectedInfection: action.payload
            };
        }
        default: {
            return state;
        }
    }
}