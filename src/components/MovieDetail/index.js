import React from 'react';
import {StyledMovieDetail} from "./styled";
import {getDetailMovieAPI} from "../../services/MovieDetail/action";
import {connect} from "react-redux";
import NavigationBar from "../NavigationBar";
import {Link} from "react-router-dom";

class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDetail: {},
        }
    }

    componentDidMount() {
        this.props.getDetailMovie(this.props.match.params.id)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            movieDetail: nextProps.movieDetail,
        });
    }

    renderShowTimes = () => {
        const {movieDetail} = this.state
        if (movieDetail.lichChieu) {
            return movieDetail.lichChieu.map((item) => {
                return (
                    <tr>
                        <td className='text-left'>{item.thongTinRap.tenCumRap}</td>
                        <td>{item.thongTinRap.tenRap}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                        <td>
                            <button className='btn btn-success'>
                                <Link style={{color: 'white'}} to={`/booking-seat/${item.maLichChieu}`}>
                                    Mua vé
                                </Link>
                            </button>
                        </td>
                    </tr>
                )
            })
        }
    }

    render() {
        let {movieDetail} = this.state;
        console.log(movieDetail)
        return (
            <StyledMovieDetail>
                <NavigationBar/>
                <div className='detail-wrapper'>
                    <div className={'container my-3'}>
                        <div className={'row detailMainInfo'}>
                            <div className={'col-6'}>
                                <img src={movieDetail.hinhAnh} alt=''/>
                            </div>
                            <div className={'col-6'}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-left">
                                        <b>Tên Phim: </b><span>{movieDetail.tenPhim}</span>
                                    </li>
                                    <li className="list-group-item text-left">
                                        <b>Ngày khởi chiếu: </b><span>{movieDetail.ngayKhoiChieu}</span>
                                    </li>
                                    <li className="list-group-item text-left">
                                        <b>Đánh giá: </b><span>{movieDetail.danhGia}</span>
                                    </li>
                                    <li className="list-group-item text-left">
                                        <b>Mô tả: </b><span>{movieDetail.moTa}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='detailDown'></div>
                    </div>
                    <div className='container'>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th className='text-left'>Cụm rạp</th>
                                <th>Tên rạp</th>
                                <th>Ngày chiếu</th>
                                <th>Giờ chiếu</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.renderShowTimes()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </StyledMovieDetail>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movieDetail: state.MovieDetailReducer.movieDetail
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetailMovie: (id) => {
            dispatch(getDetailMovieAPI(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);