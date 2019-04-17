const initialState = {
  name: 'Roman Shevchenko',
  year: 1987
}
export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_YEAR':
      return { ...state, year: action.payload }
    default:
      return state
  }
}
