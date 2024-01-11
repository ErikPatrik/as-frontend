"use client"
import { useEffect, useState } from "react"
import { serchLog } from "../api/discord"
import { ILog } from "../interfaces/ILog"
import LogTable from "../components/LogTable"
import SpinnerLoading from "../components/SpinnerLoading"
import Footer from "../components/Footer"

const Page = () => {
    const [logs, setLogs] = useState<ILog[]>([]);
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
                <>
                    <div>
                        <p className="text-center text-1xl m-10 font-bold text-gray-500">The content is available soon, wait a little longer =)</p>
                    </div>
                    <SpinnerLoading />
                </>
            ) : (
                <>
                    {setLogs.length > 0 ? (
                        <LogTable logs={logs} />
                    ) : (
                        <>
                            <p className="text-center text-1xl m-10 font-bold text-gray-500">No content available =(, but here's an example of what it would look like!</p>
                            <ExampleLogTable />
                        </>
                    )}
                    <Footer />
                </>
            )}
        </div>
    )
}

export default Page