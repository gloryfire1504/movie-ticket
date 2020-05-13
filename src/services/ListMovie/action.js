import * as ActionTypes from './actionTypes'
import Axios from "axios";

export const getListMovieAPI = () => {
    return (dispatch) => {
        Axios({
            method:"GET",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06",
        })
            .then((response) => {
                dispatch(getListMovie(response.data))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const getListMovie = (listMovie) => {
    return {
        type: ActionTypes.GET_LIST_MOVIE,
        data: listMovie,
    }
}
