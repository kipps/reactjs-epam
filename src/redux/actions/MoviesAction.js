export function showMovies(Movies) {
  return {
    type: 'SHOW_MOVIES',
    payload: Movies,
  }
}