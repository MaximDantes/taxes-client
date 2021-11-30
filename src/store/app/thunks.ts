import {AppThunkResult} from './reducer'
import {_setError} from './actions'

export const setError = (error: boolean): AppThunkResult => async (dispatch) => {
    dispatch(_setError(error))
}
