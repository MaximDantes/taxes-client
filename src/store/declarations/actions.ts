import {IDeclaration} from '../../types/dto'

export const setDeclarations = (declarations: IDeclaration[]) => ({
    type: 'declarations/SET_DECLARATIONS',
    payload: declarations
} as const)