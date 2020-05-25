export function updateResult(score, severity) {
  return function(dispatch) {
    const result = { score, severity };
    dispatch({ type: "UPDATE_RESULT", result });
  }
}
