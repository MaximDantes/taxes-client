import * as actions from './actions'
import {IKindOfActivity} from '../../types/dto'
import {ThunkAction} from 'redux-thunk'
import {State} from '../store'

type InferValues<T> = T extends { [key: string]: infer U } ? U : never
export type Action = ReturnType<InferValues<typeof actions>>

export type KindsOfActivityThunkResult = ThunkAction<void, State, undefined, Action>


const initialState = {
    kindsOfActivity: [] as IKindOfActivity[]
}

const kindsOfActivityReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'kindsOfActivity/SET_KINDS_OF_ACTIVITY':
            return {
                ...state,
                kindsOfActivity: action.payload
            }

        case 'kindsOfActivity/ADD_KINDS_OF_ACTIVITY':
            return {
                ...state,
                kindsOfActivity: [
                    ...state.kindsOfActivity,
                    action.payload
                ]

            }

        case 'kindsOfActivity/EDIT_KINDS_OF_ACTIVITY':
            return {
                ...state,
                kindsOfActivity: state.kindsOfActivity.map(item => {
                    if (item.id !== action.payload.id) {
                        return item
                    }

                    return action.payload
                })
            }

        case 'kindsOfActivity/DELETE_KINDS_OF_ACTIVITY':
            return {
                ...state,
                kindsOfActivity: state.kindsOfActivity.filter(item => item.id !== action.payload)
            }

        default:
            return state
    }
}

export default kindsOfActivityReducer