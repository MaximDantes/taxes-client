import axiosInstance from './api'
import {IDeclaration} from '../types/dto'

const declarationsApi = {
    getByPayer: async (payerId: string) => {
        const response = await axiosInstance.get<IDeclaration[]>(`/declarations/${payerId}`)

        return response.data
    }
}

export default declarationsApi