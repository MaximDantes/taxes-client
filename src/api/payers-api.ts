import axiosInstance from './api'
import {IPayer, IPayerWithoutId, ITax} from '../types/dto'

const payersApi = {
    getAll: async () => {
        const response = await axiosInstance.get<IPayer[]>('/payers')

        return response.data
    },

    add: async (payer: IPayerWithoutId) => {
        const response = await axiosInstance.post<IPayer>('/payers', payer)

        return response.data
    },

    edit: async (payer: IPayer) => {
        const response = await axiosInstance.put<IPayer>('/payers', payer)

        return response.data
    },

    delete: async (payerId: string) => {
        const response = await axiosInstance.delete<string>(`/payers/${payerId}`)

        return response.data
    },
}

export default payersApi