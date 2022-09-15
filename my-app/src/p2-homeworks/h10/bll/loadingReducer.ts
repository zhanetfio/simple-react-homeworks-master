const initState = {
loading:false
}

export const loadingReducer = (state = initState, action: LoadingAT): typeof initState => { // fixed any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {
                ...state,
                loading: action.loading
            }
        }
        default: return state
    }
}
type LoadingAT={
    type:'CHANGE-LOADING',
    loading:boolean
}

export const loadingAC = (loading:boolean): LoadingAT => ({type:'CHANGE-LOADING',loading}) // fix any