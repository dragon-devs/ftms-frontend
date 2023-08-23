import React, {useState} from 'react';
import axios from 'axios';
import config from '../config.json'
import {CheckCircleIcon, XCircleIcon} from "@heroicons/react/24/solid";
import PhoneNumberValidation from "./phoneNumberInput";
import DevelopmentWarning from "./DevelopmentWarning";

function ClubForm() {
    const [clubData, setClubData] = useState({
        club_name: '',
        captain_name: '',
        phone_number: '',
        payment: false,
    });
    const [enabled, setEnabled] = useState(false)

    function hideErrorContainer() {
        const errorContainer = document.getElementById('error-container')
        const successContainer = document.getElementById('success-container')

        if (errorContainer) {
            errorContainer.style.display = 'none';
        } else if (successContainer) {
            successContainer.style.display = 'none';
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const csrfToken = document.cookie.match(/csrftoken=([^;]+)/)[1];
        // axios.defaults.headers.common['X-CSRFToken'] = csrfToken;

        try {
            await axios.post(config.clubAPI + '/', clubData);
            const errorMessageElement = document.getElementById('success-message');
            console.log(clubData)
            errorMessageElement.textContent = 'New club is successfully created.';

            const errorContainer = document.getElementById('success-container');
            errorContainer.style.display = 'flex'; // Or set it to 'block' if you want to maintain the flex display

            setClubData({
                club_name: '',
                captain_name: '',
                phone_number: '',
                payment: '',
            });

            const errorSvg = document.getElementById('success-svg');
            errorSvg.addEventListener('click', hideErrorContainer);

        } catch (error) {

            console.error('Error creating tournament:', error);
            const errorMessageElement = document.getElementById('error-message');

            // Update the error message text
            errorMessageElement.textContent = 'An error occurred. Please try again.';

            // Show the error container
            const errorContainer = document.getElementById('error-container');
            errorContainer.style.display = 'flex'; // Or set it to 'block' if you want to maintain the flex display

            // Add an event listener to the SVG to hide the error container when clicked
            const errorSvg = document.getElementById('error-svg');
            errorSvg.addEventListener('click', hideErrorContainer);

        }

    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setClubData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            <div
                className="bg-slate-700 text-[15px] gap-2 p-2 flex drop-shadow-xl place-items-center place-content-center font-semibold text-slate-300">
                <div className="bg-sky-400 px-3 text-[12px] drop-shadow-lg font-bold text-slate-900 rounded-xl">CREATE
                    NEW CLUB
                </div>
            </div>

            <div className="bg-slate-900 grid-rows-2 grid justify-center">
                <div className="pt-10 pb-20 gap-2 ">

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
                        className="grid w-[22rem] grid-cols-2 text-slate-300 gap-3 drop-shadow-xl bg-slate-950 p-5 rounded-xl"
                        onSubmit={handleSubmit}>
                        <label className="grid col-span-2 py-3 pb-0 text-slate-500 font-bold gap-1 text-[10px]">
                            CLUB NAME
                            <input
                                className=" p-1 text-sm font-semibold rounded-lg text-slate-300 bg-slate-700 text-center"
                                type="text"
                                name="club_name"
                                placeholder="Your club name..."
                                value={clubData.club_name}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="grid col-span-2 py-3 pb-0 text-slate-500 font-bold gap-1 text-[10px]">
                            CAPTAIN NAME
                            <input
                                className=" p-1 text-sm font-semibold rounded-lg text-slate-300 bg-slate-700 text-center"
                                type="text"
                                name="captain_name"
                                placeholder="Your name..."
                                value={clubData.captain_name}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="grid col-span-2 py-3 pb-0 text-slate-500 font-bold gap-1 text-[10px]">
                            WHATSAPP
                            <PhoneNumberValidation
                                phoneNumber={clubData.phone_number}
                                onPhoneNumberChange={value => handleChange({target: {name: 'phone_number', value}})}
                            />
                        </label>


                        {/*<label className="grid col-span-2 justify-items-start py-3 pb-0 text-slate-500 font-bold gap-1 text-[10px]">*/}
                        {/*    PAYMENT*/}
                        {/*        <input*/}
                        {/*            className=' bg-rose-700 p-3 cursor-pointer rounded-full w-5 h-5 checked:bg-sky-400 appearance-none mb-5'*/}
                        {/*            type="checkbox"*/}
                        {/*            name="payment"*/}
                        {/*            value={clubData.payment}*/}
                        {/*            onChange={handleChange}*/}
                        {/*        />*/}

                        {/*</label>*/}


                        <button
                            className="bg-sky-500 hover:bg-sky-700 px-5  my-3 py-2 text-sm leading-5 rounded-full font-semibold col-span-2 text-slate-900 justify-self-center"
                            type="submit">Create Club
                        </button>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default ClubForm;
