import React, {Component} from 'react';
import {StyledCinemaCluster} from "./styled";
import {Row, Col} from 'antd'
import {connect} from "react-redux";
import {getCinemaClusterInfoAPI, getCinemaInfoAPI} from "../../services/CinemaCluster/action";

class CinemaCluster extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.getCinemaClusterInfo()

    }

    handleOnclickCinemaCluster = (maHeThongRap) => {
        this.props.getCinemaInfo(maHeThongRap);
    }
    handleOnclickCinema = (maCumRap) => {
    }
    //Render thong tin cum rap
    renderCinemaClusterInfoList = () => {
        let {cinemaClusterInfoList} = this.props;
        const eleCinemaCluster = cinemaClusterInfoList.map((item, index) => {
            return (

                <a onClick={() => {
                    this.handleOnclickCinemaCluster(item.maHeThongRap)
                }}
                   style={{cursor: 'pointer'}}
                   className={`h-100 d-flex justify-content-start align-items-center list-group-item list-group-item-action`}>
                    <img className='cluster-logo' src={item.logo} alt=''/>
                    <span className='ml-3'>{item.tenHeThongRap}</span>
                </a>
            )
        })
        return eleCinemaCluster;
    }
    //END Render thong tin cum rap
    //Render thong tin rap
    renderCinemaInfoList = () => {
        const {cinemaInfoList} = this.props;
        const eleCinema = cinemaInfoList.map((item) => {
            console.log(item)
            return (
                <li onClick={() => {
                    this.handleOnclickCinema(item.maCumRap)
                }} style={{cursor: "pointer"}} className="text-left list-group-item list-group-item-action">
                    <div>
                        <b>Tên cụm rạp: </b><span>{item.tenCumRap}</span>
                    </div>
                    <div>
                        <b>Địa chỉ: </b><span>{item.diaChi}</span>
                    </div>
                </li>
            )
        })
        return eleCinema;
    }
    //END Render thong tin rap

    render() {
        return (
            <StyledCinemaCluster>
                <div className='h-100 container-cinema-cluster container'>
                    <Row>
                        <Col span={6}>
                            <ul className="list-group">
                                {this.renderCinemaClusterInfoList()}
                            </ul>
                        </Col>
                        <Col span={18}>
                            <ul className="list-group">
                                {this.renderCinemaInfoList()}
                            </ul>
                        </Col>
                    </Row>
                </div>
            </StyledCinemaCluster>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cinemaClusterInfoList: state.CinemaClusterReducer.cinemaClusterInfo,
        cinemaInfoList: state.CinemaClusterReducer.cinemaInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCinemaClusterInfo: () => {
            dispatch(getCinemaClusterInfoAPI())
        },
        getCinemaInfo: (maHeThongRap) => {
            dispatch(getCinemaInfoAPI(maHeThongRap))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CinemaCluster);