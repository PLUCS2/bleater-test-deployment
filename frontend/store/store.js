import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk'; 
import logger from 'redux-logger';

const preloadedState = {}; 

// const myMiddleware = function (store) {
//     debugger;
//     return function (next) {
//         debugger; 
//         return function (action) {
//             debugger; 
//             next(action);
//             store; 
//             next; 
//             action; 
//         };
//     };
// }; 

// const otherMiddleware = function (store) {
//     debugger;
//     return function (next) {
//         debugger;
//         return function (action) {
//             debugger;
//             next(action);
//             store;
//             next;
//             action; 
//         };
//     };
// }; 

const store = createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk, logger));
export default store;

// Three arguments, 
// 1. Reducer thats return value represents store
// 2. Pre-loaded state 
// 3. Middleware chain 

//applyMiddleware passes the store to each middleware in the order it is passed in 
//---- in this example: first myMiddleware, then otherMiddleware 
//the "next" of the LAST piece of middleware is the rootReducer 
//---- in this example otherMiddleware next passes to rootReducer 
//moving "backwards", "next" is passed back 
//---- next comes from previous middleware (in terms of back to front)
// when all are invoked, a function is returned expecting an action 
// IE all middlware are "defined" and waiting for an action to be dispatched
//front to back (with store), then back to front (next), then front to back when an action is dispatched (action)

// store.dispatch({
//   type: "ADD_BLEAT", 
//   bleat: {id: 4, body: "idk", author_id: 1}
// });
// store.getState();


// {
//   bleats: {
//     1: {id: 1, body: "something", author_id: 1},
//     3: {id: 3, body: "something else", author_id: 1}
//   },
//   locations: {
//     1: {id: 1, name: "Argentina"},
//     2: {id: 2, name: "NYC"}
//   }
//  
// }