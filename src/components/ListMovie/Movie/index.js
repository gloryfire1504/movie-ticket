import React from 'react';
import {StyledMovie} from "./styled";

function Movie(props) {
    let {movie} = props;
    return (
        <StyledMovie className="card col-3">
            <img className="card-img-top" src={movie.hinhAnh} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{movie.tenPhim}</h5>
                <a href="a" className="btn btn-primary">Go somewhere</a>
            </div>
        </StyledMovie>
    );
}

export default Movie;