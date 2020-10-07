import React, {useContext, useEffect} from 'react';
import './App.scss';
import {Context} from "./store";
import {fetchInfections, fetchUser} from "./api";
import {appInitFail, appInitStart, appInitSucess, infectionsFetchSuccess, userFetchSuccess} from "./store/actions";
import Header from "./components/Header";
import SideBar from "./containers/Sidebar";
import InfectionDetailsMap from "./containers/InfectionDetails";

function App() {
    const [state, dispatch] = useContext(Context);

    const initUser = async () => {
        try {
            // dispatch(userFetchStart());
            const user = await fetchUser('1');
            dispatch(userFetchSuccess(user));
            return user;
        } catch (e) {
            console.log('initUser', e);
            throw e;
        }
    };

    const initInfections = async () => {
        try {
            // dispatch(infectionFetchStart());
            const infections = await fetchInfections('1');
            dispatch(infectionsFetchSuccess(infections));
        } catch (e) {
            console.log('initInfections', e);
            throw e;
        }
    };

    const appInit = async () => {
        try {
            dispatch(appInitStart());
            await Promise.all([initUser(), initInfections()]);

        } catch (e) {
            console.log('appInit', e);
            throw e;
        }
    };

    useEffect(() => {
        appInit()
            .then(() => dispatch(appInitSucess()))
            .catch(() => dispatch(appInitFail()));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (state.isLoading) {
        return <p>loading...</p>;
    }

    if (state.isError) {
        return <p>Error</p>;
    }
    return (
        <div className="app">
            <Header user={state.user} infectionsCount={state.infections.length}/>
            <main className="app-main">
                <SideBar/>
                <InfectionDetailsMap/>
            </main>
        </div>
    );
}

export default App;
