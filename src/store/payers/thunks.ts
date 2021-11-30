import {PayersThunkResult} from './reducer'
import {_addPayer, _deletePayer, _editPayer, _setPayers} from './actions'
import {setError} from '../app/thunks'
import payersApi from '../../api/payers-api'
import {IPayer, IPayerWithoutId} from '../../types/dto'

export const getPayers = (): PayersThunkResult => async (dispatch) => {
    try {
        const response = await payersApi.getAll()

        dispatch(_setPayers(response))
    } catch (e) {
        dispatch(setError(true))
        console.error(e)
    }
}

export const addPayer = (payer: IPayerWithoutId): PayersThunkResult => async (dispatch) => {
    try {
        const response = await payersApi.add(payer)

        dispatch(_addPayer(response))
    } catch (e) {
        dispatch(setError(true))
        console.error(e)
    }
}

export const editPayer = (payer: IPayer): PayersThunkResult => async (dispatch) => {
    try {
        const response = await payersApi.edit(payer)

        dispatch(_editPayer(response))
    } catch (e) {
        dispatch(setError(true))
        console.error(e)
    }
}

export const deletePayer = (payerId: string): PayersThunkResult => async (dispatch) => {
    try {
        const response = await payersApi.delete(payerId)

        dispatch(_deletePayer(response))
    } catch (e) {
        dispatch(setError(true))
        console.error(e)
    }
}