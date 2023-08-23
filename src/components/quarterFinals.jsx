import React, {Component, useEffect, useState} from 'react';
import axios from "axios";
import config from "../config.json"
import DateTimeFormating from "./formatingDateTime";
import MatchScore from "./isTeamWinnerScore";
import {QualifyMatchBracket} from "./qualifyMatch";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/20/solid";


const QuarterFinals = ({tournamentId}) => {
    const [matches, setMatches] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Initialize loading to true

    const fetchData = () => {
        const API_URL = `${config.apiEndpoint}/${tournamentId}/quarterfinals`;

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
                                                    className="bg-fuchsia-300 px-2 text-[10px] drop-shadow-lg font-bold text-slate-900 rounded-xl">
                                                    QUARTER-FINALS
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
                                    <QualifyMatchBracket matches={matches} tournamentId={tournamentId}/>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )

}

export default QuarterFinals;