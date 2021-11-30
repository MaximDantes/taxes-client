import * as actions from './actions'
import {ITaxRate} from '../../types/dto'
import {ThunkAction} from 'redux-thunk'
import {State} from '../store'

type InferValues<T> = T extends { [key: string]: infer U } ? U : never
export type Action = ReturnType<InferValues<typeof actions>>

export type TaxRatesThunkResult = ThunkAction<void, State, undefined, Action>


const initialState = {
    taxRates: [] as ITaxRate[]
}

const taxRatesReducer = (state = initialState, action: Action): typeof initialState => {
    switch (action.type) {
        case 'taxRates/SET_TAX_RATES':
            return {
                ...state,
                taxRates: action.payload
            }

        default:
            return state
    }
}

export default taxRatesReducer