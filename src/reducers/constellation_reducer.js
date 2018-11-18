import { SELECT_CONSTELLATION } from '../actions/index';

let initialState = [];

function constellation(state = initialState, action){
  switch(action.type) {
    case SELECT_CONSTELLATION:
      console.log('inside reducer with: ', action.type);
      let constellation = action.payload;
      let array = [];
      array.push(constellation);
      return array;
    default:
  console.log(state);
      return state;
  }
}

export default constellation;