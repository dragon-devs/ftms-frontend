import React, {Component} from 'react';
import RoundOf16 from "./roundOf16";
import QuarterFinals from "./quarterFinals";
import SemiFinals from "./semiFinals";
import Final from "./final";
import RoundOf32 from "./roundOf32";

const TestBrackets = ({tournamentId}) => {


    return (
        <div className="grid">
            <RoundOf32 tournamentId={tournamentId}/>
            <RoundOf16 tournamentId={tournamentId}/>
            <QuarterFinals tournamentId={tournamentId}/>
            <SemiFinals tournamentId={tournamentId}/>
            <Final tournamentId={tournamentId}/>
        </div>
    );
}


export default TestBrackets;