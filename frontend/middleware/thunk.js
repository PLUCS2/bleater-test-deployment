const thunk = store => next => action => { //next here is a closed over curried function
    // debugger; 
    if (typeof action === "function") {
        // debugger; 
        return action(store.dispatch)
    }
    // debugger; 
    return next(action)
}

export default thunk; 

//thunk has dispatch because all middleware has access to store 
// Either a POJO or an ajax request (initiating an HTTP request response cycle)
//if a function - invoke it, passing in dispatch so that action can dispatch when necessary 
// function = ajax request that will make an object/POJO when it receives info from backend 
//if a POJO pass to next - root reducer or other middleware 