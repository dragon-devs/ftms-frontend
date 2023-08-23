import React, {useEffect, useState} from 'react';
import axios from 'axios';
import config from "../config.json"
import {XCircleIcon, CheckCircleIcon} from '@heroicons/react/24/solid'


const NewTournamentForm = () => {
    const [formData, setFormData] = useState({
        tournament_name: '',
        slug: '',
        match_per_day: '1',
        match_time_1: null,
        match_time_2: null,
        teams_selection: '4',
        tournament_type: 'Groups',
        clubs: [],
    });
    const [selectedClubs, setSelectedClubs] = useState([]);
    const [allClubs, setAllClubs] = useState([]);

    const hideSuccessContainer = () => {
        const successContainer = document.getElementById('success-container');
        successContainer.style.display = 'none';
    };

    function hideErrorContainer() {
        const errorContainer = document.getElementById('error-container');
        errorContainer.style.display = 'none';
    }

    useEffect(() => {
        // Fetch all clubs from the database and update the state
        const fetchClubs = async () => {
            try {
                const response = await axios.get(config.clubAPI);
                setAllClubs(response.data);

                // Generate initial club fields based on default teams_selection (4)
                const initialClubs = generateInitialClubs(formData.teams_selection);
                setFormData(prevFormData => ({...prevFormData, clubs: initialClubs}));

            } catch (error) {
                console.error('Error creating clubs:', error);
                const errorMessageElement = document.getElementById('error-message');

                // Update the error message text
                errorMessageElement.textContent = "Can't get the Teams from the API.";

                // Show the error container
                const errorContainer = document.getElementById('error-container');
                errorContainer.style.display = 'flex'; // Or set it to 'block' if you want to maintain the flex display

                // Add an event listener to the SVG to hide the error container when clicked
                const errorSvg = document.getElementById('error-svg');
                errorSvg.addEventListener('click', hideErrorContainer);
            }
        }


        fetchClubs();
    }, []);


    // Generate initial club fields based on teams_selection
    const generateInitialClubs = (teamsSelection) => {
        return Array.from({length: parseInt(teamsSelection)}, (_, index) => ({club_name: ''}));
    };

    // Update club fields when teams_selection value changes
    const handleTeamsSelectionChange = (e) => {
        const {value} = e.target;
        setFormData({...formData, teams_selection: value, clubs: generateInitialClubs(value)});
    };

    // Your handleChange function
    const handleChange = (e, index) => {
        const {value} = e.target;
        setSelectedClubs(prevSelectedClubs => {
            const updatedSelectedClubs = [...prevSelectedClubs];
            updatedSelectedClubs[index] = value;
            return updatedSelectedClubs;
        });

        const updatedClubs = [...formData.clubs];
        updatedClubs[index] = {club_name: value};
        setFormData({...formData, clubs: updatedClubs});
    };


    // Filter the available clubs that have not been selected yet
    const availableClubs = allClubs.filter(club => {
        // Check if the club is selected or its value is empty
        const isSelected = selectedClubs.includes(club.club_name);
        const isEmptyValue = !formData.clubs.some(
            (clubData) => clubData && clubData.club_name === club.club_name
        );
        return !isSelected || isEmptyValue;
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Display the success message
        const processingMessageElement = document.getElementById('processing-message');
        const processingContainer = document.getElementById('processing-container');
        processingMessageElement.textContent = 'Tournament is being processed...';
        processingContainer.style.display = 'flex'; // Or 'block' based on your styling

        const successMessageElement = document.getElementById('success-message');
        const successContainer = document.getElementById('success-container');

        try {
            // Try to make the POST request
            await axios.post(config.apiEndpoint + '/', formData);

            processingContainer.style.display = 'none'; // Or 'block' based on your styling

            // Update the processing message
            successMessageElement.textContent = 'Tournament is successfully created.';
            successContainer.style.display = 'flex'; // Or 'block' based on your styling

            // Add event listener to hide the success container
            const successSvg = document.getElementById('success-svg');
            successSvg.addEventListener('click', hideSuccessContainer);

        } catch (error) {
            console.error('Error creating tournament:', error);
            // Remove the success message and container
            successContainer.style.display = 'none';
            // Display the error message
            const errorMessageElement = document.getElementById('error-message');
            errorMessageElement.textContent = 'An error occurred. Please try again.';
            const errorContainer = document.getElementById('error-container');
            errorContainer.style.display = 'flex'; // Or 'block' based on your styling

            // Add event listener to hide the error container
            const errorSvg = document.getElementById('error-svg');
            errorSvg.addEventListener('click', hideErrorContainer);
        }
    };

    const getGroupName = (index) => {
        const groupNames = ["GROUP A", "GROUP B", "GROUP C", "GROUP D", "GROUP E", "GROUP F", "GROUP G", "GROUP H",
            "GROUP I", "GROUP J", "GROUP K", "GROUP L", "GROUP M", "GROUP N", "GROUP O", "GROUP P"];
        const groupIndex = Math.floor(index / 4);
        return groupNames[groupIndex];
    };

    return (
        <div>
            <div
                className="bg-slate-700 text-[15px] gap-2 p-2 flex drop-shadow-xl place-items-center place-content-center font-semibold text-slate-300">
                <div className="bg-sky-400 px-3 text-[12px] drop-shadow-lg font-bold text-slate-900 rounded-xl">CREATE
                    NEW TOURNAMENT
                </div>
            </div>
            <div className="bg-slate-900 grid-rows-2 grid justify-center">
                <div className="pt-10 pb-20 gap-2 ">
                    <div id="processing-container" className="hidden bg-indigo-500 flex gap-2 mb-3 p-6 rounded-xl">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" id="processing-svg">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                            <path className="opacity-75" fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <div id="processing-message" className="text-indigo-200"></div>
                    </div>
                    <div id="success-container" className="hidden bg-green-200 flex gap-2 mb-3 p-6 rounded-xl">
                        <CheckCircleIcon className="h-6 w-6 text-green-500" id="success-svg"/>
                        <div id="success-message" className="text-green-500"></div>
                    </div>
                    <div id="error-container"
                         className="hidden transition-all bg-red-200 flex mb-3 gap-2 p-6 rounded-xl">
                        <XCircleIcon className="h-6 w-6 text-red-500" id="error-svg"/>
                        <div id="error-message" className="text-red-500"></div>
                    </div>
                    <form
                        className="grid w-[22rem] grid-cols-2 text-slate-300 gap-3  drop-shadow-xl bg-slate-950 p-5 rounded-xl"
                        onSubmit={handleSubmit}>
                        <label className="grid col-span-2 py-3 pb-0 text-slate-500 font-bold gap-1 text-[10px]">
                            TOURNAMENT NAME
                            <input
                                className=" p-1 text-sm font-semibold rounded-lg text-slate-300 bg-slate-700 text-center"
                                type="text"
                                name="tournament_name"
                                placeholder="Your tournament name..."
                                value={formData.tournament_name}
                                onChange={(e) => setFormData({...formData, tournament_name: e.target.value})}
                                required
                            />
                        </label>

                        <label className="grid col-span-2 py-3 pb-0 text-slate-500 font-bold gap-1 text-[10px]">
                            TOURNAMENT TYPE
                            <select
                                className=" p-1 text-sm font-semibold rounded-lg text-slate-300 bg-slate-700 text-center"
                                name="tournament_type"
                                value={formData.tournament_type}
                                onChange={(e) => setFormData({...formData, tournament_type: e.target.value})}
                                required
                            >
                                <option value="Groups">Groups & Knockout</option>
                                <option value="K/O">Knockout</option>
                            </select>
                        </label>

                        <label className="grid col-span-2 py-3 pb-0 text-slate-500 font-bold gap-1 text-[10px]">
                            MATCHES PER DAY
                            <select
                                className="p-1 text-sm font-semibold  text-slate-300 bg-slate-700 rounded-lg  text-center"
                                name="match_per_day"
                                value={formData.match_per_day}
                                onChange={(e) => setFormData({...formData, match_per_day: e.target.value})}
                                required
                            >
                                <option value="1">1 Match</option>
                                <option value="2">2 Matches</option>
                            </select>
                        </label>

                        {formData.match_per_day === '1' && (
                            <label className="grid col-span-2 py-3 pb-0 text-slate-500 font-bold gap-1 text-[10px]">
                                MATCH TIME EVERYDAY (HH:MM)
                                <input
                                    className=" p-1 text-sm font-semibold rounded-lg text-slate-300 bg-slate-700 text-center"
                                    type="time"
                                    name="match_time_1"
                                    value={formData.match_time_1}
                                    onChange={(e) => setFormData({...formData, match_time_1: e.target.value})}
                                    required
                                />
                            </label>
                        )}

                        {/* Conditionally render match_time_2 input */}
                        {formData.match_per_day === '2' && (
                            <div className="flex gap-3 place-content-stretch">
                                <label
                                    className="grid col-span-1 py-3 pb-0 text-slate-500  font-bold gap-1 text-[10px]">
                                    FIRST MATCH TIME
                                    <input
                                        className=" p-1 w-[9.5rem] text-sm font-semibold rounded-lg text-slate-300 bg-slate-700 text-center"
                                        type="time"
                                        name="match_time_1"
                                        value={formData.match_time_1}
                                        onChange={(e) => setFormData({...formData, match_time_1: e.target.value})}
                                        required
                                    />
                                </label>
                                <label
                                    className="grid col-span-1 py-3 pb-0  text-slate-500 font-bold gap-1 text-[10px]">
                                    SECOND MATCH TIME
                                    <input
                                        className=" p-1 text-sm w-[9.2rem] font-semibold rounded-lg text-slate-300 bg-slate-700 text-center"
                                        type="time"
                                        name="match_time_2"
                                        value={formData.match_time_2}
                                        onChange={(e) => setFormData({...formData, match_time_2: e.target.value})}
                                        required
                                    />
                                </label>
                            </div>


                        )}

                        <label className="grid col-span-2 py-3 pb-0 text-slate-500 font-bold gap-1 text-[10px]">
                            TEAMS SELECTION
                            <select
                                className="p-1 text-sm font-semibold  mb-5 text-slate-300 bg-slate-700 rounded-lg  text-center"
                                name="teams_selection"
                                value={formData.teams_selection}
                                onChange={handleTeamsSelectionChange}
                                required
                            >
                                <option value="4">4 Teams</option>
                                <option value="8">8 Teams</option>
                                <option value="16">16 Teams</option>
                                <option value="32">32 Teams</option>
                                <option value="64">64 Teams</option>
                            </select>
                        </label>


                        {formData.clubs.map((club, index) => (
                            <div className="grid justify-center grid-cols-3 gap-1" key={index}>
                                <label className="grid content-center text-slate-500 font-bold text-[10px]">
                                    {getGroupName(index)}
                                </label>
                                <select
                                    className="grid p-1 transition-all col-span-2 w-auto text-sm font-semibold rounded-lg
                                text-slate-300 bg-slate-700 text-center"
                                    name="club"
                                    value={club.club_name}
                                    onChange={(e) => handleChange(e, index)}
                                    required
                                >
                                    {/* Show the selected club in the "Select a club" option */}
                                    {selectedClubs[index] && (
                                        <option value={selectedClubs[index]}>{selectedClubs[index]}</option>
                                    )}

                                    <option value=""> - - - -</option>
                                    {availableClubs.map((club) => (
                                        <option key={club.id} value={club.club_name}>
                                            {club.club_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ))}


                        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 my-3 text-sm leading-5 rounded-full
                            font-semibold col-span-2 text-slate-900 justify-self-center" type="submit">
                            Create Tournament
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default NewTournamentForm;
