import { ADD_BLEAT, RECEIVE_BLEATS, RECEIVE_BLEAT } from '../actions/bleat_actions';

//state is only the bleats slice of state 
//updates state 
//triggers a rerender to anything listening to slice of state 

const bleatsReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger;
  switch (action.type) {
    case ADD_BLEAT:
      const newBleat = action.bleat;
      return Object.assign({}, state, {
        [newBleat.id]: newBleat
      });
      // state[newBleat.id] = newBleat; don't modify old state!!!
    case RECEIVE_BLEATS: 
      // const newBleats = {}; 
      // action.bleats.forEach(bleat => newBleats[bleat.id] = bleat);
      // return Object.assign({}, state, newBleats); 
      return action.bleats;
    case RECEIVE_BLEAT:
      // debugger; 
      return Object.assign({}, state, { [action.bleat.id]: action.bleat }); 
      //merge is a deep dup (import lodash), Object.assign does not - shallow dup 
    default:
      return state;
  }
};

export default bleatsReducer;