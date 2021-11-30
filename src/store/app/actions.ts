export const _setError = (error: boolean) => ({
    type: 'app/SET_ERROR',
    payload: error
} as const)