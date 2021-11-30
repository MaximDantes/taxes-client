import {State} from '../store/store'

export const getTaxesSelector = (state: State) => state.taxes.taxes
export const getCurrentTaxSelector = (state: State) => state.taxes.currentTax