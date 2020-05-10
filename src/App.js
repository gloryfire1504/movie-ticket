import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import NowShowingMovie from "./components/NowShowingMovie";
import UpcomingMovie from "./components/UpcomingMovie";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <br/>
            <NowShowingMovie></NowShowingMovie>
            <br/>
            <UpcomingMovie></UpcomingMovie>
            <br/>
            <Footer>w</Footer>
        </div>
    );
}

export default App;
