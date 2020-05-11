import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {NavBar} from "./styled";

class NavigationBar extends Component {
    render() {
        return (
            <NavBar className="navbar navbar-expand-md bg-dark navbar-dark">
                {/* Brand */}
                <Link className="navbar-brand" to="/home">Navbar</Link>
                {/* Toggler/collapsibe Button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"/>
                </button>
                {/* Navbar links */}
                <div className="collapse navbar-collapse " id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/list-movie">Danh sách phim</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Lịch Chiếu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Cụm rạp</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Tin tức</Link>
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