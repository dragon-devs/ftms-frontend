import React from 'react';
import DateTimeFormating from './formatingDateTime';
import {StarIcon} from "@heroicons/react/20/solid";
import {TrophyIcon} from "@heroicons/react/24/solid";

const MatchScore = ({match}) => {
    const isTeam1Winner = match.team1_score > match.team2_score;
    const isTeam2Winner = match.team2_score > match.team1_score;

    return (
        <div className="justify-items-center grid">
            {isTeam1Winner && (
                <div className="font-black text-2xl grid text-slate-300">
                    <TrophyIcon className="h-4 w-4 justify-self-start grid text-amber-400"/>
                    <div className="flex gap-2">
                        <div className="text-slate-500">{match.team2_score}</div>
                    </div>
                </div>
            )}
            {isTeam2Winner && (
                <div className="font-black flex text-2xl place-items-center gap-1 text-slate-300">
                    <TrophyIcon className="h-5 w-5 grid content-start place-self-center mt-0.5 text-amber-400"/>
                    <div className="flex gap-2">
                        <div>{match.team2_score}</div>
                    </div>
                </div>
            )}
            {!isTeam1Winner && !isTeam2Winner && (
                <div className="font-black text-2xl text-slate-400">
                    {match.team1_score} - {match.team2_score}
                </div>
            )}
        </div>
    );
};

export default MatchScore;
