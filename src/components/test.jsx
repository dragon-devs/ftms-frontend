const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

export default function Example() {
    return (
        <div className="grid justify-center ">
            <div className="p-4 pb-0">
                <div className="">
                    <div className=" rounded-xl text-center dark:bg-slate-800">
                        <div className="px-8 py-8 sm:px-12 ">
                            <table
                                className=" divide-y divide-gray-600 table-auto self-center w-full bg-white dark:bg-slate-800 text-sm shadow-sm">
                                <caption
                                    className="text-slate-500 dark:text-slate-100 font-semibold pb-4 text-lg caption-top">
                                    Group A
                                </caption>
                                <thead className="bg-slate-100 dark:bg-slate-800">
                                <tr>
                                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">Club
                                        Name
                                    </th>
                                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">P</th>
                                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">W</th>
                                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">L</th>
                                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">D</th>
                                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">GF</th>
                                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">GA</th>
                                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left">GD</th>
                                    <th className=" font-semibold p-3 text-slate-100 dark:text-slate-200 text-left ">Pts</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">Brazil</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>

                                </tr>
                                <tr>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">Argentina</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                </tr>
                                <tr>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">France</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                </tr>
                                <tr>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">Spain</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>
                                    <td className=" p-3 text-slate-500 dark:text-slate-400 text-left">0</td>

                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>


            <div className="flex justify-center gap-4 p-4 ">
                <div className="rounded-xl max-w-fit text-center dark:bg-slate-800">
                    <div className="px-8 py-8 sm:px-10 ">
                        <table
                            className="divide-y divide-gray-600 table-auto self-center w-full bg-white dark:bg-slate-800 text-sm shadow-sm">
                            <caption
                                className="text-slate-500 dark:text-slate-100 font-semibold pb-4 text-lg caption-top">
                                Group A
                            </caption>
                            <thead className="bg-slate-100 dark:bg-slate-800">

                            </thead>
                            <tbody>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">Brazil</td>


                            </tr>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">Argentina</td>

                            </tr>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">France</td>

                            </tr>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">Spain</td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className=" rounded-xl max-w-fit text-center dark:bg-slate-800">
                    <div className="px-8 py-8 sm:px-10 ">
                        <table
                            className="divide-y divide-gray-600 table-auto self-center w-full bg-white dark:bg-slate-800 text-sm shadow-sm">
                            <caption
                                className="text-slate-500 dark:text-slate-100 font-semibold pb-4 text-lg caption-top">
                                Group A
                            </caption>
                            <thead className="bg-slate-100 dark:bg-slate-800">

                            </thead>
                            <tbody>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">Brazil</td>


                            </tr>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">Argentina</td>

                            </tr>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">France</td>

                            </tr>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">Spain</td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className=" rounded-xl max-w-fit text-center dark:bg-slate-800">
                    <div className="px-8 py-8 sm:px-10 ">
                        <table
                            className="divide-y divide-gray-600 table-auto self-center w-full bg-white dark:bg-slate-800 text-sm shadow-sm">
                            <caption
                                className="text-slate-500 dark:text-slate-100 font-semibold pb-4 text-lg caption-top">
                                Group A
                            </caption>
                            <thead className="bg-slate-100 dark:bg-slate-800">

                            </thead>
                            <tbody>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">Brazil</td>


                            </tr>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">Argentina</td>

                            </tr>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">France</td>

                            </tr>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">Spain</td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className=" rounded-xl max-w-fit text-center dark:bg-slate-800">
                    <div className="px-8 py-8 sm:px-10 ">
                        <table
                            className="divide-y divide-gray-600 table-auto self-center w-full bg-white dark:bg-slate-800 text-sm shadow-sm">
                            <caption
                                className="text-slate-500 dark:text-slate-100 font-semibold pb-4 text-lg caption-top">
                                Group A
                            </caption>
                            <thead className="bg-slate-100 dark:bg-slate-800">

                            </thead>
                            <tbody>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">Brazil</td>


                            </tr>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">Argentina</td>

                            </tr>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">France</td>

                            </tr>
                            <tr>
                                <td className=" font-semibold p-4 text-slate-100 dark:text-slate-400">Spain</td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>

        </div>


    )
}

