import {KindsOfActivityThunkResult} from './reducer'
import {_addKindOfActivity, _deleteKindOfActivity, _editKindOfActivity, _setKindsOfActivity} from './actions'
import {setError} from '../app/thunks'
import kindsOfActivityApi from '../../api/kinds-of-activity-api'
import {IKindOfActivity, IKindOfActivityWithoutId} from '../../types/dto'

export const getKindsOfActivity = (): KindsOfActivityThunkResult => async (dispatch) => {
    try {
        const response = await kindsOfActivityApi.getAll()

        dispatch(_setKindsOfActivity(response))
    } catch (e) {
        dispatch(setError(true))
        console.error(e)
    }
}

export const addKindOfActivity = (kindOfActivity: IKindOfActivityWithoutId): KindsOfActivityThunkResult => async (dispatch) => {
    try {
        const response = await kindsOfActivityApi.add(kindOfActivity)

        dispatch(_addKindOfActivity(response))
    } catch (e) {
        dispatch(setError(true))
        console.error(e)
    }
}

export const editKindOfActivity = (kindOfActivity: IKindOfActivity): KindsOfActivityThunkResult => async (dispatch) => {
    try {
        const response = await kindsOfActivityApi.edit(kindOfActivity)

        dispatch(_editKindOfActivity(response))
    } catch (e) {
        dispatch(setError(true))
        console.error(e)
    }
}

export const deleteKindOfActivity = (kindOfActivityId: string): KindsOfActivityThunkResult => async (dispatch) => {
    try {
        const response = await kindsOfActivityApi.delete(kindOfActivityId)

        dispatch(_deleteKindOfActivity(response))
    } catch (e) {
        dispatch(setError(true))
        console.error(e)
    }
}