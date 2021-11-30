import * as actions from './actions'
import {ThunkAction} from 'redux-thunk'
import {State} from '../store'

const initialState = {
    error: false
}

type InferValues<T> = T extends { [key: string]: infer U } ? U : never
export type Action = ReturnType<InferValues<typeof actions>>

export type AppThunkResult = ThunkAction<void, State, undefined, Action>

const appReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'app/SET_ERROR':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export default appReducer