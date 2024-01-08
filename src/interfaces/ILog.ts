export interface ILog {
    _id: string
    user: string
    category: string
    description?: string
    reason?: string
    duration?: string
    timestamp: Date
}