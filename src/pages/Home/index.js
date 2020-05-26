import React from 'react';
import NavigationBar from "../../components/NavigationBar/";
import Banner from "../../components/Banner";
import NowShowingMovie from "../../components/NowShowingMovie";
import UpcomingMovie from "../../components/UpcomingMovie";
// import Footer from "../Footer";
function Home(props) {
    return (
        <div>
            <NavigationBar/>
            <Banner/>
            <NowShowingMovie/>
            <UpcomingMovie/>
            {/*<Footer/>*/}
        </div>
    );
}

export default Home;