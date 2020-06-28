import React, {Component} from 'react';
import {connect} from "react-redux";
import {actgetRoomTicketAPI} from "../../services/BookingSeat/action";
import SeatRow from "./SeatRow";
import {StyledBookingSeat} from "./styled";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import WrapperImage from '../../assets/images/Banner/banner.jpg'
import {logOut} from "../../services/Login/action";

class BookingSeat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderedTicket:{}
        }
    }

    componentDidMount() {
        setTimeout(() => {
            let myLoading = document.getElementById('myLoading')
            myLoading.style.display = 'none';
            this.setState({
                isLoadingScreen: false
            })
        }, 2000)

        const {maLichChieu} = this.props.match.params;
        this.props.getRoomTicket(maLichChieu)
    }


    componentWillUnmount() {
        let myLoading = document.getElementById('myLoading')
        myLoading.style.display = 'flex'
    }

    setOrderedTicket = (state) => {
        this.setState({
            orderedTicket:state
        }, () => {
            console.log(this.state.orderedTicket)
        })
    }

    render() {
        let {tenPhim, tenCumRap, diaChi, tenRap, ngayChieu, gioChieu} = this.props.filmDetail
        const orderedTicket = {}
        return (
            <StyledBookingSeat>
                <NavigationBar/>
                <div style={{backgroundImage: `url(${WrapperImage})`}}
                     className='wrapper'>
                    <h1>Movie Seat Selection</h1>
                    <div className="container">
                        <div className="mseat-reg row flex-column">
                            <div className='detail-holder'>
                                <div className={'seat-film-detail'}>
                                    <div>
                                        img
                                    </div>
                                    <div>
                                        <ul className="text-left list-group">
                                            <li className="list-group-item">
                                                <b>Tên phim: </b><span>{tenPhim}</span>
                                            </li>
                                            <li className="list-group-item">
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <b>Tên cụm rạp: </b><span>{tenCumRap}</span>
                                                    </div>
                                                    <div className='col-6'>
                                                        <b>Địa chi: </b><span>{diaChi}</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <b>Tên rạp: </b><span>{tenRap}</span>
                                            </li>
                                            <li className="list-group-item">
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <b>Ngày chiếu: </b><span>{ngayChieu}</span>
                                                    </div>
                                                    <div className='col-6'>
                                                        <b>Giờ chiếu: </b><span>{gioChieu}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul className="seat_mbt">
                                <li className="smallBox greenBox">Selected Seat</li>
                                <li className="smallBox redBox">Booked Seat</li>
                                <li className="smallBox emptyBox">Empty Seat</li>
                            </ul>
                            <div className="seatStructure text-center" style={{overflowX: "auto"}}>
                                <div className="screen">
                                    <h2 className="wthree">Screen this way</h2>
                                </div>
                                <div>
                                    <table id="seatsBlock" className='w-100'>
                                        <thead>
                                        <tr className='column-number'>
                                            <td></td>
                                            <td>A</td>
                                            <td>B</td>
                                            <td>C</td>
                                            <td>D</td>
                                            <td>E</td>
                                            <td>F</td>
                                            <td>G</td>
                                            <td>H</td>
                                            <td>I</td>
                                            <td>J</td>
                                            <td>K</td>
                                            <td>L</td>
                                            <td>M</td>
                                            <td>N</td>
                                            <td>O</td>
                                            <td>P</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <SeatRow orderedTicket={this.setOrderedTicket}/>

                                        </tbody>
                                    </table>
                                </div>

                                <button onSubmit={this.handleSubmit} type="submit" className="btn btn-success my-3">Xác nhận đặt vé</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </StyledBookingSeat>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filmDetail: state.BookingSeatReducer.thongTinPhim,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRoomTicket: (roomTicketCode) => {
            dispatch(actgetRoomTicketAPI(roomTicketCode))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingSeat);