import React, {Component, useEffect, useState} from 'react';
import axios from "axios";
import config from "../config.json"


const Table = () => {
    const [groupclubs, setGroupclubs] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        // const API_URL = 'http://192.168.10.6:8000/tournaments/22/groups/62/groupclubs/';
        const API_URL = config.apiEndpoint + '/28/groups/86/groupclubs/';

        axios.get(API_URL)
            .then(response => {
                setGroupclubs(response.data);
            })
            .catch(error => {
                console.error('Error fetching tournaments data:', error);
                setError('Error fetching tournaments. Please try again later.', error);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (groupclubs.length === 0) {
        return <div>Loading...</div>;
    }
    {
        return (
            <div>
                <div
                    className="table text-sm bg-slate-800 hover:ring-1 hover:ring-blue-600 justify-items-center grid ease-in duration-300 hover:bg-slate-900 transition-all drop-shadow-2xl px-3 py-4 rounded-lg ">

                    <table className="">
                        <caption className="font-bold text-lg p-1">
                            {/*//get the the {group.group} from the group Table*/}
                        </caption>
                        <thead>
                        <tr>
                            <th></th>
                            <th className=" font-bold text-xs p-2 text-slate-100 dark:text-slate-200 text-left">CLUBNAME</th>
                            <th className=" font-bold text-xs p-2 text-slate-100 dark:text-slate-200 text-left">P</th>
                            <th className=" font-bold text-xs p-2 text-slate-100 dark:text-slate-200 text-left">W</th>
                            <th className=" font-bold text-xs p-2 text-slate-100 dark:text-slate-200 text-left">L</th>
                            <th className=" font-bold text-xs p-2 text-slate-100 dark:text-slate-200 text-left">D</th>
                            <th className=" font-bold text-xs p-2 text-slate-100 dark:text-slate-200 text-left">GF</th>
                            <th className=" font-bold text-xs p-2 text-slate-100 dark:text-slate-200 text-left">GA</th>
                            <th className=" font-bold text-xs p-2 text-slate-100 dark:text-slate-200 text-left">GD</th>
                            <th className=" font-bold text-xs p-2 text-slate-100 dark:text-slate-200 text-left ">Pts</th>
                        </tr>

                        </thead>
                        {groupclubs.map(groupclub => (
                            <tbody>
                            <tr key={groupclub.pk}>
                                <td><img
                                    className="w-8 h-8 grid justify-self-end place-content-center drop-shadow-md shadow-blue-50"
                                    src={groupclub.club_name.club_image} alt="Club logo"/></td>
                                <td className=" p-2 text-slate-500 dark:text-slate-400 text-left">{groupclub.club_name.club_name}</td>
                                <td className=" p-2 text-slate-500 dark:text-slate-400 text-center">{groupclub.played}</td>
                                <td className=" p-2 text-slate-500 dark:text-slate-400 text-center">{groupclub.wins}</td>
                                <td className=" p-2 text-slate-500 dark:text-slate-400 text-center">{groupclub.lose}</td>
                                <td className=" p-2 text-slate-500 dark:text-slate-400 text-center">{groupclub.draw}</td>
                                <td className=" p-2 text-slate-500 dark:text-slate-400 text-center">{groupclub.gf}</td>
                                <td className=" p-2 text-slate-500 dark:text-slate-400 text-center">{groupclub.ga}</td>
                                <td className=" p-2 text-slate-500 dark:text-slate-400 text-center">{groupclub.gd}</td>
                                <td className=" p-2 text-slate-500 dark:text-slate-400 text-center">{groupclub.points}</td>


                            </tr>
                            </tbody>
                        ))}
                    </table>

                </div>
            </div>
        );
    }
}

export default Table;