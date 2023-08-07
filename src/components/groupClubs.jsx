// GroupTable.js
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import config from '../config.json';


function GroupTableSkeleton() {

    return <div className=" grid justify-center m-2 p-3 px-5 mb-4 bg-slate-950 rounded-lg
                                hover:ring-1 hover:ring-blue-600 ease-in duration-300 hover:bg-slate-900 transition-all">
        <table className="">
            <caption className="font-bold p-1">GROUP A</caption>
            <thead>
            <tr className="text-[10px] ">
                <th></th>
                <th className="p-1 text-left">CLUBNAME</th>
                <th className="p-1 text-center ">P</th>
                <th className="p-1 text-center ">W</th>
                <th className="p-1 text-center ">L</th>
                <th className="p-1 text-center ">D</th>
                <th className="p-1 text-center ">GA</th>
                <th className="p-1 text-center ">GD</th>
                <th className="p-1 text-center ">Pts</th>
            </tr>

            </thead>

            <tbody>


            <tr className="text-[13px] text-slate-400 ">
                <td>
                    <div className="rounded-full bg-slate-700 -ml-2 h-3 w-3 "></div>
                </td>
                <td className=" pr-2 pl-1 py-2.5 text-slate-500 dark:text-slate-400 text-left">
                    <div className="h-2 w-16 bg-slate-700 rounded"></div>
                </td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
            </tr>

            <tr className="text-[13px] text-slate-400 ">
                <td>
                    <div className="rounded-full bg-slate-700 -ml-2 h-3 w-3 "></div>
                </td>
                <td className=" pr-2 pl-1 py-2.5 text-slate-500 dark:text-slate-400 text-left">
                    <div className="h-2 w-16 bg-slate-700 rounded"></div>
                </td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
            </tr>

            <tr className="text-[13px] text-slate-400 ">
                <td>
                    <div className="rounded-full bg-slate-700 -ml-2 h-3 w-3 "></div>
                </td>
                <td className=" pr-2 pl-1 py-2.5 text-slate-500 dark:text-slate-400 text-left">
                    <div className="h-2 w-16 bg-slate-700 rounded"></div>
                </td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
            </tr>

            <tr className="text-[13px] text-slate-400 ">
                <td>
                    <div className="rounded-full bg-slate-700 -ml-2 h-3 w-3 "></div>
                </td>
                <td className=" pr-2 pl-1 py-2.5 text-slate-500 dark:text-slate-400 text-left">
                    <div className="h-2 w-16 bg-slate-700 rounded"></div>
                </td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
                <td className=" px-2 text-center">0</td>
            </tr>

            </tbody>
        </table>

    </div>
}

const GroupTable = ({tournamentId, groupId, groupName}) => {
    const [groupclubs, setGroupclubs] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Initialize loading to true

    const fetchData = () => {
        const API_URL = `${config.apiEndpoint}/${tournamentId}/groups/${groupId}/groupclubs/`;

        axios.get(API_URL)
            .then(response => {
                setGroupclubs(response.data);
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
        const intervalId = setInterval(fetchData, 2000); // Polling every 5 seconds (adjust as per your requirements)

        return () => {
            clearInterval(intervalId);
        };
    }, [tournamentId, groupId]);

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
            {loading && <GroupTableSkeleton/>}

            {/* Render the actual GroupTable component once data is available */}
            {!loading && (
                <div className=" grid justify-center m-2 p-3 px-5 mb-4 bg-slate-950 rounded-lg hover:ring-1
            hover:ring-blue-600 ease-in duration-300 hover:bg-slate-900 transition-all">
                    <table className="">
                        <caption className="font-bold p-1">GROUP {groupName}</caption>
                        <thead>
                        <tr className="text-[10px]">
                            <th></th>
                            <th className="p-1 pr-5 pb-2 text-left">CLUBNAME</th>
                            <th className="p-1 pb-2 text-center ">P</th>
                            <th className="p-1 pb-2 text-center ">W</th>
                            <th className="p-1 pb-2 text-center ">L</th>
                            <th className="p-1 pb-2 text-center ">D</th>
                            <th className="p-1 pb-2 text-center ">GA</th>
                            <th className="p-1 pb-2 text-center ">GD</th>
                            <th className="p-1 pb-2 text-center ">Pts</th>
                        </tr>

                        </thead>
                        {groupclubs.map(groupclub => (
                            <tbody>
                            <tr key={groupclub.pk} className="text-[12px] text-slate-400 ">
                                <td><img className="w-5 h-5 grid justify-self-end place-content-center drop-shadow-md
                            shadow-blue-50" src={groupclub.club_name.club_image} alt="Club logo"/></td>
                                <td className=" pr-3 text-slate-500 dark:text-slate-400 text-left">{groupclub.club_name.club_name}</td>
                                <td className=" px-2 py-1 text-center ">{groupclub.played}</td>
                                <td className=" px-2 py-1 text-center">{groupclub.wins}</td>
                                <td className=" px-2 py-1 text-center">{groupclub.lose}</td>
                                <td className=" px-2 py-1 text-center">{groupclub.draw}</td>
                                <td className=" px-2 py-1 text-center">{groupclub.ga}</td>
                                <td className=" px-2 py-1 text-center">{groupclub.gd}</td>
                                <td className=" px-2 py-1 text-center ">{groupclub.points}</td>

                            </tr>
                            </tbody>
                        ))}
                    </table>

                </div>
            )}
        </div>
    );
};

export default GroupTable;
