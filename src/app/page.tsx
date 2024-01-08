"use client"
import { useEffect, useState } from "react"
import { serchLog } from "../api/discord"
import { format } from 'date-fns'
import { ILog } from "../interfaces/ILog"

const Page = () => {
    const [logs, setLogs] = useState<ILog[]>([])

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const logsData = await serchLog()
                if (logsData) {
                    setLogs(logsData)
                }
            } catch (error) {
                console.error("Error to get logs:", error)
            }
        }

        fetchLogs()
    }, [])

    return (
        <div className="relative overflow-x-auto">
        <h1 className="text-center text-4xl m-10 font-bold">DISCORD LOGS</h1>
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
                            {log.category}
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
    </div>
    )
}

export default Page