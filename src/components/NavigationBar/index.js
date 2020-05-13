import React, {Component} from 'react';
import {NavLink, useRouteMatch} from "react-router-dom";
import {NavBar} from "./styled";

//CUSTOM LINK
const CustomLink = ({label, to, activeOnlyWhenExact}) => {
    let match = useRouteMatch({
        path:to,
        exact:activeOnlyWhenExact,
    })
    return (
        <li className={match ? "nav-item " :'nav-item'}>
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
        return (
            <NavBar className="navbar navbar-expand-md bg-dark navbar-dark">
                {/* Brand */}
                <NavLink  className="navbar-brand" to="/">Navbar</NavLink>
                {/* Toggler/collapsibe Button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"/>
                </button>
                {/* Navbar links */}
                <div className="collapse navbar-collapse " id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {/*<li className="nav-item">*/}
                        {/*    <NavLink*/}
                        {/*        activeClassName='activeNavLink'*/}
                        {/*        className="nav-link"*/}
                        {/*        exact*/}
                        {/*        to="/"*/}
                        {/*    >Home*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                        <CustomLink label={'Home'} to={'/'} activeOnlyWhenExact={true}></CustomLink>
                        <li className="nav-item">
                            <NavLink
                                activeClassName={'activeNavLink'}
                                className="nav-link"
                                to="/list-movie"
                            >Danh sách phim
                            </NavLink>
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
                    </ul>
                </div>
                <div className="row align-items-center justify-content-between navbar-secondary">
                    <a className={'row'} href="b">
                        <i className="fa fa-user-circle"></i>
                        <span >Đăng nhập</span>
                    </a>
                    <a className={'mx-4'} href="a">
                        <span>Đăng ký</span>
                    </a>
                </div>
            </NavBar>
        );
    }
}

export default NavigationBar;