

import {LOG_IN, LOG_OUT} from "./actionTypes";
// export const logIn = (data) => {
//     return (dispatch) => {
//         Axios({
//             method:"POST",
//             url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
//             data:data
//         })
//             .then((response) => {
//                 dispatch({
//                     type:LOG_IN,
//                     data:response.data,
//                 })
//             })
//             .catch((error) => {
//                 dispatch({
//                     type:ERROR,
//                     error:error.response
//                 })
//             })
//     }
// }
export const logOut = () => {
    return {
        type:LOG_OUT,
    }
}
export const logIn = (data) => {
    return {
        type:LOG_IN,
        data:data
    }
}


