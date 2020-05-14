import React from 'react';

import './App.css';
//COMPONENTS
import NavigationBar from "./components/NavigationBar";
//ROUTER
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";
import {routesHome} from "./routes";


function App() {
    let showMenuHome = (routes) => {
        if (routes && routes.length > 0) {
            return routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />)
            })
        }
    }
    return (
        <BrowserRouter>
            <div className="App">
                <NavigationBar/>
                <Switch>
                    {showMenuHome(routesHome)}
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
