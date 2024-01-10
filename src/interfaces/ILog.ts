import { LogCategory } from "../enums/LogCategory"

export interface ILog {
    _id: string
    user: string
    category: LogCategory
    description?: string
    reason?: string
    duration?: string
    timestamp: Date
}