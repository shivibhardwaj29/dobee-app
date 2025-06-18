import { createSlice } from '@reduxjs/toolkit';

const loadFromStorage = () => {
  const saved = localStorage.getItem('todos');
  return saved ? JSON.parse(saved) : [];
};

const saveToStorage = (state) => {
  localStorage.setItem('todos', JSON.stringify(state));
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: loadFromStorage(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      saveToStorage(state);
    },
    toggleComplete: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      saveToStorage(state);
    },
    deleteTodo: (state, action) => {
      const newState = state.filter(t => t.id !== action.payload);
      saveToStorage(newState);
      return newState;
    }
  }
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
