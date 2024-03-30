import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getTodos: (state, action) => {
      const data = JSON.parse(localStorage.getItem('QuadBTodos'));
      if (data) {
        state.todos = data;
      }
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("QuadBTodos", JSON.stringify(state.todos));
    },

    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((e) => e.id != action.payload.index);
      state.todos = newTodos;
      localStorage.setItem("QuadBTodos", JSON.stringify(state.todos));
    },

    updateTodo: (state, action) => {
      const updatedTodos = state.todos.map((i) => {
        if (i.id == action.payload.editDataIndex) {
          return action.payload.data
        } else {
          return i;
        }
      })
      state.todos = updatedTodos;
      localStorage.setItem("QuadBTodos", JSON.stringify(state.todos));
    },

    completeTodos: (state, action) => {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            status: "completed",
          };
        } else {
          return todo;
        }
      })
      state.todos = updatedTodos;
      localStorage.setItem("QuadBTodos", JSON.stringify(state.todos));
    },

    setToPendingTodos: (state, action) => {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            status: "pending",
          };
        } else {
          return todo;
        }
      })
      state.todos = updatedTodos;
      localStorage.setItem("QuadBTodos", JSON.stringify(state.todos));
    },
  },
})

export const { addTodo, deleteTodo, updateTodo, getTodos, completeTodos, setToPendingTodos } = todoSlice.actions
export default todoSlice.reducer