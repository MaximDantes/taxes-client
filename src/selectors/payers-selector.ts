import {State} from '../store/store'

export const getPayersSelector = (state: State) => state.payers.payers
export const getCurrentPayerSelector = (state: State) => state.payers.currentPayer