import React from 'react';
import NavigationBar from "../../components/NavigationBar/";
import Banner from "../../components/Banner";
import ListMovie from "../../components/ListMovie";
import CinemaCluster from "../../components/CinemaCluster";
import Footer from "../../components/Footer";

// import {BackTop,Button} from 'antd'
class Home extends React.Component {
    componentDidMount() {
        // let nav = document.getElementById('navbar');
        // nav.style.display = 'none'
        setTimeout(() => {
            let myLoading = document.getElementById('myLoading')
            myLoading.style.display = 'none';
            // nav.style.display = 'fixed'
        }, 2000)
        // setTimeout(myLoading.style.display = 'none', 2000)
    }

    componentWillUnmount() {
        let myLoading = document.getElementById('myLoading')
        myLoading.style.display = 'flex'
    }

    // constructor(props) {
    //     super(props);
    //     this.myRef = React.createRef();
    // }
    //
    // componentDidMount() {
    //     console.log(this.myRef.current)
    //     // this.myRef.current.scrollTo(0,0);
    //     window.scrollTo(0, 0)
    // }

    render() {
        return (
            <div ref={this.myRef} id='home'>
                <NavigationBar/>
                <Banner/>
                <ListMovie/>
                <CinemaCluster/>
                <Footer/>
            </div>
        );
    }
}

export default Home;