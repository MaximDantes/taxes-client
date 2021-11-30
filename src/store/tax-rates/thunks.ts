import {TaxRatesThunkResult} from './reducer'
import {setTaxRates} from './actions'
import {setError} from '../app/thunks'
import taxRatesApi from '../../api/tax-rates-api'

export const getTaxRates = (): TaxRatesThunkResult => async (dispatch) => {
    try {
        const response = await taxRatesApi.getAll()

        dispatch(setTaxRates(response))
    } catch (e) {
        dispatch(setError(true))
        console.error(e)
    }
}

export const getTaxRatesByTax = (taxId: string): TaxRatesThunkResult => async (dispatch) => {
    try {
        const response = await taxRatesApi.getByTax(taxId)

        dispatch(setTaxRates(response))
    } catch (e) {
        dispatch(setError(true))
        console.error(e)
    }
}