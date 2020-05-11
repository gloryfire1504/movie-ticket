import React from 'react';
import Banner from "../Banner";
import NowShowingMovie from "../NowShowingMovie";
import UpcomingMovie from "../UpcomingMovie";
function Home(props) {
    return (
        <div>
            <Banner/>
            <NowShowingMovie/>
            <UpcomingMovie/>
        </div>
    );
}

export default Home;