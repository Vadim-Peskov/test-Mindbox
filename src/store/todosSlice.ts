import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";

const todosList: Todo[] = [
  { "id": 1, "status": "completed", "todoText": "Изучить React" },
  { "id": 2, "status": "completed", "todoText": "Изучить Redux-toolkit" },
  { "id": 3, "status": "active", "todoText": "Изучить NextJS" },
  { "id": 4, "status": "active", "todoText": "Изучить React Native" },
  { "id": 5, "status": "active", "todoText": "Получить власть над миром" },
]

export type todosState = {
  todos: Todo[]
}

export const initialState: todosState = {
  todos: todosList
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      if (action.payload) {
        state.todos.unshift({
          "id": Date.now(),
          "status": 'active',
          "todoText": action.payload
        })
      }
    },
    changeTodoStatus(state, action: PayloadAction<number>) {
      state.todos = state.todos.map(item => {
        if (item.id === action.payload) {
          if (item.status === 'active') return {...item, 'status': 'completed'}
          else return {...item, 'status': 'active'}
        }
        else return item
      })
    },
    clearCompletedTodos(state) {
      state.todos = state.todos.filter(item => item.status === 'active')
    }
  }
})

export const { addTodo, changeTodoStatus, clearCompletedTodos } = todosSlice.actions
export default todosSlice.reducer