import React, {Component} from 'react';
import {StyledDashBoard} from "./styled";
import './styled.css'
import SideBar from './SideBar'
import MainPanel from "./MainPanel";


class DashBoard extends Component {
    render() {
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

export default DashBoard;