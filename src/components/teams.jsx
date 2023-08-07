import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from "./table";
import Matches from "./matches";
import Groups from "./groups";
import config from "../config.json"
import {TrophyIcon} from "@heroicons/react/24/solid";
import {SparklesIcon} from "@heroicons/react/20/solid";


const ClubsDetails = () => {
    const [clubs, setClubs] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        // const API_URL = 'http://192.168.10.6:8000/tournaments/';

        axios.get(config.clubAPI)
            .then(response => {
                setClubs(response.data);
            })
            .catch(error => {
                console.error('Error fetching clubs data:', error);
                setError('Error fetching clubs. Please try again later.', error);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (clubs.length === 0) {
        return <div>Loading...</div>;
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
        <div className="bg-slate-900 grid justify-center">
            <h2 className="grid justify-center w-30 font-bold uppercase p-3 drop-shadow-lg text-slate-300">Clubs</h2>
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
                                <div className="grid justify-self-start -ml-6"><img src={Club.club_image} className="w-12
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

    );
};

export default ClubsDetails;
