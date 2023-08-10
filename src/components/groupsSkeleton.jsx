import React from "react";

const GroupTabsSkeleton = () => {
    return (
        <div className="w-full max-w-md animate-pulse sm:px-0 rounded-xl  ">
            <div className="bg-slate-950 rounded-lg ">
                <div className="flex bg-slate-950 transition-all rounded-md bg-slate-900 ">
                    <div className="w-full flex rounded-md  text-sm font-medium leading-5 text-slate-600
                                           ring-blue-500 ring-opacity-50 focus:outline-none focus:ring-1 ">
                        <div className="h-9 ml-1 my-1 w-40 bg-slate-900 rounded"></div>
                        <div className="h-9 mx-1 my-1 w-40 bg-slate-900 rounded"></div>


                    </div>
                </div>
            </div>
            <div className="mt-4 text-slate-100"/>
            <div>
                <div className="animate-pulse grid w-80 justify-center m-2 p-3 px-5 mb-4 bg-slate-950 rounded-lg hover:ring-1
            hover:ring-blue-600 ease-in duration-300 hover:bg-slate-900 transition-all">
                    <table className="">
                        <caption className="font-bold p-1 mt-1.5 mb-[0.20rem]">
                            <div className="h-4 w-20 bg-slate-700 rounded"></div>
                        </caption>
                        <thead>
                        <tr className="text-[10px] ">
                            <th></th>
                            <th className="p-1 pr-5 pb-2 text-left">CLUBNAME</th>
                            <th className="p-1 pb-2 text-center ">P</th>
                            <th className="p-1 pb-2 text-center ">W</th>
                            <th className="p-1 pb-2 text-center ">L</th>
                            <th className="p-1 pb-2 text-center ">D</th>
                            <th className="p-1 pb-2 text-center ">GA</th>
                            <th className="p-1 pb-2 text-center ">GD</th>
                            <th className="p-1 pb-2 text-center ">Pts</th>
                        </tr>

                        </thead>

                        <tbody>


                        <tr className="text-[12px] text-slate-400 ">
                            <td className="">
                                <div className="rounded-full bg-slate-700 -ml-2 h-3 w-3 mr-1.5"></div>
                            </td>
                            <td className="pr-3 text-slate-500 dark:text-slate-400 text-left">
                                <div className="h-2 w-16 bg-slate-700 rounded"></div>
                            </td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>

                        </tr>

                        <tr className="text-[12px] text-slate-400 ">
                            <td className="">
                                <div className="rounded-full bg-slate-700 -ml-2 h-3 w-3 mr-1.5"></div>
                            </td>
                            <td className="pr-3 text-slate-500 dark:text-slate-400 text-left">
                                <div className="h-2 w-16 bg-slate-700 rounded"></div>
                            </td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>

                        </tr>

                        <tr className="text-[12px] text-slate-400 ">
                            <td className="">
                                <div className="rounded-full bg-slate-700 -ml-2 h-3 w-3 mr-1.5"></div>
                            </td>
                            <td className="pr-3 text-slate-500 dark:text-slate-400 text-left">
                                <div className="h-2 w-16 bg-slate-700 rounded"></div>
                            </td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>

                        </tr>

                        <tr className="text-[12px] text-slate-400 ">
                            <td className="">
                                <div className="rounded-full bg-slate-700 -ml-2 h-3 w-3 mr-1.5"></div>
                            </td>
                            <td className="pr-3 text-slate-500 dark:text-slate-400 text-left">
                                <div className="h-2 w-16 bg-slate-700 rounded"></div>
                            </td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>
                            <td className=" px-2 py-1 text-center ">0</td>

                        </tr>
                        </tbody>
                    </table>

                </div>


                <div className="m-2 animate-pulse ">
                    <div className="grid justify-center place-self-center grid-cols-3 gap-1 p-4 px-3
                            place-items-center hover:ring-1 hover:ring-blue-600 ease-in duration-300 hover:bg-slate-900
                            transition-all drop-shadow-2xl rounded-lg bg-slate-950">

                        <div
                            className="col-span-3 text-slate-300 justify-self-center place-self-start text-sm font-normal">
                            <div className="h-4 w-52 my-1 mb-3 bg-slate-700 rounded"></div>

                        </div>

                        <div className="grid justify-items-center gap-1">
                            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                            <span className="text-sm font-thin text-slate-300">

                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>

                                </span>
                        </div>
                        <div className="grid justify-items-center justify-self-center place-self-end">
                            <div className="h-3 w-4 mt-2 bg-slate-700 rounded"></div>
                            <div className="h-5 w-16 mt-2 bg-slate-700 rounded"></div>
                            <div className="h-3 w-16 mt-2 bg-slate-700 rounded"></div>

                        </div>

                        <div className="grid justify-items-center gap-1">
                            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                            <span className="text-sm font-thin text-slate-300">
                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>
                                </span>
                        </div>


                    </div>
                </div>


                <div className="m-2 animate-pulse ">
                    <div className="grid justify-center place-self-center grid-cols-3 gap-1 p-4 px-3
                            place-items-center hover:ring-1 hover:ring-blue-600 ease-in duration-300 hover:bg-slate-900
                            transition-all drop-shadow-2xl rounded-lg bg-slate-950">

                        <div
                            className="col-span-3 text-slate-300 justify-self-center place-self-start text-sm font-normal">
                            <div className="h-4 w-52 my-1 mb-3 bg-slate-700 rounded"></div>

                        </div>

                        <div className="grid justify-items-center gap-1">
                            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                            <span className="text-sm font-thin text-slate-300">

                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>

                                </span>
                        </div>
                        <div className="grid justify-items-center justify-self-center place-self-end">
                            <div className="h-3 w-4 mt-2 bg-slate-700 rounded"></div>
                            <div className="h-5 w-16 mt-2 bg-slate-700 rounded"></div>
                            <div className="h-3 w-16 mt-2 bg-slate-700 rounded"></div>

                        </div>

                        <div className="grid justify-items-center gap-1">
                            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                            <span className="text-sm font-thin text-slate-300">
                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>
                                </span>
                        </div>


                    </div>
                </div>


                <div className="m-2 animate-pulse ">
                    <div className="grid justify-center place-self-center grid-cols-3 gap-1 p-4 px-3
                            place-items-center hover:ring-1 hover:ring-blue-600 ease-in duration-300 hover:bg-slate-900
                            transition-all drop-shadow-2xl rounded-lg bg-slate-950">

                        <div
                            className="col-span-3 text-slate-300 justify-self-center place-self-start text-sm font-normal">
                            <div className="h-4 w-52 my-1 mb-3 bg-slate-700 rounded"></div>

                        </div>

                        <div className="grid justify-items-center gap-1">
                            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                            <span className="text-sm font-thin text-slate-300">

                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>

                                </span>
                        </div>
                        <div className="grid justify-items-center justify-self-center place-self-end">
                            <div className="h-3 w-4 mt-2 bg-slate-700 rounded"></div>
                            <div className="h-5 w-16 mt-2 bg-slate-700 rounded"></div>
                            <div className="h-3 w-16 mt-2 bg-slate-700 rounded"></div>

                        </div>

                        <div className="grid justify-items-center gap-1">
                            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                            <span className="text-sm font-thin text-slate-300">
                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>
                                </span>
                        </div>


                    </div>
                </div>


                <div className="m-2 animate-pulse ">
                    <div className="grid justify-center place-self-center grid-cols-3 gap-1 p-4 px-3
                            place-items-center hover:ring-1 hover:ring-blue-600 ease-in duration-300 hover:bg-slate-900
                            transition-all drop-shadow-2xl rounded-lg bg-slate-950">

                        <div
                            className="col-span-3 text-slate-300 justify-self-center place-self-start text-sm font-normal">
                            <div className="h-4 w-52 my-1 mb-3 bg-slate-700 rounded"></div>

                        </div>

                        <div className="grid justify-items-center gap-1">
                            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                            <span className="text-sm font-thin text-slate-300">

                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>

                                </span>
                        </div>
                        <div className="grid justify-items-center justify-self-center place-self-end">
                            <div className="h-3 w-4 mt-2 bg-slate-700 rounded"></div>
                            <div className="h-5 w-16 mt-2 bg-slate-700 rounded"></div>
                            <div className="h-3 w-16 mt-2 bg-slate-700 rounded"></div>

                        </div>

                        <div className="grid justify-items-center gap-1">
                            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                            <span className="text-sm font-thin text-slate-300">
                                  <div className="h-4 w-16 mt-2 bg-slate-700 rounded"></div>
                                </span>
                        </div>


                    </div>
                </div>


            </div>

        </div>
    );
};

export default GroupTabsSkeleton;