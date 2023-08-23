import React from 'react';
import UpComingMatches from "./upComingMatches";
import DevelopmentWarning from "./DevelopmentWarning";
import PreviousMatches from "./previousMatches";

const Home = () => {
    return (
        <div className="grid place-content-center ">
            <DevelopmentWarning/>
            <h2 className="text-slate-300 font-semibold p-2 pl-3">Upcoming Matches</h2>
            <UpComingMatches/>
            <h2 className="text-slate-300 font-semibold p-2 pl-3">Previous Matches</h2>
            <PreviousMatches/>

        </div>
    );
};

export default Home;
