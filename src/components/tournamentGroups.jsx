import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Group from "./groupsByTournamentId";
import config from "../config.json"
import {ChevronDoubleLeftIcon, TrophyIcon, XCircleIcon} from "@heroicons/react/24/solid";
import GetGroups from "./gettingGroupTabs";
import TournamentCardSkeleton from "./TournamentSkeleton";
import {ExclamationCircleIcon, QuestionMarkCircleIcon} from "@heroicons/react/20/solid";


const TournamentDetails = () => {
    const [tournaments, setTournaments] = useState([]);
    const [selectedTournament, setSelectedTournament] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    function hideErrorContainer() {
        const errorContainer = document.getElementById('error-container');
        errorContainer.style.display = 'none';
    }

    useEffect(() => {
        // Simulate data fetching with a delay
        const fetchDataWithDelay = async () => {
            try {
                // Simulate a delay of 2 seconds before fetching data
                await new Promise(resolve => setTimeout(resolve, 0));
                const response = await axios.get(config.apiEndpoint);
                setTournaments(response.data);
                setLoading(false); // Set loading to false after data is fetched

            } catch (error) {
                console.error('Error fetching tournaments data:', error);
                setError('Error fetching tournaments. Please try again later.');
                setLoading(false); // Set loading to false in case of an error

            }

        };

        fetchDataWithDelay();
    }, []);

    const handleGet = tournament => {
        setSelectedTournament(tournament);
    }

    const handleBackToTournaments = () => {
        setSelectedTournament(null);
    }

    if (error) {
        return (
            <div className="bg-slate-900 grid grid-rows-6 text-slate-300">
                <div className="grid justify-center m-5">
                    <div id="error-container" className="transition-all bg-red-200 flex gap-2 p-6  rounded-xl">
                        <XCircleIcon className="h-6 w-6 text-red-500" id="error-svg"/>
                        <div id="error-message" className="text-red-500">{error}</div>
                    </div>
                    <div className="p-3">
                        <h2 className="grid justify-center font-bold uppercase p-3 drop-shadow-lg text-slate-300">Tournaments</h2>

                        <TournamentCardSkeleton/>
                        <TournamentCardSkeleton/>
                        <TournamentCardSkeleton/>
                        <TournamentCardSkeleton/>
                        <TournamentCardSkeleton/>
                    </div>

                </div>
            </div>
        );
    }

    if (loading) {
        // Show the loading skeleton while data is being fetched
        return (
            <div className="bg-slate-900 text-slate-300">
                <div className="grid justify-center p-3">
                    <h2 className="grid justify-center font-bold uppercase p-3 drop-shadow-lg text-slate-300">Tournaments</h2>

                    <TournamentCardSkeleton/>
                    <TournamentCardSkeleton/>
                    <TournamentCardSkeleton/>
                    <TournamentCardSkeleton/>
                    <TournamentCardSkeleton/>
                </div>
            </div>
        );
    }

    if (tournaments.length === 0) {
        return <div>No tournaments found.</div>;
    }

    return (
        <div className="bg-slate-900 text-slate-300">
            <div className="grid justify-center">
                <div id="error-container"
                     className=" animate-pulse decoration-2 mt-6 place-items-center place-self-center h-auto w-72 transition-all bg-amber-100 flex gap-2 p-6 rounded-xl">
                    <ExclamationCircleIcon className="h-8 w-8 text-amber-500" id="error-svg"/>
                    <XCircleIcon className="h-6 w-6 text-red-500 absolute ml-[14.7rem] mb-16"
                                 onClick={hideErrorContainer} id="close-svg"/>
                    <div id="error-message" className="text-amber-950">The application is currently in development ;)
                    </div>
                </div>

                {!selectedTournament ? (


                    <div className="grid grid-rows-1 max-w-auto grid-cols-1 p-3  gap-3 border-1 text-slate-300">
                        <h2 className="grid justify-center font-bold uppercase p-3 drop-shadow-lg text-slate-300">Tournaments</h2>

                        {tournaments.map(tournament => (
                            <div className="" key={tournament.id} onClick={() => handleGet(tournament)} className="text-gray-400
                             bg-slate-950 grid gap-2 grid-cols-2 hover:bg-slate-900 hover:ring-2 hover:shadow-blue-500
                             hover:drop-shadow-lg ring-blue-800 transition-all ease-out duration-500 p-6 rounded-xl
                             drop-shadow-lg shadow-blue-900 "><TrophyIcon
                                className="absolute w-40 h-40 ml-32 opacity-10"/>
                                <div className="p-1 pt-0 pb-1 col-span-2 font-semibold text-md text-teal-500">
                                    <div className="font-medium text-[10px] font-sans text-gray-600 ">NAME</div>
                                    {tournament.tournament_name}</div>

                                <div className="p-1 pt-0 pb-3 font-semibold text-xs ">
                                    <div className="font-medium text-[10px] font-sans text-gray-600">TYPE</div>
                                    {tournament.tournament_type_display}</div>

                                <div className="p-1 pt-0 pb-3 font-semibold text-xs ">
                                    <div className="font-medium text-[10px] font-sans text-gray-600">TEAMS</div>
                                    {tournament.teams_selection_display}</div>

                                <div className="p-1 pt-0 pb-3 font-semibold text-xs ">
                                    <div className="font-medium text-[10px] font-sans text-gray-600">STAGE</div>
                                    {tournament.current_stage_display}</div>

                                <div className="p-1 pt-0 pb-3 font-semibold text-xs ">
                                    <div className="font-medium text-[10px] font-sans text-gray-600">CHAMPION</div>
                                    {tournament.champion ? (
                                        <div className="flex">
                                            <div className="pr-1 text-amber-400">{tournament.champion.club_name}</div>
                                            <img className="w-5 h-5 drop-shadow-md shadow-blue-50"
                                                 src={tournament.champion.club_image} alt=""/>

                                        </div>
                                    ) : (
                                        <div>No Champion</div>
                                    )}</div>

                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <div onClick={handleBackToTournaments} className="gap-2 flex place-items-center my-3">
                            <ChevronDoubleLeftIcon className="w-8 h-8 text-blue-500"/>Back to Tournaments
                        </div>
                        <GetGroups tournamentId={selectedTournament.id}/>
                        {/*<Group tournamentId={selectedTournament.id} onBackToTournaments={handleBackToTournaments} />*/}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TournamentDetails;
