import * as actions from './actions'
import {IDeclaration, ITaxRate} from '../../types/dto'
import {ThunkAction} from 'redux-thunk'
import {State} from '../store'

type InferValues<T> = T extends { [key: string]: infer U } ? U : never
export type Action = ReturnType<InferValues<typeof actions>>

export type DeclarationsThunkResult = ThunkAction<void, State, undefined, Action>


const initialState = {
    declarations: [] as IDeclaration[]
}

const declarationsReducer = (state = initialState, action: Action): typeof initialState => {
    switch (action.type) {
        case 'declarations/SET_DECLARATIONS':
            return {
                ...state,
                declarations: action.payload
            }

        default:
            return state
    }
}

export default declarationsReducer