export interface serviceResponse<T>{
    error: boolean,
    data?: T
    errorMessage?: string
}