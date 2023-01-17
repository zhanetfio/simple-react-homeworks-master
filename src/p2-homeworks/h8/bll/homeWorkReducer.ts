import {UserType} from "../HW8";



type ActionType ={type:"SORT",payload:"up" | "down"}  | {type: "CHECK", payload:number}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'SORT': {
            const copyState=[...state]
            const newState=copyState.sort((a,b)=>{
                if(a.name>b.name){
                    return 1
            }else if(a.name<b.name){
                    return -1
                }
                return 0
        })
            return action.payload ==="up" ? newState:newState.reverse()
                  }
        case 'CHECK': {
            const copyState=[...state]
            const newState= copyState.filter(a=>a.age>=action.payload)
               return newState

            // need to fix

        }
        default:
            return state
    }
}
