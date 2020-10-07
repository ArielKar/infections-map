import React, {useContext, useEffect} from 'react';
import './App.scss';
import {Context} from "./store";
import {appInitFail, appInitSuccess} from "./store/actions";
import Header from "./components/Header";
import SideBar from "./containers/Sidebar";
import InfectionDetailsMap from "./containers/InfectionDetails";
import {appInit} from "./core";

function App() {
    const [state, dispatch] = useContext(Context);
    const DEFAULT_ID = '1';

    useEffect(() => {
        appInit(DEFAULT_ID, dispatch)
            .then(() => dispatch(appInitSuccess()))
            .catch(() => dispatch(appInitFail()));
    }, [dispatch]);

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
