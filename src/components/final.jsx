import React, {Component, useEffect, useState} from 'react';
import axios from "axios";
import config from "../config.json"
import DateTimeFormating from "./formatingDateTime";
import MatchScore from "./isTeamWinnerScore";
import {QualifyMatchBracket} from "./qualifyMatch";
import {TrophyIcon} from "@heroicons/react/24/solid";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/20/solid";


const Final = ({tournamentId}) => {
    const [matches, setMatches] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Initialize loading to true

    const fetchData = () => {
        const API_URL = `${config.apiEndpoint}/${tournamentId}/final`;

        axios.get(API_URL)
            .then(response => {
                console.log(response.data)
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
        const intervalId = setInterval(fetchData, 10000); // Polling every 5 seconds (adjust as per your requirements)

        return () => {
            clearInterval(intervalId);
        };
    }, [tournamentId]);

    if (error) {
        return <div>Error: {error}</div>;
    }
    const uniqueTournamentNames = [...new Set(matches.map((match) => match.tournament.tournament_name))];


    return (
        <div className="  ">
            <div className="grid place-items-stretch">
                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button className="">
                                <span>
                                    <div>
                                        {uniqueTournamentNames.map((tournamentName) => (
                                            <div key={tournamentName}
                                                 className="bg-slate-700 text-[15px] gap-2 p-2 flex drop-shadow-xl place-items-center place-content-center font-semibold text-slate-300">
                                                <div className="font-semibold text-[12px]">
                                                    {tournamentName.toUpperCase()}
                                                </div>
                                                <div
                                                    className="bg-amber-300 px-2 text-[10px] drop-shadow-lg font-bold text-slate-900 rounded-xl flex gap-1 place-content-center place-items-center">
                                                    FINAL<TrophyIcon className="w-3 h-3"/>
                                                </div>
                                                <ChevronUpIcon
                                                    className={`${
                                                        open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-slate-300`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </span>

                            </Disclosure.Button>
                            <Disclosure.Panel className="overflow-y-hidden">
                                <div className="overflow-x-hidden bg-slate-900">


                                    <div className="grid place-items-center">
                                        {matches.map((match) => (

                                            <div
                                                className="p-2 rounded-xl mt-3 transition-all drop-shadow-xl  bg-slate-950 ring-blue-800 bg-opacity-20 hover:bg-opacity-100   duration-400 ">
                                                {match.is_match_ended && match.team1_score > match.team2_score ? (
                                                    <div className="gap-2 ">
                                                        <div
                                                            className="text-sm font-bold text-slate-400 flex place-content-center bg-slate-800 p-1.5 mb-2 rounded-xl">FULL-TIME
                                                        </div>
                                                        <div
                                                            className="group bg-blue-700 p-2 w-60 grid hover:bg-blue-700 rounded-xl">
                                                            <div
                                                                className="grid grid-cols-5 gap-3 place-items-center text-sm font-semibold">
                                                                <img
                                                                    className="w-8 h-8 drop-shadow-md shadow-blue-50 col-span-1"
                                                                    src={match.team1.team.club_name.club_image}
                                                                    alt="ClubLogo"/>
                                                                <div
                                                                    className="col-span-3 text-slate-300 justify-self-start">{match.team1.team.club_name.club_name}</div>
                                                                <div
                                                                    className="font-black text-2xl gap-2 grid col-span-1  justify-items-end text-slate-300">
                                                                    <div className="">
                                                                        <div
                                                                            className="text-slate-200 place-content-end">{match.team1_score}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="group bg-slate-900 mt-2 text-slate-600 p-2 w-60 grid rounded-xl">
                                                            <div
                                                                className="grid grid-cols-5 gap-3 place-items-center text-sm font-semibold">
                                                                <img
                                                                    className="w-8 h-8 opacity-40 drop-shadow-md shadow-blue-50 col-span-1"
                                                                    src={match.team2.team.club_name.club_image}
                                                                    alt="ClubLogo"/>
                                                                <div
                                                                    className="col-span-3 justify-self-start">{match.team2.team.club_name.club_name}</div>
                                                                <div
                                                                    className="font-black text-slate-600 text-2xl gap-2 grid col-span-1 justify-items-end text-slate-300">
                                                                    <div
                                                                        className=" place-content-end">{match.team2_score}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="gap-2 ">
                                                        <div
                                                            className="text-sm font-bold text-slate-400 flex place-content-center bg-slate-800 p-1.5 mb-2 rounded-xl">FULL-TIME
                                                        </div>

                                                        <div
                                                            className="group bg-slate-900 text-slate-600 p-2 w-60 grid rounded-xl">
                                                            <div
                                                                className="grid grid-cols-5 gap-3 place-items-center text-sm font-semibold">
                                                                <img
                                                                    className="w-8 h-8 opacity-40 drop-shadow-md shadow-blue-50 col-span-1"
                                                                    src={match.team1.team.club_name.club_image}
                                                                    alt="ClubLogo"/>
                                                                <div
                                                                    className="col-span-3 justify-self-start">{match.team1.team.club_name.club_name}</div>
                                                                <div
                                                                    className="font-black text-slate-600 text-2xl gap-2 grid col-span-1 justify-items-end text-slate-300">
                                                                    <div
                                                                        className=" place-content-end">{match.team1_score}</div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div
                                                            className="group bg-blue-700 p-2 w-60 grid hover:bg-blue-700 rounded-xl  mt-2">
                                                            <div
                                                                className="grid grid-cols-5  gap-3 place-items-center text-sm font-semibold">
                                                                <img
                                                                    className="w-8 h-8 drop-shadow-md shadow-blue-50 col-span-1"
                                                                    src={match.team2.team.club_name.club_image}
                                                                    alt="ClubLogo"/>
                                                                <div
                                                                    className="col-span-3 text-slate-300 justify-self-start">{match.team2.team.club_name.club_name}</div>
                                                                <div
                                                                    className="font-black text-2xl gap-2 grid col-span-1  justify-items-end text-slate-300">
                                                                    <div className="">
                                                                        <div
                                                                            className="text-slate-200 place-content-end">{match.team2_score}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        ))}
                                    </div>


                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )

}

export default Final;