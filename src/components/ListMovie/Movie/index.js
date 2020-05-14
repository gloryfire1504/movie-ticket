import React from 'react';
import {StyledMovie} from "./styled";
import {Link} from "react-router-dom";

function Movie(props) {
    let {movie} = props;
    return (
        <StyledMovie className="card col-3">
            <img className="card-img-top" src={movie.hinhAnh} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{movie.tenPhim}</h5>
                <Link to={`/movie-detail/${movie.maPhim}`} className="btn btn-primary">Go somewhere</Link>
            </div>
        </StyledMovie>
    );
}

export default Movie;