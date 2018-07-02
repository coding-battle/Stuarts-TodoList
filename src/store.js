import { createStore } from 'redux'

import rootReducer from './reducers';



const localState = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : {};
export default(initialState) => {
    return createStore(rootReducer, localState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}