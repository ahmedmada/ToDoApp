import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from './todoTypes'

let nextTodoId = 0

export const addTodo = (task,tag) => ({
  type: ADD_TODO,
  data: {
    id: nextTodoId++,
    title: task,
    tag: tag,
    completed: false
  }
})
export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  data: todoId
})

export const completeTodo = (todoId) => ({
  type: COMPLETE_TODO,
  data: todoId
})
