import React from 'react';
import { HashRouter, Route, Redirect, Switch, hashHistory } from 'react-router-dom';
import Header from './Header';
import Items from './Items';
import Error from './Error';


const App = () => {
    
    return (
        <HashRouter history={hashHistory}>
            <div className="container">
                <Route component={Header} />
                <Route exact path="/" render={() => <Redirect to="/cats" />} />
                <Switch>
                    <Route path="/:name" component={Items} />
                    <Route component={Error} />
                </Switch>
            </div>
        </HashRouter>
            
    );
}

export default App;