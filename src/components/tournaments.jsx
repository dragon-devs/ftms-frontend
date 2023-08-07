import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from "./table";
import Matches from "./matches";
import Groups from "./groups";
import config from "../config.json"


const TournamentDetails = () => {
    const [tournaments, setTournaments] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        // const API_URL = 'http://192.168.10.6:8000/tournaments/';

        axios.get(config.apiEndpoint)
            .then(response => {
                setTournaments(response.data);
            })
            .catch(error => {
                console.error('Error fetching tournaments data:', error);
                setError('Error fetching tournaments. Please try again later.', error);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (tournaments.length === 0) {


        return <div>Loading...</div>;
    }

    const handleGet = tournament => {
        try {
            // await axios.delete(apiEndpoint + "/" + post.id);
            const tournament_id = tournaments.filter(t => t.id === tournament.id);
            axios.get(config.apiEndpoint + tournament.id + '/groups')
                .then(response => {
                    setTournaments(response.data);
                })

            setTournaments(tournament_id)

        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                alert("Can't get the tournament.");

        }
    }
    return (
        <div className="bg-slate-900">
            <h2 className="grid justify-center font-bold uppercase p-3 drop-shadow-lg text-slate-300">Tournaments</h2>
            <div className="grid justify-center">
                <div className="grid grid-rows-1 max-w-auto grid-cols-1 p-3 bg-slate-900 gap-3 border-1 text-slate-300">
                    {tournaments.map(tournament => (
                        <div className="">
                            <div key={tournament.pk} onClick={() => handleGet(tournament)}
                                 className="bg-gray-800 grid gap-2 grid-cols-2 hover:bg-slate-900 hover:ring-2 hover:shadow-blue-500 hover:drop-shadow-lg ring-blue-800 transition-all ease-out duration-500 p-6 rounded-xl drop-shadow-lg shadow-blue-900">


                                <div className="p-1 pt-0 pb-1 col-span-2 font-semibold text-md text-blue-400">
                                    <div className="font-medium text-[10px] font-sans text-gray-600 ">NAME</div>
                                    {tournament.tournament_name}</div>

                                <div className="p-1 pt-0 pb-3 font-semibold text-xs text-blue-400">
                                    <div className="font-medium text-[10px] font-sans text-gray-600">TYPE</div>
                                    {tournament.tournament_type_display}</div>

                                <div className="p-1 pt-0 pb-3 font-semibold text-xs text-blue-400">
                                    <div className="font-medium text-[10px] font-sans text-gray-600">TEAMS</div>
                                    {tournament.teams_selection_display}</div>

                                <div className="p-1 pt-0 pb-3 font-semibold text-xs text-blue-400">
                                    <div className="font-medium text-[10px] font-sans text-gray-600">STAGE</div>
                                    {tournament.current_stage_display}</div>

                                <div className="p-1 pt-0 pb-3 font-semibold text-xs text-blue-400">
                                    <div className="font-medium text-[10px] font-sans text-gray-600">CHAMPION</div>
                                    {tournament.champion ? (
                                        <div className="flex">
                                            <div className="pr-1">{tournament.champion.club_name}</div>
                                            <img className="w-5 h-5 drop-shadow-md shadow-blue-50"
                                                 src={tournament.champion.club_image} alt=""/>

                                        </div>
                                    ) : (
                                        <div>No Champion</div>
                                    )}</div>


                            </div>
                            {/* Add more details as needed */}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default TournamentDetails;
