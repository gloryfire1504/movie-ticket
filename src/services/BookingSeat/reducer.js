import * as ActionTypes from './actionTypes'
let initialState = {
    thongTinPhim: {},
    danhSachGhe: []
}

const BookingSeatReducer = (state = initialState,action) => {
    switch (action.type) {
        case ActionTypes.GET_ROOM_TICKET:
            state = action.data
            return {...state}
        default:
            return {...state}
    }
}
export default BookingSeatReducer