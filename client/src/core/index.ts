import {fetchInfections, fetchUser} from "../api";
import {appInitStart, infectionsFetchSuccess, userFetchSuccess} from "../store/actions";
import {Action} from "../store/defs";

type Dispatcher = (action: Action) => void

export const initUser = async (id: string, dispatch: Dispatcher) => {
    try {
        const user = await fetchUser(id);
        dispatch(userFetchSuccess(user));
        return user;
    } catch (e) {
        console.log('initUser', e);
        throw e;
    }
};

export const initInfections = async (id: string, dispatch: Dispatcher) => {
    try {
        const infections = await fetchInfections(id);
        dispatch(infectionsFetchSuccess(infections));
    } catch (e) {
        console.log('initInfections', e);
        throw e;
    }
};

export const appInit = async (id: string, dispatch: Dispatcher) => {
    try {
        dispatch(appInitStart());
        await Promise.all([initUser(id, dispatch), initInfections(id, dispatch)]);

    } catch (e) {
        console.log('appInit', e);
        throw e;
    }
};