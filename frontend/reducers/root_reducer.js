import merge from 'lodash/merge';
import bleatsReducer from './bleats_reducer';
import usersReducer from './users_reducer';
import { combineReducers } from 'redux';

//Each reducer is only responsible for its slice of state
//Have a normalized state 
// { bleats: {1: "Hello"}, users: {1: "Tommy"}}
//Bleats should represent bleats, users should represent users, etc. 
//Therefore we pass only part of state reducer cares about

const rootReducer = (state = {}, action) => {
  // debugger;
  return {
    bleats: bleatsReducer(state.bleats, action),
    users: usersReducer(state.users, action),
    // locations: locationsReducer(state.locations, action)
  };
};

// const rootReducer = combineReducers({
//   bleats: bleatsReducer,
//   // locations: locationsReducer
// });


export default rootReducer;