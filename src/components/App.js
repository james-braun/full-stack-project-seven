import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Items from './Items';
import Error from './Error';


const App = () => {
    
    return (
        <BrowserRouter>
            <div className="container">
                <Route component={Header} />
                <Route exact path="/" render={() => <Redirect to="/cats" />} />
                <Route exact path="/full-stack-project-seven/" render={() => <Redirect to="/full-stack-project-seven/cats" />} />
                <Switch>
                    <Route exact path="/full-stack-project-seven/:name" component={Items} />
                    <Route component={Error} />
                </Switch>
            </div>
        </BrowserRouter>
            
    );
}

export default App;