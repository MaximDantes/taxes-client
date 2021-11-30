import {ITax} from '../../types/dto'

export const _setTaxes = (taxes: ITax[]) => ({
    type: 'taxes/SET_TAXES',
    payload: taxes
} as const)

export const _setCurrentTax = (taxId: string) => ({
    type: 'taxes/SET_CURRENT_TAX',
    payload: taxId
} as const)