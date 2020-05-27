import React, {Component} from 'react';
import {StyledDashBoard} from "./styled";
import './styled.css'
import SideBar from './SideBar'
import MainPanel from "./MainPanel";
import {withRouter} from 'react-router-dom'


class DashBoard extends Component {

    render() {
        console.log(this.props)
        return (
            <StyledDashBoard>
                <div className="wrapper ">
                    <SideBar/>
                    <MainPanel/>
                </div>
            </StyledDashBoard>
        );
    }
}

export default withRouter(DashBoard);