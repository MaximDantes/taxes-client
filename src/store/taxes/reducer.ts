import * as actions from './actions'
import {ITax} from '../../types/dto'
import {ThunkAction} from 'redux-thunk'
import {State} from '../store'

type InferValues<T> = T extends { [key: string]: infer U } ? U : never
export type Action = ReturnType<InferValues<typeof actions>>

export type TaxesThunkResult = ThunkAction<void, State, undefined, Action>


const initialState = {
    taxes: [] as ITax[],
    currentTax: null as ITax | null
}

const taxesReducer = (state = initialState, action: Action): typeof initialState => {
    switch (action.type) {
        case 'taxes/SET_TAXES':
            return {
                ...state,
                taxes: action.payload
            }

        case 'taxes/SET_CURRENT_TAX':
            return {
                ...state,
                currentTax: state.taxes.find(item => item.id === action.payload) || null
            }

        default:
            return state
    }
}

export default taxesReducer