import axiosInstance from './api'
import {ITaxRate} from '../types/dto'

const taxRatesApi = {
    getAll: async () => {
        const response = await axiosInstance.get<ITaxRate[]>('/taxRates')

        return response.data
    },

    getByTax: async (taxId: string) => {
        const response = await axiosInstance.get<ITaxRate[]>(`/taxRates/${taxId}`)

        return response.data
    },
}

export default taxRatesApi