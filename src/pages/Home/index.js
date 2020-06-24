import React from 'react';
import NavigationBar from "../../components/NavigationBar/";
import Banner from "../../components/Banner";
import ListMovie from "../../components/ListMovie";
import CinemaCluster from "../../components/CinemaCluster";
import Footer from "../../components/Footer";
function Home(props) {
    return (
        <div>
            <NavigationBar/>
            <Banner/>
            <ListMovie/>
            <CinemaCluster/>
            <Footer/>
        </div>
    );
}

export default Home;