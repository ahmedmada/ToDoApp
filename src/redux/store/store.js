import { createStore, combineReducers } from 'redux'
import todoReducer from '../reducers/todoReducer'

const rootReducer = combineReducers({
  todoReducer: todoReducer
})

const store = () => createStore(rootReducer)

// const configureStore = () => {
//   return { store };
// };

export default store
// export { store };
