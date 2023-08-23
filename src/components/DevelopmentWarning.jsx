import {ExclamationCircleIcon} from "@heroicons/react/20/solid";
import {XCircleIcon} from "@heroicons/react/24/solid";
import React from "react";

const DevelopmentWarning = () => {

    function hideErrorContainer() {
        const errorContainer = document.getElementById('error-container');
        errorContainer.style.display = 'none';
    }

    return (
        <div className="grid place-self-center m-4  ">
            <div id="error-container"
                 className=" animate-pulse decoration-2 place-items-center place-self-center h-auto w-72 transition-all bg-amber-100 flex gap-2 p-6 rounded-xl">
                <ExclamationCircleIcon className="h-8 w-8 text-amber-500" id="error-svg"/>
                <XCircleIcon className="h-6 w-6 text-red-500 absolute ml-[14.7rem] mb-16"
                             onClick={hideErrorContainer} id="close-svg"/>
                <div id="error-message" className="text-amber-950">The application is currently in development ;)
                </div>
            </div>
        </div>
    );
};

export default DevelopmentWarning;