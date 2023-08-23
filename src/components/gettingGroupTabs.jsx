import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Tab} from '@headlessui/react';
import config from '../config.json';
import GroupTabs from "./groupTableTabs";
import GroupTable from "./groupClubs";
import MatchesNew from "./matchesNewDesign";
import MatchScore from "./isTeamWinnerScore";
import DateTimeFormating from "./formatingDateTime";
import GroupTabsSkeleton from "./groupsSkeleton"

// Create a new component for the skeleton loading effect

export default function GetGroups({tournamentId}) {
    const [selectedGroupId, setSelectedGroupId] = useState(0);
    const [categories, setCategories] = useState({});
    const [loading, setLoading] = useState(true); // Initialize loading to true

    const fetchCategoriesFromAPI = () => {
        const API_URL = `${config.apiEndpoint}/${tournamentId}/groups`;

        return fetch(API_URL)
            .then((response) => response.json())
            .catch((error) => {
                console.error('Error fetching data:', error);
                throw error;
            });
    };

    useEffect(() => {
        // Set loading to true before fetching data
        setLoading(true);

        // Simulate a delay of 2 seconds before fetching data
        const delay = setTimeout(() => {
            fetchCategoriesFromAPI()
                .then((data) => {
                    setCategories(data);
                    setLoading(false); // Set loading to false once data is fetched
                })
                .catch((error) => {
                    console.error('Error fetching categories:', error);
                    setLoading(false); // Set loading to false in case of an error
                });
        }, 0); // Adjust the delay time as needed (e.g., 2000ms for 2 seconds)

        // Cleanup the timer to avoid potential memory leaks
        return () => clearTimeout(delay);
    }, [tournamentId]);

    return (
        <div className="grid place-items-center place-content-center">
            {/* Show the skeleton loading effect while data is being fetched */}
            {loading && <GroupTabsSkeleton/>}

            {/* Render the actual GroupTabs component once data is available */}
            {!loading && (
                <GroupTabs
                    categories={categories}
                    groupId={selectedGroupId}
                    setSelectedGroupId={setSelectedGroupId}
                    tournamentId={tournamentId}
                />
            )}
        </div>
    );
}
