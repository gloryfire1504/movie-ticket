import {StyledList} from "./styled";
import React from 'react';
import Movie from "./Movie";
import {connect} from 'react-redux'
import {getListMovieAPI} from "../../services/ListMovie/action";

class ListMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: [],
        }
    }

    componentDidMount() {
        this.props.getListMovie()
    }

    render() {

        let {listMovie} = this.props
        let elementMovie = listMovie.map((movie, index) => {
            return <Movie
                key={index}
                movie={movie}
                match={this.props.match}
            />
        })
        return (
            <StyledList>
                <div className='container'>
                    <div className='row'>
                        {elementMovie}
                    </div>
                </div>
            </StyledList>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listMovie: state.MovieReducer.listMovie
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListMovie: () => {
            dispatch(getListMovieAPI())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);