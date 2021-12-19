import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions/todoTypes'

const initialState = {
  todoList: []
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat(action.data)
      }
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(
          ({ id }) => id !== action.data)
      }
    case COMPLETE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.id === action.data) {
            item.completed = !item.completed
          }
          return item
        })
      }
    default:
      return state
  }
}

export default todoReducer
