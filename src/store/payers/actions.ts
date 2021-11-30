import {IPayer} from '../../types/dto'

export const _setPayers = (payers: IPayer[]) => ({
    type: 'payers/SET_PAYERS',
    payload: payers
} as const)

export const _addPayer = (payer: IPayer) => ({
    type: 'payers/ADD_PAYERS',
    payload: payer
} as const)

export const _editPayer = (payer: IPayer) => ({
    type: 'payers/EDIT_PAYERS',
    payload: payer
} as const)

export const _deletePayer = (payerId: string) => ({
    type: 'payers/DELETE_PAYER',
    payload: payerId
} as const)