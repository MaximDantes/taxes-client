import * as actions from './actions'
import {IRegion} from '../../types/dto'
import {ThunkAction} from 'redux-thunk'
import {State} from '../store'

type InferValues<T> = T extends { [key: string]: infer U } ? U : never
export type Action = ReturnType<InferValues<typeof actions>>

export type RegionsThunkResult = ThunkAction<void, State, undefined, Action>


const initialState = {
    regions: [] as IRegion[]
}

const regionsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'regions/SET_REGIONS':
            return {
                ...state,
                regions: action.payload
            }

        default:
            return state
    }
}

export default regionsReducer