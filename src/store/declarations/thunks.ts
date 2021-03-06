import {DeclarationsThunkResult} from './reducer'
import {setError} from '../app/thunks'
import declarationsApi from '../../api/declarations-api'
import {setDeclarations} from './actions'

export const getDeclarations = (payerId: string): DeclarationsThunkResult => async (dispatch) => {
    try {
        const response = await declarationsApi.getByPayer(payerId)

        dispatch(setDeclarations(response))
    } catch (e) {
        dispatch(setError(true))
        console.error(e)
    }
}