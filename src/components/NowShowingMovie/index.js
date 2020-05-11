import React from 'react';
import {NowShowing} from "./styled";

function NowShowingMovie(props) {
    return (
        <NowShowing>
            <h1>NOW SHOWING MOVIE</h1>
            <div className={"container"}>
                <div className={"row"}>
                </div>
            </div>
        </NowShowing>
    );
}

export default NowShowingMovie;