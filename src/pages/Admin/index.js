import React, {Component} from 'react';
import Login from "../../components/Login";
import {StyledAdmin} from "./styled";

class Admin extends Component {
    render() {
        return (
            <StyledAdmin>
                <Login/>
            </StyledAdmin>
        );
    }
}

export default Admin;