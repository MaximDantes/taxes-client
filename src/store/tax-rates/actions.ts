import {ITaxRate} from '../../types/dto'

export const setTaxRates = (taxRates: ITaxRate[]) => ({
    type: 'taxRates/SET_TAX_RATES',
    payload: taxRates
} as const)