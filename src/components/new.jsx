import React from "react";
// import '../stylesheets/style.css';

export const Box = () => {
    return (
        <div className="container-wrapper">
            <div
                className="container group block max-w-sm mx-auto rounded-lg p-4 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                <section className="item item-table">
                    <div className="">

                        {/*<div className="">*/}
                        {/*    <div className="">*/}
                        {/*        <div className="">*/}
                        {/*            <table className=" divide-y divide-gray-600 table-auto self-center bg-white dark:bg-slate-800 text-sm/[10px] shadow-sm">*/}
                        {/*                <caption className="text-slate-500 dark:text-slate-100 font-semibold pb-4 text-sm caption-top">*/}
                        {/*                    Group A*/}
                        {/*                </caption>*/}
                        {/*                <thead className="bg-slate-100 dark:bg-slate-800">*/}
                        {/*                <tr>*/}
                        {/*                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">Club Name</th>*/}
                        {/*                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">P</th>*/}
                        {/*                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">W</th>*/}
                        {/*                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">L</th>*/}
                        {/*                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">D</th>*/}
                        {/*                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">GF</th>*/}
                        {/*                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">GA</th>*/}
                        {/*                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">GD</th>*/}
                        {/*                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left ">Pts</th>*/}

                        {/*                </tr>*/}
                        {/*                </thead>*/}
                        {/*                <tbody>*/}
                        {/*                <tr>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">Brazil</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}

                        {/*                </tr>*/}
                        {/*                <tr>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">Argentina</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                </tr>*/}
                        {/*                <tr>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">France</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                </tr>*/}
                        {/*                <tr>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">Spain</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}
                        {/*                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>*/}

                        {/*                </tr>*/}
                        {/*                </tbody>*/}
                        {/*            </table>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                    </div>
                    <table className="table-auto">
                        <thead>
                        <tr>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                            <th>Year</th>
                            <th>Year</th>
                            <th>Year</th>
                            <th>Year</th>
                            <th>Year</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                            <td>1961</td>
                            <td>1961</td>
                            <td>1961</td>
                            <td>1961</td>
                            <td>1961</td>
                        </tr>
                        <tr>
                            <td>Witchy Woman</td>
                            <td>The Eagles</td>
                            <td>1972</td>
                            <td>1972</td>
                            <td>1972</td>
                            <td>1972</td>
                            <td>1972</td>
                            <td>1972</td>
                        </tr>
                        <tr>
                            <td>Shining Star</td>
                            <td>Earth, Wind, and Fire</td>
                            <td>1975</td>
                            <td>1975</td>
                            <td>1975</td>
                            <td>1975</td>
                            <td>1975</td>
                            <td>1975</td>
                        </tr>
                        </tbody>
                    </table>

                </section>
                <section className="item item-1">A</section>
                <section className="item item-2">B</section>
                <section className="item item-3">C</section>
                <section className="item item-4">D</section>
            </div>
        </div>

    );
};
