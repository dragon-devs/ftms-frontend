import logo from './logo.svg';
import './App.css';
import Example from "./components/gettingGroupTabs";
import NewTournamentForm from "./components/ftms";
import {Box, Component} from "./components/new";
import Testing from "./components/testing";
import Figma from "./components/figma";
import Index from "./components";
import Tournaments from "./components/tournaments";
import Matches from "./components/matches";
import ClubsDetails from "./components/teams";
import TournamentDetails from "./components/tournamentGroups";
import MatchesNew from "./components/matchesNewDesign";
import YourComponent from "./components/formatingDateTime";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Skeletontest from "./components/skeletontest";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TournamentDetails/>}/>
                <Route path="/teams" element={<ClubsDetails/>}/>
                <Route path="/new" element={<NewTournamentForm/>}/>
                <Route path="/tabs" element={<Example/>}/>
                <Route path="/skel" element={<Skeletontest/>}/>
            </Routes>
        </Router>


    );
}

export default App;
