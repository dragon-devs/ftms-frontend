import React from 'react';
import DateTimeFormating from './formatingDateTime';
import {StarIcon} from "@heroicons/react/20/solid";

const MatchScore = ({match}) => {
    const isTeam1Winner = match.team_1_score > match.team_2_score;
    const isTeam2Winner = match.team_2_score > match.team_1_score;

    return (
        <div className="justify-items-center grid">
            {isTeam1Winner && (
                <div className="font-black text-2xl grid text-slate-300">
                    <StarIcon className="h-4 w-4 justify-self-start grid text-amber-400"/>
                    <div className="flex gap-2">
                        <div>{match.team_1_score}</div>
                        - <div className="text-slate-500">{match.team_2_score}</div>
                    </div>
                </div>
            )}
            {isTeam2Winner && (
                <div className="font-black text-2xl grid text-slate-300">
                    <StarIcon className="h-4 w-4 grid place-self-end text-amber-400"/>
                    <div className="flex gap-2">
                        <div className="text-slate-500">{match.team_1_score}</div>
                        - <div>{match.team_2_score}</div>
                    </div>
                </div>
            )}
            {!isTeam1Winner && !isTeam2Winner && (
                <div className="font-black text-2xl text-slate-400">
                    {match.team_1_score} - {match.team_2_score}
                </div>
            )}
            <div className="text-[10px] font-bold text-slate-400">FULL-TIME</div>
        </div>
    );
};

export default MatchScore;
