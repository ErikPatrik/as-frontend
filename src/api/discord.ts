import { req } from "@/api/axios";

export const serchLog = async() => {
    const response = await req.get(`/api/logs`)

    if (response && response.data) {
        return response.data
    }

    return false
}