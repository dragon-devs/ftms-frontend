import {TrophyIcon} from "@heroicons/react/24/solid";
import React from "react";

const TournamentCardSkeleton = () => {
    return (
        <div className="text-slate-300">
            <div className="grid justify-center animate-pulse">
                <div className="grid grid-rows-1 max-w-auto grid-cols-1 p-3 pb-0 gap-3 border-1 text-slate-300">

                    <div className="" className="text-gray-400
                             bg-slate-950 grid gap-2 grid-cols-2 hover:bg-slate-900 hover:ring-2 hover:shadow-blue-500
                             hover:drop-shadow-lg ring-blue-800 transition-all ease-out duration-500 p-6 rounded-xl
                             drop-shadow-lg shadow-blue-900 "><TrophyIcon
                        className="absolute w-40 h-40 ml-32 opacity-10"/>
                        <div className="p-1 pt-0 pb-1 col-span-2 font-semibold text-md text-teal-500">
                            <div
                                className="font-medium text-[10px] font-sans text-gray-600 ">NAME
                            </div>
                            <div className="h-5 mt-1 opacity-60 w-56 bg-teal-700 rounded"></div>
                        </div>

                        <div className="p-1 pt-0 pb-3 font-semibold text-xs ">
                            <div className="font-medium
                                text-[10px] font-sans text-gray-600">TYPE
                            </div>
                            <div className="h-4 mt-.5 opacity-60  bg-slate-700 rounded"></div>

                        </div>

                        <div className="p-1 pt-0 pb-3 font-semibold text-xs ">
                            <div className="font-medium
                                text-[10px] font-sans text-gray-600">TEAMS
                            </div>
                            <div className="h-4 mt-.5 opacity-60 w-14 bg-slate-700 rounded"></div>

                        </div>

                        <div className="p-1 pt-0 pb-3 font-semibold text-xs ">
                            <div className="font-medium
                                text-[10px] font-sans text-gray-600">STAGE
                            </div>
                            <div className="h-4 mt-.5 opacity-60 mb-1 bg-slate-700 rounded"></div>

                        </div>
                        <div className="p-1 pt-0 pb-3 font-semibold text-xs ">
                            <div className="font-medium
                                text-[10px] font-sans text-gray-600">CHAMPION
                            </div>
                            <div className="h-4 w-20 opacity-60 bg-amber-600 rounded"></div>


                        </div>

                    </div>
                </div>


            </div>
        </div>

    );
};

export default TournamentCardSkeleton;