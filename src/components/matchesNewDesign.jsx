import React, {Component, useEffect, useState} from 'react';
import axios from "axios";
import config from "../config.json"
import DateTimeFormating from "./formatingDateTime";
import MatchScore from "./isTeamWinnerScore";
import GroupTabsSkeleton from "./groupsSkeleton";

const MatchSkeleton = () => {
    return (
        <div>
            <div className="m-2 animate-pulse ">
                <div className="grid justify-center place-self-center grid-cols-3 gap-1 p-4 px-3
                            place-items-center hover:ring-1 hover:ring-blue-600 ease-in duration-300 hover:bg-slate-900
                            transition-all drop-shadow-2xl rounded-lg bg-slate-950">

                    <div
                        className="col-span-3 text-slate-300 justify-self-center place-self-start text-sm font-normal">
                        <div className="h-4 w-52 my-1 mb-3 bg-slate-700 rounded"></div>

                    </div>

                    <div className="grid justify-items-center gap-1">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <span className="text-sm font-thin text-slate-300">

                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>

                                </span>
                    </div>
                    <div className="grid justify-items-center justify-self-center place-self-end">
                        <div className="h-3 w-4 mt-2 bg-slate-700 rounded"></div>
                        <div className="h-5 w-16 mt-2 bg-slate-700 rounded"></div>
                        <div className="h-3 w-16 mt-2 bg-slate-700 rounded"></div>

                    </div>

                    <div className="grid justify-items-center gap-1">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <span className="text-sm font-thin text-slate-300">
                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>
                                </span>
                    </div>


                </div>
            </div>


            <div className="m-2 animate-pulse ">
                <div className="grid justify-center place-self-center grid-cols-3 gap-1 p-4 px-3
                            place-items-center hover:ring-1 hover:ring-blue-600 ease-in duration-300 hover:bg-slate-900
                            transition-all drop-shadow-2xl rounded-lg bg-slate-950">

                    <div
                        className="col-span-3 text-slate-300 justify-self-center place-self-start text-sm font-normal">
                        <div className="h-4 w-52 my-1 mb-3 bg-slate-700 rounded"></div>

                    </div>

                    <div className="grid justify-items-center gap-1">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <span className="text-sm font-thin text-slate-300">

                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>

                                </span>
                    </div>
                    <div className="grid justify-items-center justify-self-center place-self-end">
                        <div className="h-3 w-4 mt-2 bg-slate-700 rounded"></div>
                        <div className="h-5 w-16 mt-2 bg-slate-700 rounded"></div>
                        <div className="h-3 w-16 mt-2 bg-slate-700 rounded"></div>

                    </div>

                    <div className="grid justify-items-center gap-1">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <span className="text-sm font-thin text-slate-300">
                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>
                                </span>
                    </div>


                </div>
            </div>


            <div className="m-2 animate-pulse ">
                <div className="grid justify-center place-self-center grid-cols-3 gap-1 p-4 px-3
                            place-items-center hover:ring-1 hover:ring-blue-600 ease-in duration-300 hover:bg-slate-900
                            transition-all drop-shadow-2xl rounded-lg bg-slate-950">

                    <div
                        className="col-span-3 text-slate-300 justify-self-center place-self-start text-sm font-normal">
                        <div className="h-4 w-52 my-1 mb-3 bg-slate-700 rounded"></div>

                    </div>

                    <div className="grid justify-items-center gap-1">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <span className="text-sm font-thin text-slate-300">

                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>

                                </span>
                    </div>
                    <div className="grid justify-items-center justify-self-center place-self-end">
                        <div className="h-3 w-4 mt-2 bg-slate-700 rounded"></div>
                        <div className="h-5 w-16 mt-2 bg-slate-700 rounded"></div>
                        <div className="h-3 w-16 mt-2 bg-slate-700 rounded"></div>

                    </div>

                    <div className="grid justify-items-center gap-1">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <span className="text-sm font-thin text-slate-300">
                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>
                                </span>
                    </div>


                </div>
            </div>


            <div className="m-2 animate-pulse ">
                <div className="grid justify-center place-self-center grid-cols-3 gap-1 p-4 px-3
                            place-items-center hover:ring-1 hover:ring-blue-600 ease-in duration-300 hover:bg-slate-900
                            transition-all drop-shadow-2xl rounded-lg bg-slate-950">

                    <div
                        className="col-span-3 text-slate-300 justify-self-center place-self-start text-sm font-normal">
                        <div className="h-4 w-52 my-1 mb-3 bg-slate-700 rounded"></div>

                    </div>

                    <div className="grid justify-items-center gap-1">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <span className="text-sm font-thin text-slate-300">

                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>

                                </span>
                    </div>
                    <div className="grid justify-items-center justify-self-center place-self-end">
                        <div className="h-3 w-4 mt-2 bg-slate-700 rounded"></div>
                        <div className="h-5 w-16 mt-2 bg-slate-700 rounded"></div>
                        <div className="h-3 w-16 mt-2 bg-slate-700 rounded"></div>

                    </div>

                    <div className="grid justify-items-center gap-1">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <span className="text-sm font-thin text-slate-300">
                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>
                                </span>
                    </div>


                </div>
            </div>

        </div>)
}

const MatchesNew = ({tournamentId, groupId}) => {
    const [matches, setMatches] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Initialize loading to true

    const fetchData = () => {
        const API_URL = `${config.apiEndpoint}/${tournamentId}/groups/${groupId}/matches/`;

        axios.get(API_URL)
            .then(response => {
                setMatches(response.data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(error => {
                console.error('Error fetching Matches data:', error);
                setError('Error fetching Matches. Please try again later.');
                setLoading(false); // Set loading to false in case of an error
            });
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 5000); // Polling every 5 seconds (adjust as per your requirements)

        return () => {
            clearInterval(intervalId);
        };
    }, [tournamentId, groupId]);

    if (error) {
        return <div>Error: {error}</div>;
    }
    {
        return (
            <div>
                {loading && <MatchSkeleton/>}

                {!loading && matches.map(match => (
                    <div className="m-2 ">
                        <div key={match.pk}>
                            <div className="grid justify-center place-self-center grid-cols-3 gap-1 p-4 px-3
                            place-items-center hover:ring-1 hover:ring-blue-600 ease-in duration-300 hover:bg-slate-900
                            transition-all drop-shadow-2xl rounded-lg bg-slate-950">

                                <div
                                    className="col-span-3 text-slate-300 justify-self-center place-self-start text-sm font-normal">{match.tournament.tournament_name} -
                                    Group Stage
                                </div>

                                <div className="grid justify-items-center gap-1">
                                    <img className="w-14 h-14 drop-shadow-md shadow-blue-50"
                                         src={match.team_1.club_name.club_image} alt="Club Logo"/>
                                    <span
                                        className="text-sm font-thin text-slate-300">{match.team_1.club_name.club_name}</span>
                                </div>
                                <div className="grid justify-items-center justify-self-center place-self-end">
                                    {match.is_match_ended ? (
                                        <MatchScore match={match}/>
                                    ) : (
                                        <DateTimeFormating dateTimeStr={match.date}/>
                                    )}

                                </div>

                                <div className="grid justify-items-center gap-1">
                                    <img className="w-14 h-14 drop-shadow-md shadow-blue-50"
                                         src={match.team_2.club_name.club_image} alt="Club Logo"/>
                                    <span
                                        className="text-sm font-thin text-slate-300">{match.team_2.club_name.club_name}</span>
                                </div>


                            </div>

                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default MatchesNew;