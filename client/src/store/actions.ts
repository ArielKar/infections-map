import {Infection, User} from "./defs";

export const GET_USER_SUCCESS = '[User] fetch success';
export const GET_INFECTIONS_SUCCESS = '[Infections] fetch success';

export const SELECT_INFECTION = '[Infection] select item';

export const APP_INIT_START = '[App] Init start';
export const APP_INIT_SUCCESS = '[App] Init success';
export const APP_INIT_FAIL = '[App] Init failure';

export const appInitStart = () => {
    return {
        type: APP_INIT_START
    };
};

export const appInitSuccess = () => {
    return {
        type: APP_INIT_SUCCESS
    };
};

export const appInitFail = () => {
    return {
        type: APP_INIT_FAIL
    };
};

export const selectInfection = (index: number) => {
    return {
        type: SELECT_INFECTION,
        payload: index
    };
};

export const userFetchSuccess = (user: User) => {
    return {
        type: GET_USER_SUCCESS,
        payload: user
    };
};

export const infectionsFetchSuccess = (infectionsList: Infection[]) => {
    return {
        type: GET_INFECTIONS_SUCCESS,
        payload: infectionsList.sort((a, b) => (new Date(b.datetime).getTime() - new Date(a.datetime).getTime()))
    };
};