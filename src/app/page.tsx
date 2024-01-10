"use client"
import { useEffect, useState } from "react"
import { serchLog } from "../api/discord"
import { format } from 'date-fns'
import { ILog } from "../interfaces/ILog"
import { LogCategory } from "../enums/LogCategory"

const Page = () => {
    const [logs, setLogs] = useState<ILog[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const logsData = await serchLog()
                if (logsData) {
                    setLogs(logsData)
                }
            } catch (error) {
                console.error("Error to get logs:", error)
            } finally {
                setLoading(false);
            }
        }

        fetchLogs()
    }, [])

    return (
        <div className="relative overflow-x-auto">
            <h1 className="text-center text-4xl m-10 font-bold">DISCORD LOGS</h1>
            {loading ? (
                <div className="text-center">
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <>
            {setLogs.length > 0 ? (
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
                        {logs.map((log) => (
                            <tr key={log._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {log._id}
                                </th>
                                <td className="px-6 py-4">
                                    {log.user}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`${
                                            log.category === LogCategory.BAN
                                                ? 'bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300'
                                                : log.category === LogCategory.PUNISHMENT
                                                ? 'bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300'
                                                : log.category === LogCategory.TEMPORARY_ROLE_CHANGE
                                                ? 'bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300'
                                                : 'bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300'
                                        }`}
                                    >
                                        {log.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {log.description}
                                </td>
                                <td className="px-6 py-4">
                                    {log.reason}
                                </td>
                                <td className="px-6 py-4">
                                    {log.duration}
                                </td>
                                <td className="px-6 py-4">
                                    {format(log.timestamp, 'MM/dd/yyyy')}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        ) : (
            <><p className="text-center text-1xl m-10 font-bold text-gray-500">No content available =(, but here's an example of what it would look like!</p>
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
                    </table></>

        )}
                    <div className="mt-10 mb-4 text-center text-gray-500">
                By <a href="https://github.com/ErikPatrik/" className="text-blue-500">Erik Patrik Pittaluga</a> for GitHub
            </div>
            </>
            )}
    </div>
    )
}

export default Page