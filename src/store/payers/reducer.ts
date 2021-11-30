import * as actions from './actions'
import {IPayer} from '../../types/dto'
import {ThunkAction} from 'redux-thunk'
import {State} from '../store'

type InferValues<T> = T extends { [key: string]: infer U } ? U : never
export type Action = ReturnType<InferValues<typeof actions>>

export type PayersThunkResult = ThunkAction<void, State, undefined, Action>


const initialState = {
    payers: [] as IPayer[]
}

const payersReducer = (state = initialState, action: Action): typeof initialState => {
    switch (action.type) {
        case 'payers/SET_PAYERS':
            return {
                ...state,
                payers: action.payload
            }

        case 'payers/ADD_PAYERS':
            return {
                ...state,
                payers: [
                    ...state.payers,
                    action.payload
                ]
            }

        case 'payers/EDIT_PAYERS':
            return {
                ...state,
                payers: state.payers.map(item => {
                    if (item.id !== action.payload.id) {
                        return item
                    }

                    return action.payload
                })
            }

        case 'payers/DELETE_PAYER':
            return {
                ...state,
                payers: state.payers.filter(item => item.id !== action.payload)
            }

        default:
            return state
    }
}

export default payersReducer