const initState = {
 isLoading:false
}
export type initStateType= typeof initState

export const loadingReducer = (state:initStateType = initState, action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        case 'Loading': {
            return {...state,isLoading: action.load}
        }
        default: return state
    }
}
type loadingACType=ReturnType<typeof loadingAC>
export const loadingAC = (load:boolean) => {
    return{
        type:"Loading",
        load
    } as const

} // fix any