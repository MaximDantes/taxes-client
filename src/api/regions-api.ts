import axiosInstance from './api'
import {IRegion} from '../types/dto'

const regionsApi = {
    getAll: async () => {
        const response = await axiosInstance.get<IRegion[]>('/regions')

        return response.data
    }
}

export default regionsApi