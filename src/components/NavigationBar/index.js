import React, {Component} from 'react';
import {NavLink, useRouteMatch} from "react-router-dom";
import {NavBar} from "./styled";
import LogResis from "./LogResis";
import Logout from "./Logout";
import {connect} from 'react-redux'

//CUSTOM LINK
const CustomLink = ({label, to, activeOnlyWhenExact}) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact,
    })
    return (
        <li className={match ? "nav-item " : 'nav-item'}>
            <NavLink
                activeClassName='activeNavLink'
                className="nav-link"
                exact
                to={to}
            >{label}
            </NavLink>
        </li>
    )
}

class NavigationBar extends Component {
    render() {
        const {authenticate} = this.props;
        return (
            <NavBar className="navbar navbar-expand-md bg-dark navbar-dark my-0">
                {/* Brand */}
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                {/* Toggler/collapsibe Button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"/>
                </button>
                {/* Navbar links */}
                <div className="collapse navbar-collapse " id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <CustomLink label={'Home'} to={'/'} activeOnlyWhenExact={true}></CustomLink>
                        {/*<li className="nav-item">*/}
                        {/*    <NavLink*/}
                        {/*        activeClassName={'activeNavLink'}*/}
                        {/*        className="nav-link"*/}
                        {/*        to="/list-movie"*/}
                        {/*    >Danh sách phim*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <a className="nav-link" href='#list-movie'>Danh sách phim</a>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName={'activeNavLink'}
                                className="nav-link"
                                to="/lich-chieu"
                            >Lịch Chiếu
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName={'activeNavLink'}
                                className="nav-link"
                                to="/cum-rap"
                            >Cụmrạp
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName={'activeNavLink'}
                                className="nav-link"
                                to="/tin-tuc"
                            >Tin tức
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName={'activeNavLink'}
                                className="nav-link"
                                to="/tin-tuc"
                            >Admin
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {authenticate && authenticate!==''? <Logout/> : <LogResis/>}
            </NavBar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authenticate: state.LoginReducer.authenticate,
        userType:state.LoginReducer.userType
    }
}

export default connect(mapStateToProps, null)(NavigationBar);