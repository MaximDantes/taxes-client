import {TaxesThunkResult} from './reducer'
import taxesApi from '../../api/taxes-api'
import {_setCurrentTax, _setTaxes} from './actions'
import {setError} from '../app/thunks'
import {getTaxRatesByTax} from '../tax-rates/thunks'

export const getTaxes = (): TaxesThunkResult => async (dispatch) => {
    try {
        const response = await taxesApi.getAll()

        dispatch(_setTaxes(response))

        if (response[0]) {
            dispatch(setCurrentTax(response[0].id))
        }
    } catch (e) {
        dispatch(setError(true))
        console.error(e)
    }
}

export const setCurrentTax = (taxId: string): TaxesThunkResult => async (dispatch) => {
    try {
        dispatch(_setCurrentTax(taxId))

        dispatch(getTaxRatesByTax(taxId))
    } catch (e) {
        dispatch(setError(true))
        console.error(e)
    }
}