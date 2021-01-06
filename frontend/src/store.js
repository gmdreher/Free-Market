// import { applyMiddleware, compose, createStore } from 'redux';
// import thunk from 'redux-thunk';

// const initialState = {
//     listProduct: [],
//     // categorylist: []
// };

// function reducer(state = initialState, action) {

//     console.log(action);
//     switch (action.type) {
//         case 'LIST_PRODUCT': {
//             return {
//                 ...state,
//                 listProduct: action.payload
//             }
//         }
//         // case 'LIST_CATEGORY': {
//         //     return {
//         //         ...state,
//         //         categorylist: action.payload
//         //     }
//         // }

//         default: {
//             return state
//         }
//     }

// }


// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     reducer,
//     initialState,
//     composeEnhancer(applyMiddleware(thunk))
// );

// export default store;