import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {Button} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {StyledLogResis} from "./styled";

class LogResis extends Component {
    handleOnClick = () => {

    }

    render() {
        return (
            <StyledLogResis >
                <div className="row align-items-center justify-content-between navbar-secondary">
                    <Link to='/login'>
                        <Button type="primary" shape="round" icon={<UserOutlined/>} size={"large"}>
                            Đăng nhập
                        </Button>
                    </Link>
                    <Link to='/register'>
                        <Button className='ml-2' type="primary" shape="round" size={"large"}>
                            Đăng ký
                        </Button>
                    </Link>
                </div>
            </StyledLogResis>
        );
    }
}

export default connect(null, null)(LogResis);