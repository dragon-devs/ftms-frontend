import React, {Component, useEffect, useState} from 'react';
import axios from "axios";
import config from "../config.json"

const Matches = ({tournamentId, groupId}) => {
    const [matches, setMatches] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        // const API_URL = `${config.apiEndpoint}/${tournamentId}/groups/${groupId}/matches/`;
        const API_URL = `${config.apiEndpoint}/22/groups/62/matches/`;

        axios.get(API_URL)
            .then(response => {
                setMatches(response.data);
            })
            .catch(error => {
                console.error('Error fetching group clubs data:', error);
                setError('Error fetching group clubs. Please try again later.');
            });
    }, [tournamentId, groupId]);


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (matches.length === 0) {
        return <div>Loading...</div>;
    }

    {
        return (
            <div>
                {matches.map(match => (
                    <div className="p-2">
                        <div key={match.pk}
                             className="grid grid-cols-3 grid-rows-1 gap-1 p-4 px-3 place-items-center hover:ring-1 hover:ring-blue-600 ease-in duration-300 hover:bg-slate-900 transition-all drop-shadow-2xl rounded-lg bg-slate-800">
                            <div className="grid grid-cols-2 gap-1">
                                <img
                                    className="w-10 h-10 grid justify-self-end place-content-center drop-shadow-md shadow-blue-50"
                                    src={match.team_1.club_name.club_image} alt="Club Logo"/>
                                <span
                                    className="text-sm grid col-span-1 justify-self-start place-content-center text-slate-300">{match.team_1.club_name.club_name}</span>
                            </div>
                            <div
                                className="hover:drop-shadow-lg grid place-content-center font-bold text-md bg-green-100 rounded-full px-3 text-slate-900">{match.team_1_score} : {match.team_2_score}</div>
                            <div className="grid grid-cols-2 gap-1">
                                <span
                                    className="text-sm grid col-span-1 justify-self-end place-content-center text-slate-300">{match.team_2.club_name.club_name}</span>
                                <img
                                    className="w-10 h-10 grid justify-self-start place-content-center drop-shadow-md shadow-blue-50"
                                    src={match.team_2.club_name.club_image} alt="Club Logo"/>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Matches;