export interface ITax {
    id: string
    title: string
}

export interface IRegion {
    id: string
    title: string
}

export interface IKindOfActivityWithoutId {
    title: string
    useInSimpleTax: boolean
}

export interface IKindOfActivity extends IKindOfActivityWithoutId{
    id: string
}

export interface IPayerWithoutId {
    name: string
    surname: string
    secondName: string
    passport: string
    regionId: string
    kindOfActivityId: string
}

export interface IPayer extends IPayerWithoutId{
    id: string
}

export interface ITaxRate {
    id: string
    value: number
    taxId: string
    regionId?: string
}

export interface IDeclaration {
    id: string
    payerId: string
    term: Date
    date: Date
    sum: number
}