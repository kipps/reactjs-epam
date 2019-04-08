export const initialState = {
    user: {
        name: 'Шевченко',
        surname: 'Роман',
        age: 27,
    }
}
export function rootReducer(state = initialState) {
    return state
}
