import React from 'react';

const SideBar = () => {
    return (
        <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="logo">
                <a href="https://www.creative-tim.com" className="simple-text logo-mini">
                </a>
                <a href="https://www.creative-tim.com" className="simple-text logo-normal">
                    Your Logo
                </a>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li className="active ">
                        <a href="a">
                            <i className="nc-icon nc-bank"></i>
                            <p>First Item</p>
                        </a>
                    </li>
                    <li>
                        <a href="a">
                            <i className="nc-icon nc-diamond" href='a'></i>
                            <p>Second Item</p>
                        </a>
                    </li>
                    <li>
                        <a href="a">
                            <i className="nc-icon nc-pin-3" href='a'></i>
                            <p>Third Item</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;