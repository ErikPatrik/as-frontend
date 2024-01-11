const ExampleLogTable = () => {
    return(
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        User
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Reason
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Duration
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Created
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        12345678919
                    </th>
                    <td className="px-6 py-4">
                        erikpatrik1
                    </td>
                    <td className="px-6 py-4">
                        <span
                            className='bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300'
                        >
                            ban
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        User erikpatrik has been ban by erikpatrik1 for reason: No reason provided
                    </td>
                    <td className="px-6 py-4">
                        Toxic player
                    </td>
                    <td className="px-6 py-4">
                        10days
                    </td>
                    <td className="px-6 py-4">
                        01/08/2024
                    </td>
                </tr>
            </tbody>
        </table>
    )
}