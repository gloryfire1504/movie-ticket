import {StyledList} from "./styled";
import React from 'react';
import Movie from "./Movie";
import {connect} from 'react-redux'
import {getListMovieAPI} from "../../services/ListMovie/action";
import {Tabs, Row} from "antd"

const {TabPane} = Tabs

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
            <StyledList id='list-movie'>
                <Tabs size='large'
                      tabBarStyle={{border:"none"}}
                      animated={false}
                >
                    <TabPane tab='Phim đang chiếu' key='1'
                    >
                        <div className='container'>
                            <Row gutter={[24, 24]}
                                 justify="center"
                                 align="middle">
                                {elementMovie}
                            </Row>
                        </div>
                    </TabPane>
                    <TabPane tab='Phim sắp chiếu' key='2'>
                        <div className='container'>
                            <Row gutter={[24, 24]}
                                 justify="center"
                                 align="middle">
                                {elementMovie}
                            </Row>
                        </div>
                    </TabPane>
                </Tabs>

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