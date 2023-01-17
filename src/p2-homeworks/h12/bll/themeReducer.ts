
type ThemeStateType={
    theme:string
}

const initState = {
    theme: 'green'
};

type ActionType= ReturnType<typeof  changeThemeAC>
export const themeReducer = (state:ThemeStateType = initState, action: ActionType): ThemeStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state,
                theme:action.newTheme
            };
        }
        default:
            return state;
    }
};

export const changeThemeAC = (newTheme:string)  => {
    return{
        type:"CHANGE-THEME",
        newTheme
    }as const
}; // fix any