import React from 'react'
import { format } from 'date-fns'
import { ILog } from '../interfaces/ILog'
import { LogCategory } from '../enums/LogCategory'

const LogTable = ({ logs }: { logs: ILog[] }) => {
    return (
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
    )
}

export default LogTable