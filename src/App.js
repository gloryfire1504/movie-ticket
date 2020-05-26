import React from 'react';
import './App.css';
//COMPONENTS
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
//ROUTER
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routesHome} from "./routes";
//REDUX
import {connect} from 'react-redux'
import DashBoard from "./components/DashBoard";

class App extends React.Component {
    authRender = () => {
        
    }
    render() {
        const {authenticate, userType} = this.props
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
        // let showMenuAdmin = (routes) => {
        //     if (routes && routes.length > 0) {
        //         return routes.map((route, index) => {
        //             return (<Route
        //                 key={index}
        //                 path={route.path}
        //                 exact={route.exact}
        //                 component={route.component}
        //             />)
        //         })
        //     }
        // }
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        {showMenuHome(routesHome)}
                        {}
                        <Route path={'/admin'} exact={true} component={Admin}/>
                        <Route path={'/admin/dashboard'} exact={false}
                               component={authenticate && userType === 'QuanTri' ? DashBoard : NotFound}/>
                        <Route component={NotFound}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authenticate: state.LoginReducer.authenticate,
        userType: state.LoginReducer.userType
    }
}
export default connect(mapStateToProps, null)(App);
