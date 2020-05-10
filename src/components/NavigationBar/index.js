import React, {Component} from 'react';
import {NavBar} from "./styled";

class NavigationBar extends Component {
    render() {
        return (
            <NavBar className="navbar navbar-expand-md bg-dark navbar-dark">
                {/* Brand */}
                <a className="navbar-brand" href="#">Navbar</a>
                {/* Toggler/collapsibe Button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"/>
                </button>
                {/* Navbar links */}
                <div className="collapse navbar-collapse " id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Danh sách phim</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Lịch Chiếu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cụm rạp</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tin tức</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-secondary">
                    <a href="#">
                        <img src="../../assets/images/no-avatar-png-2-transparent.png" alt="a"/>
                        <span>Đăng nhập</span>
                    </a>
                </div>
            </NavBar>
        );
    }
}

export default NavigationBar;