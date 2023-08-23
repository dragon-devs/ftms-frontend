import React from 'react';

const FinalMatch = (matches) => {
    return (
        <div>
            {matches.map((match) => (

                <div
                    className="p-2 rounded-xl mt-3 transition-all drop-shadow-xl  bg-slate-950 ring-blue-800 bg-opacity-20 hover:bg-opacity-100   duration-400 ">
                    {match.is_match_ended && match.team1_score > match.team2_score ? (
                        <div className="gap-2 ">
                            <div
                                className="text-sm font-bold text-slate-400 flex place-content-center bg-slate-800 p-1.5 mb-2 rounded-xl">FULL-TIME
                            </div>
                            <div className="group bg-blue-700 p-2 w-60 grid hover:bg-blue-700 rounded-xl">
                                <div className="grid grid-cols-5 gap-3 place-items-center text-sm font-semibold">
                                    <img className="w-8 h-8 drop-shadow-md shadow-blue-50 col-span-1"
                                         src={match.team1.team.club_name.club_image} alt="ClubLogo"/>
                                    <div
                                        className="col-span-3 text-slate-300 justify-self-start">{match.team1.team.club_name.club_name}</div>
                                    <div
                                        className="font-black text-2xl gap-2 grid col-span-1  justify-items-end text-slate-300">
                                        <div className="">
                                            <div className="text-slate-200 place-content-end">{match.team1_score}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-slate-900 mt-2 text-slate-600 p-2 w-60 grid rounded-xl">
                                <div className="grid grid-cols-5 gap-3 place-items-center text-sm font-semibold">
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
                                <div className="grid grid-cols-5 gap-3 place-items-center text-sm font-semibold">
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


                            <div className="group bg-blue-700 p-2 w-60 grid hover:bg-blue-700 rounded-xl  mt-2">
                                <div className="grid grid-cols-5  gap-3 place-items-center text-sm font-semibold">
                                    <img className="w-8 h-8 drop-shadow-md shadow-blue-50 col-span-1"
                                         src={match.team2.team.club_name.club_image} alt="ClubLogo"/>
                                    <div
                                        className="col-span-3 text-slate-300 justify-self-start">{match.team2.team.club_name.club_name}</div>
                                    <div
                                        className="font-black text-2xl gap-2 grid col-span-1  justify-items-end text-slate-300">
                                        <div className="">
                                            <div className="text-slate-200 place-content-end">{match.team2_score}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            ))}
        </div>
    );
};

export default FinalMatch;
