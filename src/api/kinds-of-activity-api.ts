import axiosInstance from './api'
import {IKindOfActivity, IKindOfActivityWithoutId} from '../types/dto'

const kindsOfActivityApi = {
    getAll: async () => {
        const response = await axiosInstance.get<IKindOfActivity[]>('kindsOfActivity')

        return response.data
    },

    add: async (kindOfActivity: IKindOfActivityWithoutId) => {
        const response = await axiosInstance.post<IKindOfActivity>('kindsOfActivity', kindOfActivity)

        return response.data
    },

    edit: async (kindOfActivity: IKindOfActivity) => {
        const response = await axiosInstance.put<IKindOfActivity>('kindsOfActivity', kindOfActivity)

        return response.data
    },

    delete: async (kindOfActivityId: string) => {
        const response = await axiosInstance.delete<string>(`kindsOfActivity/${kindOfActivityId}`)

        return response.data
    }
}

export default kindsOfActivityApi