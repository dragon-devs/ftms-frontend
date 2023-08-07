import React, {useEffect, useState} from 'react';
import {Tab} from '@headlessui/react';
import GroupTable from './groupClubs';
import MatchesNew from "./matchesNewDesign";
import GroupTabsSkeleton from "./groupsSkeleton";

const AllGroupSkeleton = () => {
    return (
        <div>
            <div className=" grid justify-center m-2 p-3 px-5 mb-4 bg-slate-950 rounded-lg
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
                            <div className="rounded-full bg-slate-700 -ml-2 h-5 w-5 "></div>
                        </td>
                        <td className=" pr-2 pl-1 py-2.5 text-slate-500 dark:text-slate-400 text-left">
                            <div className="h-3 w-20 bg-slate-700 rounded"></div>
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
                            <div className="rounded-full bg-slate-700 -ml-2 h-5 w-5 "></div>
                        </td>
                        <td className=" pr-2 pl-1 py-2.5 text-slate-500 dark:text-slate-400 text-left">
                            <div className="h-3 w-20 bg-slate-700 rounded"></div>
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
                            <div className="rounded-full bg-slate-700 -ml-2 h-5 w-5 "></div>
                        </td>
                        <td className=" pr-2 pl-1 py-2.5 text-slate-500 dark:text-slate-400 text-left">
                            <div className="h-3 w-20 bg-slate-700 rounded"></div>
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
                            <div className="rounded-full bg-slate-700 -ml-2 h-5 w-5 "></div>
                        </td>
                        <td className=" pr-2 pl-1 py-2.5 text-slate-500 dark:text-slate-400 text-left">
                            <div className="h-3 w-20 bg-slate-700 rounded"></div>
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

        </div>


    );
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function GroupTabs({categories, setSelectedGroupId, tournamentId}) {
    const [loading, setLoading] = useState(true); // Initialize loading to true

    // Group categories into an array of rows, with each row containing up to four groups
    const rows = Object.values(categories).reduce((acc, group, index) => {
        const rowIndex = Math.floor(index / 4);
        if (!acc[rowIndex]) {
            acc[rowIndex] = [];
        }
        acc[rowIndex].push(group);
        return acc;
    }, []);

    useEffect(() => {
        // Simulate data fetching with a delay
        const delay = setTimeout(() => {
            setLoading(false); // Set loading to false after the data is fetched
        }, 0); // Adjust the delay time as needed (e.g., 2000ms for 2 seconds)

        // Cleanup the timer to avoid potential memory leaks
        return () => clearTimeout(delay);
    }, []);

    return (
        <div className="w-full max-w-md px-2 sm:px-0 rounded-xl  ">

            <Tab.Group>
                {rows.map((row, rowIndex) => (
                    <div className="bg-slate-950 rounded-lg p-1 m-1">
                        <div key={rowIndex} className="flex bg-slate-950 transition-all rounded-md bg-slate-900 ">
                            {row.map((group) => (
                                <Tab
                                    key={group.id}
                                    className={({selected}) =>
                                        classNames(
                                            'w-full rounded-md py-2 text-sm font-medium leading-5 text-slate-600',
                                            'ring-blue-500 ring-opacity-50 focus:outline-none focus:ring-1 ',
                                            selected
                                                ? 'bg-slate-900 shadow'
                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                        )
                                    }
                                    onClick={() => setSelectedGroupId(group.id)} // Set the actual group ID here
                                >
                                    Group {group.group}
                                </Tab>
                            ))}
                        </div>
                    </div>

                ))}

                <Tab.Panels className="mt-4 max-h-auto text-slate-100">
                    {Object.values(categories).map((group) => (
                        <Tab.Panel key={group.id}>
                            {/* Pass the necessary data to the GroupTable component */}
                            <GroupTable
                                tournamentId={tournamentId}
                                groupId={group.id} // Pass the current group ID as groupId
                                groupName={group.group} // Optionally, pass the group name
                            />
                            <MatchesNew
                                tournamentId={tournamentId}
                                groupId={group.id}
                            />
                        </Tab.Panel>
                    ))}
                </Tab.Panels>

            </Tab.Group>

        </div>
    );
}

export default GroupTabs;
