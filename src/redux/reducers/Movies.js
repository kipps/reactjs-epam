const initialState = {
  movies: [
    {
      id: 1,
      type: 'test'
    }
  ]
}

export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_MOVIES':
      return { ...state, movies: action.payload }
    case "FETCH_REQUEST":
      return state;
    case "FETCH_SUCCESS":
      return {...state, posts: action.payload};
    default:
      return state
  }
}
