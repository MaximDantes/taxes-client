import axiosInstance from './api'
import {ITax} from '../types/dto'

const taxesApi = {
    getAll: async () => {
        const response = await axiosInstance.get<ITax[]>('/taxes')

        return response.data
    }
}

export default taxesApi