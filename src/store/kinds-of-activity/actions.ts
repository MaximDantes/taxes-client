import {IKindOfActivity} from '../../types/dto'

export const _setKindsOfActivity = (kindsOfActivity: IKindOfActivity[]) => ({
    type: 'kindsOfActivity/SET_KINDS_OF_ACTIVITY',
    payload: kindsOfActivity
} as const)

export const _addKindOfActivity = (kindOfActivity: IKindOfActivity) => ({
    type: 'kindsOfActivity/ADD_KINDS_OF_ACTIVITY',
    payload: kindOfActivity
} as const)

export const _editKindOfActivity = (kindOfActivity: IKindOfActivity) => ({
    type: 'kindsOfActivity/EDIT_KINDS_OF_ACTIVITY',
    payload: kindOfActivity
} as const)

export const _deleteKindOfActivity = (kindOfActivityId: string) => ({
    type: 'kindsOfActivity/DELETE_KINDS_OF_ACTIVITY',
    payload: kindOfActivityId
} as const)