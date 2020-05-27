import React from 'react';
import {StyledMovie} from "./styled";
import {Link} from "react-router-dom";
import { Row,Card, Col,Button,Rate} from "antd";

const {Meta,} = Card

function Movie(props) {
    let {movie} = props;
    console.log(movie)
    return (
        <StyledMovie>

            {/*<img className="card-img-top" src={movie.hinhAnh} alt=""/>*/}
            {/*<div className="card-body">*/}
            {/*    <h5 className="card-title">{movie.tenPhim}</h5>*/}
            {/*    <Link to={`/movie-detail/${movie.maPhim}`} className="btn btn-primary">Go somewhere</Link>*/}
            {/*</div>*/}
            <Row gutter={[24,24]} justify="center" align="middle">
                <Col span={6}>
                    <Card
                        className='mx-3'
                        hoverable
                        style={{width: 240}}
                        cover={<img style={{height:300}} alt="example" src={movie.hinhAnh}/>}
                    >
                        <Meta title={movie.tenPhim}/>
                        <Rate value={movie.danhGia}/>
                        <Link to={`/movie-detail/${movie.maPhim}`}>
                            <Button className='mt-2' type="primary" size={"middle"}>
                                Đặt vé
                            </Button>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </StyledMovie>
    );
}

export default Movie;