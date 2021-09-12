import {AcTypes, UserType} from "../HW8"

export const homeWorkReducer = (state: Array<UserType>, action: AcTypes): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let copyState = [...state]

            return copyState.sort((a, b) => a.name > b.name ? 1 : -1)
        }
        case 'check': {
            let filteredByAge = state.filter((p => p.age > 18))
            return filteredByAge

        }
        case "sortDown": {
            const copyState = [...state]

            return copyState.sort((a, b) =>
                a.name > b.name ? -1 : 1
            )

        }

        default:
            return state
    }
}
