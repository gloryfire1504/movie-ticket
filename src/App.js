import React from 'react';

import './App.css';
//COMPONENTS
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import ListMovie from "./components/ListMovie";
// import Banner from "./components/Banner";
// import NowShowingMovie from "./components/NowShowingMovie";
// import UpcomingMovie from "./components/UpcomingMovie";
//ROUTER
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavigationBar/>
                {/*<ListMovie></ListMovie>*/}
                {/*<Banner></Banner>*/}
                {/*<br/>*/}
                {/*<NowShowingMovie></NowShowingMovie>*/}
                {/*<br/>*/}
                {/*<UpcomingMovie></UpcomingMovie>*/}
                {/*<br/>*/}
                {/*<Footer></Footer>*/}
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/home'} component={Home}/>
                    <Route path='/list-movie' component={ListMovie}/>
                    <Route component={NotFound}/>
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
