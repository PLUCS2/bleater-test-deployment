import APIUtil from '../util/apiUtil';

export const ADD_BLEAT = "ADD_BLEAT";
export const RECEIVE_BLEAT = "RECEIVE_BLEAT"; 
export const RECEIVE_BLEATS = "RECEIVE_BLEATS"; 

export const receiveBleats = ({bleats, users}) => {
  // debugger; 
  return {
    type: RECEIVE_BLEATS, 
    bleats,
    users
  }
};

export const receiveBleat = (bleat) => {
  // debugger;
  return {
    type: RECEIVE_BLEAT,
    bleat
  }
}

export const fetchBleat = id => dispatch => {
  return APIUtil.fetchBleat(id).then(bleat => dispatch(receiveBleat(bleat))); 
}

//thunk action creator, gets dispatched in component, intercepted by thunk middleware 
//thunk middleware invokes with store.dispatch (since it is a function)
//once API ajax request resoves, .then is triggered (success callback)
//send an action to thunk middlware (this time with a POJO that has raw data)
//thunk middleware passes to rootReducer/next piece in chain since it is not a function

export const fetchBleats = () => { //invoked in component
  // debugger; 
  return (dispatch) => { //invoked by thunk (dispatch = store.dispatch)
    // debugger; 
    return APIUtil.fetchBleats().then(payload => { //APIUtil.fetchBleats - AJAX request, return value is used to make POJO
      // debugger
      dispatch(receiveBleats(payload)) //dispatch - send to thunk middleware
    })
  }
}

export const createBleat = body => {
  // debugger; 
  return (dispatch) => { //thunk invokes here with dispatch, because it hits thunk as a function
    // debugger; 
    return APIUtil.createBleat(body).then(bleat => {
      // debugger; 
      dispatch(receiveBleat(bleat)) //when we dispatch this, receiveBleat(bleat) returns a POJO, 
                                    //so thunk passes through to reducers 
    })
  }
}
//Thunk action creator


// let nextId = 0;
// export const addBleat = (body) => {
//   nextId++;
//   return {
//     type: ADD_BLEAT, 
//     bleat: {id: nextId, body: body, author_id: 1}
//   };
// };

// window.addBleat = addBleat;

