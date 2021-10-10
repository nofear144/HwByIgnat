const initState = {
  themes:""
};
type initStateType={themes:string}

export const themeReducer = (state:initStateType = initState, action: changeThemeCType): initStateType => {
    switch (action.type) {
        case "args": {
            return {...state,themes:action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme:string) => {
    return{
        type:"args",
        theme
    } as const

};

type changeThemeCType=ReturnType<typeof changeThemeC>
// fix any