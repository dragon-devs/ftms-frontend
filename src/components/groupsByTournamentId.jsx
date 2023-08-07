import React, {useEffect, useState} from 'react';
import axios from 'axios';
import config from '../config.json';
import {ChevronDoubleLeftIcon} from '@heroicons/react/24/solid';
import GroupTable from './groupClubs';
import Matches from "./matches";
import MatchesNew from "./matchesNewDesign";


function GroupTableSkeleton() {
    return null;
}

const Group = ({tournamentId, onBackToTournaments}) => {
    const [groups, setGroups] = useState([]);
    const [error, setError] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedGroupName, setSelectedGroupName] = useState(null);
    const [loading, setLoading] = useState(true); // Initialize loading to true

    useEffect(() => {
        const API_URL = `${config.apiEndpoint}/${tournamentId}/groups/`;

        axios.get(API_URL)
            .then(response => {
                setGroups(response.data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(error => {
                console.error('Error fetching groups data:', error);
                setError('Error fetching groups. Please try again later.');
                setLoading(false); // Set loading to false in case of an error
            });
    }, [tournamentId]);

    const handleGetGroupTable = groupId => {
        setSelectedGroup(groupId);
        // Find the selected group name from the groups array
        const groupName = groups.find(group => group.id === groupId)?.group || '';
        setSelectedGroupName(groupName);
    };

    const handleBackToGroups = () => {
        setSelectedGroup(null);
        setSelectedGroupName(null); // Reset the selectedGroupName when going back
    };

    return (
        <div className="text-slate-300">
            {loading && <GroupTableSkeleton/>}

            {selectedGroup ? (
                <div>
                    <div onClick={handleBackToGroups} className="gap-2 flex place-items-center my-3">
                        <ChevronDoubleLeftIcon className="w-8 h-8 text-blue-500"/>Back to Groups
                    </div>
                    <GroupTable tournamentId={tournamentId} groupId={selectedGroup} groupName={selectedGroupName}/>
                    <MatchesNew tournamentId={tournamentId} groupId={selectedGroup}/>
                </div>
            ) : (
                <div className="grid gap-4 mb-4 grid-rows-3">
                    {groups.map(group => (
                        <div key={group.pk} onClick={() => handleGetGroupTable(group.id)} className="w-72 grid bg-slate-950
                        hover:bg-slate-900 hover:ring-2 hover:shadow-blue-500 hover:drop-shadow-lg ring-blue-800
                        transition-all ease-out duration-500 p-4 rounded-xl drop-shadow-lg shadow-blue-900">
                            <table className="text-sm">
                                <caption className="font-bold bg-slate-800 text-md rounded-lg p-2 mb-2 ">
                                    <div className="font-light text-lg">Group {group.group}</div>
                                </caption>
                                <tbody>
                                <tr className=" divide-y divide-amber-100">
                                    <td className="flex gap-2 place-items-center">
                                        <img className="w-8 h-auto" src={group.group_club_1.club_image} alt=""/>
                                        <span className="p-1">{group.group_club_1.club_name}</span>
                                    </td>
                                </tr>

                                <tr className="divide-y divide-amber-100">
                                    <td className="flex gap-2 place-items-center">
                                        <img className="w-8 h-auto" src={group.group_club_2.club_image} alt=""/>
                                        <span className="p-1">{group.group_club_2.club_name}</span>
                                    </td>
                                </tr>

                                <tr className="divide-y divide-amber-100">
                                    <td className="flex gap-2 place-items-center">
                                        <img className="w-8 h-auto" src={group.group_club_3.club_image} alt=""/>
                                        <span className="p-1">{group.group_club_3.club_name}</span>
                                    </td>
                                </tr>

                                <tr className="divide-y divide-amber-100">
                                    <td className="flex gap-2 place-items-center">
                                        <img className="w-8 h-auto" src={group.group_club_4.club_image} alt=""/>
                                        <span className="p-1">{group.group_club_4.club_name}</span>
                                    </td>
                                </tr>


                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Group;
