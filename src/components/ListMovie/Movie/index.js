import React from 'react';
import {StyledMovie} from "./styled";
import {Link} from "react-router-dom";
import {Card, Col, Button, Rate} from "antd";

const {Meta,} = Card;
function Movie(props) {
    let {movie} = props;
    console.log(movie)
    return (
        <Col span={6}>
            <StyledMovie>
                <Card
                    className='mx-3'
                    hoverable
                    style={{width: 240}}
                    cover={<img
                        style={{height: 300}}
                        alt="example" src={movie.hinhAnh}/>}
                >
                    <Meta title={movie.tenPhim}/>
                    <Rate disabled value={movie.danhGia}/>
                    <Link to={`/movie-detail/${movie.maPhim}`}>
                        <Button className='mt-2' type="primary" size={"middle"}>
                            Đặt vé
                        </Button>
                    </Link>
                </Card>
            </StyledMovie>
        </Col>

    );
}

export default Movie;