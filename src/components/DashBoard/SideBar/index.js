import React from 'react';
import {Button} from "antd";
import {withRouter} from 'react-router-dom'

class SideBar extends React.Component {
    handleBack = () => {
        console.log(this.props)
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="sidebar" data-color="white" data-active-color="danger">
                <div className="logo">
                    <Button onClick={() => {
                        this.handleBack()
                    }} type="danger">Go back</Button>
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
                                <i className="nc-icon nc-diamond"></i>
                                <p>Second Item</p>
                            </a>
                        </li>
                        <li>
                            <a href="a">
                                <i className="nc-icon nc-pin-3"></i>
                                <p>Third Item</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(SideBar);