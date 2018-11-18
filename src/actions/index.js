export const SELECT_CONSTELLATION = 'SELECT_CONSTELLATION';

export function selectConstellation(name) {
  let action = {
    type: SELECT_CONSTELLATION,
    payload: name
  }

  console.log("WOO" , action.payload);
  return action;
}