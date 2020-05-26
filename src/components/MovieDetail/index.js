import React from 'react';
import {StyledMovieDetail} from "./styled";
import {getDetailMovieAPI} from "../../services/MovieDetail/action";
import {connect} from "react-redux";

class MovieDetail extends React.Component {
    componentDidMount() {
        console.log(this.props.match)
        this.props.getDetailMovie(this.props.match.params.id)
    }

    render() {
        let {movieDetail} = this.props;
        return (
            <StyledMovieDetail>
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