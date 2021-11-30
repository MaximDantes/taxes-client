import axiosInstance from './api'
import {IDeclaration} from '../types/dto'

const declarationsApi = {
    getAll: async () => {
        const response = await axiosInstance.get<IDeclaration[]>('/declarations')

        return response.data
    }
}

export default declarationsApi