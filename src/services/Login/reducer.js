import {ERROR, LOG_IN, LOG_OUT} from "../Login/actionTypes";
import jwtDecode from 'jwt-decode';

let initialState = {
    user: {},
    authenticate: false,
    userType: '',
    error:{}
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            localStorage.setItem('auth', JSON.stringify(action.data));
            return {
                user: jwtDecode(action.data.accessToken),
                authenticate: true,
                userType: action.data.maLoaiNguoiDung
            }
        case LOG_OUT:
            localStorage.removeItem('auth')
            return {
                user:{},
                authenticate: false,
                userType: ''
            }
        case ERROR:
            state.error = action.error
            return {
                ...state
            }
        default:
            return {...state}
    }
}
export default LoginReducer