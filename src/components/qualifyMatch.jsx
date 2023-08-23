import React, {useEffect, useState} from "react";
import DateTimeFormating, {QualifyDateTimeFormating} from "./formatingDateTime";
import MatchScore from "./qualifyScoring";
import {TrophyIcon} from "@heroicons/react/24/solid";
import {SkeletonMatchQualify} from "./groupsSkeleton";


export const QualifyMatchBracket = ({matches, tournamentId}) => {
    if (!matches || matches.length === 0) {
        // Handle the case when matches are empty or undefined
        return (
            <div>
            </div>
        );
    }

    // Create a custom order for positions
    let customOrder = [];
    if (matches.length === 2) {
        customOrder = [1, 2];
    } else if (matches.length === 4) {
        customOrder = [1, 3, 2, 4];
    } else if (matches.length === 8) {
        customOrder = [1, 3, 2, 4, 5, 7, 6, 8];
    } else if (matches.length === 16) {
        customOrder = [1, 3, 2, 4, 5, 7, 6, 8, 9, 11, 10, 12, 13, 15, 14, 16];
    } else {
        customOrder = [1]
    }

    // Set the custom order

    // Sort the matches based on the custom order
    const sortedMatches = customOrder.map((position) =>
        matches.find((match) => match.position === position)
    );

    console.log("matches:", sortedMatches); // Log the matches array

    return (
        <div className="main ">
            {sortedMatches.map((match, index) => (

                <div key={match.pk} className={`bg-slate-900  text-slate-100 grid justify-center  ${
                    index % 2 === 0 ? " " : "pb-10"}`
                }>


                    {!match.is_match_ended ? (

                        <div className="grid relative justify-center ">

                            <div
                                className="p-2 rounded-xl mt-3  transition-all drop-shadow-xl  bg-slate-950 ring-blue-800 bg-opacity-20 hover:bg-opacity-100  duration-300 ">
                                <div className="grid gap-2">
                                    <div className="font-semibold flex text-sm place-self-center">
                                        <QualifyDateTimeFormating dateTimeStr={match.date}/></div>
                                    <div className="group bg-slate-800 p-2 w-60 grid rounded-xl">
                                        <div
                                            className="grid grid-cols-5 gap-3 place-items-center text-sm font-semibold">
                                            <img className="w-8 h-8 drop-shadow-md shadow-blue-50 col-span-1"
                                                 src={match.team1.team.club_name.club_image} alt="ClubLogo"/>
                                            <div
                                                className="col-span-3 text-slate-400 justify-self-start">{match.team1.team.club_name.club_name}</div>
                                            <div className="font-black text-2xl text-slate-400 place-self-center">-
                                            </div>
                                        </div>
                                    </div>

                                    <svg width="120" height="120" viewBox="0 0 59 45"
                                         className={`fill-blue-800 hover:fill-blue-500 absolute ${
                                             index % 2 === 0 ? "mt-[4.5rem] ml-[15.14rem]" : "-mt-[0.5rem] ml-[15.14rem] rotate-180 scale-x-[-1]"}`}
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group 2">
                                            <g id="Vector">
                                                <path
                                                    d="M18 3.5H4V2.5H18C21.0376 2.5 23.5 4.96243 23.5 8V39C23.5 41.4853 25.5147 43.5 28 43.5H59V44.5H28C24.9624 44.5 22.5 42.0376 22.5 39V8C22.5 5.51472 20.4853 3.5 18 3.5Z"/>
                                                <path
                                                    d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z"/>
                                            </g>
                                        </g>
                                    </svg>


                                    <div className="group bg-slate-800 p-2 w-60 grid rounded-xl">
                                        <div
                                            className="grid grid-cols-5 gap-3 place-items-center text-sm font-semibold">
                                            <img className="w-8 h-8 drop-shadow-md shadow-blue-50 col-span-1"
                                                 src={match.team2.team.club_name.club_image} alt="ClubLogo"/>
                                            <div
                                                className="col-span-3 text-slate-400 justify-self-start">{match.team2.team.club_name.club_name}</div>
                                            <div className="font-black text-2xl text-slate-400 place-self-center">-
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            className="p-2 rounded-xl mt-3 transition-all drop-shadow-xl  bg-slate-950 ring-blue-800 bg-opacity-20 hover:bg-opacity-100   duration-400 ">
                            {match.is_match_ended && match.team1_score > match.team2_score ? (
                                <div className="gap-2 ">
                                    <div
                                        className="text-sm font-bold text-slate-400 flex place-content-center bg-slate-800 p-1.5 mb-2 rounded-xl">FULL-TIME
                                    </div>
                                    <div className="group bg-blue-700 p-2 w-60 grid hover:bg-blue-700 rounded-xl">
                                        <div
                                            className="grid grid-cols-5 gap-3 place-items-center text-sm font-semibold">
                                            <img className="w-8 h-8 drop-shadow-md shadow-blue-50 col-span-1"
                                                 src={match.team1.team.club_name.club_image} alt="ClubLogo"/>
                                            <div
                                                className="col-span-3 text-slate-300 justify-self-start">{match.team1.team.club_name.club_name}</div>
                                            <div
                                                className="font-black text-2xl gap-2 grid col-span-1  justify-items-end text-slate-300">
                                                <div className="">
                                                    <div
                                                        className="text-slate-200 place-content-end">{match.team1_score}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg width="120" height="120" viewBox="0 0 59 45"
                                         className={`fill-blue-800 hover:fill-blue-500 absolute ${
                                             index % 2 === 0 ? "-mt-[1rem] ml-[15.14rem]" : "-mt-[6rem] ml-[15.14rem] rotate-180 scale-x-[-1]"}`}
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group 2">
                                            <g id="Vector">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M18 3.5H4V2.5H18C21.0376 2.5 23.5 4.96243 23.5 8V39C23.5 41.4853 25.5147 43.5 28 43.5H59V44.5H28C24.9624 44.5 22.5 42.0376 22.5 39V8C22.5 5.51472 20.4853 3.5 18 3.5Z"/>
                                                <path
                                                    d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z"/>
                                            </g>
                                        </g>
                                    </svg>

                                    <div className="group bg-slate-900 mt-2 text-slate-600 p-2 w-60 grid rounded-xl">
                                        <div
                                            className="grid grid-cols-5 gap-3 place-items-center text-sm font-semibold">
                                            <img className="w-8 h-8 opacity-40 drop-shadow-md shadow-blue-50 col-span-1"
                                                 src={match.team2.team.club_name.club_image} alt="ClubLogo"/>
                                            <div
                                                className="col-span-3 justify-self-start">{match.team2.team.club_name.club_name}</div>
                                            <div
                                                className="font-black text-slate-600 text-2xl gap-2 grid col-span-1 justify-items-end text-slate-300">
                                                <div className=" place-content-end">{match.team2_score}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="gap-2 ">
                                    <div
                                        className="text-sm font-bold text-slate-400 flex place-content-center bg-slate-800 p-1.5 mb-2 rounded-xl">FULL-TIME
                                    </div>

                                    <div className="group bg-slate-900 text-slate-600 p-2 w-60 grid rounded-xl">
                                        <div
                                            className="grid grid-cols-5 gap-3 place-items-center text-sm font-semibold">
                                            <img className="w-8 h-8 opacity-40 drop-shadow-md shadow-blue-50 col-span-1"
                                                 src={match.team1.team.club_name.club_image} alt="ClubLogo"/>
                                            <div
                                                className="col-span-3 justify-self-start">{match.team1.team.club_name.club_name}</div>
                                            <div
                                                className="font-black text-slate-600 text-2xl gap-2 grid col-span-1 justify-items-end text-slate-300">
                                                <div className=" place-content-end">{match.team1_score}</div>
                                            </div>
                                        </div>
                                    </div>


                                    <svg width="120" height="120" viewBox="0 0 59 45"
                                         className={`fill-blue-800 hover:fill-blue-500 absolute ${
                                             index % 2 === 0 ? "-mt-[1rem] ml-[15.14rem]" : "-mt-[6rem] ml-[15.14rem] rotate-180 scale-x-[-1]"}`}
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group 2">
                                            <g id="Vector">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M18 3.5H4V2.5H18C21.0376 2.5 23.5 4.96243 23.5 8V39C23.5 41.4853 25.5147 43.5 28 43.5H59V44.5H28C24.9624 44.5 22.5 42.0376 22.5 39V8C22.5 5.51472 20.4853 3.5 18 3.5Z"/>
                                                <path
                                                    d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z"/>
                                            </g>
                                        </g>
                                    </svg>


                                    <div className="group bg-blue-700 p-2 w-60 grid hover:bg-blue-700 rounded-xl  mt-2">
                                        <div
                                            className="grid grid-cols-5  gap-3 place-items-center text-sm font-semibold">
                                            <img className="w-8 h-8 drop-shadow-md shadow-blue-50 col-span-1"
                                                 src={match.team2.team.club_name.club_image} alt="ClubLogo"/>
                                            <div
                                                className="col-span-3 text-slate-300 justify-self-start">{match.team2.team.club_name.club_name}</div>
                                            <div
                                                className="font-black text-2xl gap-2 grid col-span-1  justify-items-end text-slate-300">
                                                <div className="">
                                                    <div
                                                        className="text-slate-200 place-content-end">{match.team2_score}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            )}
                            {match.team2_score === match.team1_score ? (
                                <div></div>
                            ) : ""}


                        </div>


                    )}


                </div>
            ))}

        </div>
    )
};


export default QualifyMatchBracket;
