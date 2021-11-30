import {IRegion} from '../../types/dto'

export const setRegions = (regions: IRegion[]) => ({
    type: 'regions/SET_REGIONS',
    payload: regions
} as const)