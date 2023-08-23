import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from "./table";
import Matches from "./matches";
import Groups from "./groups";
import config from "../config.json"
import {TrophyIcon, XCircleIcon} from "@heroicons/react/24/solid";
import {SparklesIcon} from "@heroicons/react/20/solid";
import TournamentCardSkeleton from "./TournamentSkeleton";

const ClubsDetailsSkeleton = () => {
    return (
        <div>
            <div className="w-80 grid content-center">
                <div
                    className="grid animate-pulse content-center grid-rows-1 pb-0 grid-cols-1 p-3 bg-slate-900 gap-3 border-1 text-slate-300">

                    <div className="bg-slate-950 grid gap-2 grid-cols-4 hover:bg-slate-900
                            hover:ring-1 hover:shadow-sky-500 hover:drop-shadow-xl ring-blue-800 transition-all ease-out
                             duration-500 p-6 pr-2 rounded-xl drop-shadow-lg shadow-sky-500"><SparklesIcon
                        className="absolute w-28 h-28 ml-44 m-2 opacity-10"/>

                        <div className="p-1 pt-0 pb-1 font-semibold text-md text-sky-500  col-span-3">
                            <div
                                className="font-medium text-[10px] font-sans text-slate-400 ">NAME
                            </div>
                            <div className="h-4 mt-2 opacity-60 -mb-2 w-[6.5rem] bg-sky-700 rounded"></div>

                        </div>
                        <div className="grid justify-self-start mt-1 p-1 -ml-5">
                            <div className="rounded-full bg-slate-700 h-9 w-9"></div>
                        </div>

                        <div className="p-1 pt-0 pb-1 font-semibold text-xs text-sky-500 col-span-2 ">
                            <div className="font-medium
                                text-[10px] font-sans text-slate-400">CAPTAIN
                            </div>
                            <div className="h-3.5 opacity-60 w-[5.4rem] mt-0.5 bg-sky-700 rounded"></div>
                        </div>

                        <div className="p-1 pt-0 pb-1 font-semibold text-xs text-sky-500 col-span-2 ">
                            <div className="font-medium
                                text-[10px] font-sans text-slate-400">WHATSAPP
                            </div>
                            <div className="h-3.5 opacity-60 w-[5.4rem] mt-0.5 bg-sky-700 rounded"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};


const ClubsDetails = () => {
    const [clubs, setClubs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate loading with a delay
        const loadingTimeout = setTimeout(() => {
            axios.get(config.clubAPI)
                .then(response => {
                    setClubs(response.data);
                    setLoading(false); // Set loading to false after data is fetched
                })
                .catch(error => {
                    console.error('Error fetching clubs data:', error);
                    setError('Error fetching clubs. Please try again later.', error);
                    setLoading(false); // Set loading to false in case of an error
                });
        }, 0); // Simulate a 2-second loading delay

        return () => {
            clearTimeout(loadingTimeout); // Clear the loading timeout when the component unmounts
        };
    }, []);

    if (error) {
        if (error) {
            return (
                <div>
                    <div
                        className="bg-slate-700 text-[15px] mb-7 gap-2 p-2 flex drop-shadow-xl place-items-center place-content-center font-semibold text-slate-300">
                        <div
                            className="bg-sky-400 px-3 text-[12px] drop-shadow-lg font-bold text-slate-900 rounded-xl">ALL
                            CLUBS
                        </div>
                    </div>
                    <div className="bg-slate-900 grid grid-rows-1 text-slate-300">
                        <div className="grid justify-center m-3">
                            <div id="error-container" className="transition-all bg-red-200 flex gap-2 p-6  rounded-xl">
                                <XCircleIcon className="h-6 w-6 text-red-500" id="error-svg"/>
                                <div id="error-message" className="text-red-500">{error}</div>
                            </div>
                            <div className="grid justify-center">
                                <ClubsDetailsSkeleton/>
                                <ClubsDetailsSkeleton/>
                                <ClubsDetailsSkeleton/>
                                <ClubsDetailsSkeleton/>
                                <ClubsDetailsSkeleton/>
                            </div>

                        </div>
                    </div>


                </div>
            );
        }
    }

    if (loading) {
        return (
            <div>
                <div
                    className="bg-slate-700 text-[15px] mb-7 gap-2 p-2 flex drop-shadow-xl place-items-center place-content-center font-semibold text-slate-300">
                    <div className="bg-sky-400 px-3 text-[12px] drop-shadow-lg font-bold text-slate-900 rounded-xl">ALL
                        CLUBS
                    </div>
                </div>
                <div className="bg-slate-900 grid justify-center ">
                    <ClubsDetailsSkeleton/>
                    <ClubsDetailsSkeleton/>
                    <ClubsDetailsSkeleton/>
                    <ClubsDetailsSkeleton/>
                    <ClubsDetailsSkeleton/>
                </div>
            </div>

        );
    }

    if (clubs.length === 0) {
        return <div>No clubs found.</div>;
    }

    const handleGet = club => {
        try {
            // await axios.delete(apiEndpoint + "/" + post.id);
            const club_id = clubs.filter(t => t.id === club.id);
            axios.get(config.apiEndpoint + club.id + '/groups')
                .then(response => {
                    setClubs(response.data);
                })

            setClubs(club_id)

        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                alert("Can't get the tournament.");

        }
    }
    return (
        <div>
            <div
                className="bg-slate-700 text-[15px] mb-7 gap-2 p-2 flex drop-shadow-xl place-items-center place-content-center font-semibold text-slate-300">
                <div className="bg-sky-400 px-3 text-[12px] drop-shadow-lg font-bold text-slate-900 rounded-xl">ALL
                    CLUBS
                </div>
            </div>
            <div className="bg-slate-900 grid justify-center">


                <div className="w-80 grid content-center">
                    <div
                        className="grid content-center grid-rows-1 grid-cols-1 p-3 bg-slate-900 gap-3 border-1 text-slate-300">
                        {clubs.map(Club => (
                            <div className="">
                                <div key={Club.pk} className="bg-slate-950 grid gap-2 grid-cols-4 hover:bg-slate-900
                            hover:ring-1 hover:shadow-sky-500 hover:drop-shadow-xl ring-blue-800 transition-all ease-out
                             duration-500 p-6 pr-2 rounded-xl drop-shadow-lg shadow-sky-500"><SparklesIcon
                                    className="absolute w-28 h-28 ml-44 m-2 opacity-10"/>

                                    <div className="p-1 pt-0 pb-1 font-semibold text-md text-sky-500  col-span-3">
                                        <div
                                            className="font-medium text-[10px] font-sans text-slate-400 ">NAME
                                        </div>
                                        {Club.club_name}</div>
                                    <div className="grid justify-self-start -ml-6"><img src={Club.club_image}
                                                                                        className="w-12
                                h-12 drop-shadow-lg shadow-sky-500" alt=""/></div>

                                    <div className="p-1 pt-0 pb-1 font-semibold text-xs text-sky-500 col-span-2 ">
                                        <div className="font-medium
                                text-[10px] font-sans text-slate-400">CAPTAIN
                                        </div>
                                        {Club.captain_name}</div>

                                    <div className="p-1 pt-0 pb-1 font-semibold text-xs text-sky-500 col-span-2 ">
                                        <div className="font-medium
                                text-[10px] font-sans text-slate-400">WHATSAPP
                                        </div>
                                        {Club.phone_number}</div>
                                </div>
                                {/* Add more details as needed */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>

    );
};

export default ClubsDetails;
