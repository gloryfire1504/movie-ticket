import React from 'react';
import './App.css';
//COMPONENTS
// import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import Login from "./components/Login/";
import NotFound from "./components/NotFound";
//ROUTER
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routesHome} from "./routes";
//REDUX
import {connect} from 'react-redux'
import DashBoard from "./components/DashBoard";
import AdminLogin from "./components/AdminLogin";

class App extends React.Component {
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
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        {showMenuHome(routesHome)}
                        <Route path={'/login'} exact={false} component={Login}/>
                        <Route path={'/admin'} exact={true} component={AdminLogin}/>
                        <Route path={'/admin/dashboard'} exact={false}
                               component={authenticate && userType === 'QuanTri' ? DashBoard : NotFound}
                               render={(props) => {
                                   return <NavigationBar {...props}/>
                               }}
                        />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authenticate: state.AdminLoginReducer.authenticate,
        userType: state.AdminLoginReducer.userType
    }
}
export default connect(mapStateToProps, null)(App);
