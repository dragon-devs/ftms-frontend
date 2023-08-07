import React, {Component, useEffect, useState} from 'react';
import axios from "axios";
import config from "../config.json"

const Table = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        // Replace 'YOUR_DJANGO_API_URL' with the URL of your Django API endpoint that serves all tournaments
        const API_URL = config.apiEndpoint + '/28/groups/';
        // const API_URL = 'http://192.168.10.6:8000/tournaments/22/groups/';

        axios.get(API_URL)
            .then(response => {
                setGroups(response.data);
                console.log(response.data)

            })
            .catch(error => {
                console.error('Error fetching tournaments data:', error);
            });
    }, []);

    if (groups.length === 0) {
        return <div>Loading...</div>;
    }


    return (
        <div className="grid grid-rows-1 grid-cols-2 p-3 bg-slate-900 gap-3 border-1 text-slate-300">
            {groups.map(group => (
                <div key={group.pk}
                     className="px-3 py-4 text-sm bg-slate-800 hover:ring-1 hover:ring-blue-600 ease-in duration-300 hover:bg-slate-900 transition-all drop-shadow-2xl  rounded-lg ">
                    <table className="grid justify-center">
                        <caption className=" font-bold text-md m-2 p-1 pb-3">
                            <div className="font-light p">Group {group.group}</div>
                        </caption>

                        <tbody>
                        <tr>

                            <td className="font-semibold text-xs p-3 text-slate-100 dark:text-slate-200 text-center place-content-center grid grid-cols-3 gap-1 uppercase ">
                                <img
                                    className="w-8 h-8 grid justify-self-end place-content-center drop-shadow-md shadow-blue-50"
                                    src={group.group_club_1.club_image} alt=""/>
                                <span
                                    className="grid justify-self-center place-content-center col-span-2 ">{group.group_club_1.club_name}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-xs p-3 text-slate-100 dark:text-slate-200 text-center place-content-center grid grid-cols-3 gap-1 uppercase ">
                                <img
                                    className="w-8 h-8 grid justify-self-center place-content-center drop-shadow-md shadow-blue-50"
                                    src={group.group_club_2.club_image} alt=""/>
                                <span
                                    className="grid justify-self-center place-content-center col-span-2 ">{group.group_club_2.club_name}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-xs p-3 text-slate-100 dark:text-slate-200 text-center place-content-center grid grid-cols-3 gap-1 uppercase ">
                                <img
                                    className="w-8 h-8 grid justify-self-center place-content-center drop-shadow-md shadow-blue-50"
                                    src={group.group_club_3.club_image} alt=""/>
                                <span
                                    className="grid justify-self-center place-content-center col-span-2 ">{group.group_club_3.club_name}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-xs p-3 text-slate-100 dark:text-slate-200 text-center place-content-center grid grid-cols-3 gap-1 uppercase ">
                                <img
                                    className="w-8 h-8 grid justify-self-center place-content-center drop-shadow-md shadow-blue-50"
                                    src={group.group_club_4.club_image} alt=""/>
                                <span
                                    className="grid justify-self-center place-content-center col-span-2 ">{group.group_club_4.club_name}</span>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            ))}

        </div>
    );

}

export default Table;