import React from 'react';
import Banner from "../Banner";
import NowShowingMovie from "../NowShowingMovie";
import UpcomingMovie from "../UpcomingMovie";
import Footer from "../Footer";
function Home(props) {
    return (
        <div>
            <Banner/>
            <NowShowingMovie/>
            <UpcomingMovie/>
            <Footer/>
        </div>
    );
}

export default Home;