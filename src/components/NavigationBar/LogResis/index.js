import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {Button} from "antd";
import {UserOutlined} from "@ant-design/icons";


class LogResis extends Component {
    handleOnClick = () => {

    }

    render() {
        return (
            <div className="row align-items-center justify-content-between navbar-secondary">
                <Link className={'row'} to='/admin'>
                    <Button type="primary" shape="round" icon={<UserOutlined/>} size={"large"}>
                        Đăng nhập
                    </Button>
                </Link>
                <a className={'mx-4'} href="a">
                    <Button type="primary" shape="round"  size={"large"}>
                        Đăng ký
                    </Button>
                </a>
            </div>
        );
    }
}

export default connect(null, null)(LogResis);