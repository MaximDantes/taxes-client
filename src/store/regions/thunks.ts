import {RegionsThunkResult} from './reducer'
import {setRegions} from './actions'
import {setError} from '../app/thunks'
import regionsApi from '../../api/regions-api'

export const getRegions = (): RegionsThunkResult => async (dispatch) => {
    try {
        const response = await regionsApi.getAll()

        dispatch(setRegions(response))
    } catch (e) {
        dispatch(setError(true))
        console.error(e)
    }
}