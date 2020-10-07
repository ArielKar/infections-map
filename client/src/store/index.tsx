import React, {createContext, FunctionComponent, useReducer} from 'react';
import {State} from "./defs";
import reducer from './reducer';

const initialState: State = {
    user: null,
    isLoading: true,
    isError: false,
    infections: [],
    selectedInfection: null
};

export const Context = createContext<any>(initialState);

const Store: FunctionComponent = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};

export default Store;