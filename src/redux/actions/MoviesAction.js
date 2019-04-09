export function showMovies(Movies) {
  return {
    type: 'SHOW_MOVIES',
    payload: Movies,
  }
}

export const setYear = (year) => {
  return {
    type: 'SET_YEAR',
    payload: year,
  }
}
