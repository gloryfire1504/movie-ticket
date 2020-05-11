import {StyledList} from "./styled";
import React from 'react';
import Movie from "./Movie";

function ListMovie(props) {
    return (
        <StyledList>
            <h1>LIST MOVIE NE</h1>
            <Movie/>
        </StyledList>
    );
}

export default ListMovie;