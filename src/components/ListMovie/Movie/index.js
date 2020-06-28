import React from 'react';
import {StyledMovie} from "./styled";
import {Link} from "react-router-dom";
import {Card, Col, Button, Rate} from "antd";
// import {UnorderedListOutlined,} from '@ant-design/icons';

const {Meta,} = Card;

class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isHover: false,
        }
    }

    handleHover = () => {
        this.setState({
            isHover: !this.state.isHover,
            // isHover: true,
        })
    }


    render() {
        let {movie} = this.props;
        let {isHover} = this.state;
        return (
            <Col span={6}>
                <StyledMovie>
                    <div onMouseEnter={this.handleHover}
                         onMouseLeave={this.handleHover}>
                        <Card
                            className='movie-card mx-3'
                            hoverable
                            style={{width: 240}}
                            cover={<img
                                style={{height: 300}}
                                alt="example" src={movie.hinhAnh}/>}
                        >
                            {
                                (isHover)
                                    ?
                                    <div>
                                        <Link to={`/movie-detail/${movie.maPhim}`}>
                                            <div className='p-2 d-flex justify-content-center'>
                                                <Button
                                                    className='w-100 d-flex justify-content-center align-items-center'
                                                    type="danger" size={"large"}>
                                                    Đặt vé
                                                </Button>
                                            </div>
                                        </Link>
                                    </div>
                                    :
                                    <div
                                        className='d-flex flex-column movie-card-detail'>
                                        <Meta title={movie.tenPhim}/>
                                        <Rate style={{fontSize: '15px', padding: "10px 0"}} className='movie-rate'
                                              disabled
                                              value={movie.danhGia}/>
                                    </div>

                            }


                        </Card>
                    </div>

                </StyledMovie>
            </Col>

        );
    }
}

export default Movie;