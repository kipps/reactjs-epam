const initialState = {
  item: {
    id: 0,
    title: 'string',
    tagline: 'string',
    vote_average: 0,
    vote_count: 0,
    release_date: 'string',
    poster_path: 'string',
    overview: 'string',
    budget: 0,
    revenue: 0,
    runtime: 0,
    genres: []
  }
}

export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_MOVIES':
      return { ...state, Movies: action.payload }
    default:
      return state
  }
}
