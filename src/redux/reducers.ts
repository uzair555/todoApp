// reducers.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

interface TodoItem {
  // id: string;
  // text: string;
}

// interface AuthState {
//   username: string;
//   password: string;
// }

// const initialAuthState: AuthState = {
//   username: '',
//   password: '',
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: initialAuthState,
//   reducers: {
//     login: (
//       state,
//       action: PayloadAction<{username: string; password: string}>,
//     ) => {
//       console.log(state.username, 'state');
//       console.log(action.payload.username, 'action.payload.username');
//       // Perform your login validation here, e.g., API call
//       // For this example, let's just set the username
//       state.username = action.payload.username;
//     },
//   },
// });

const todoSlice = createSlice({
  name: 'todo',
  initialState: [] as TodoItem[],
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoItem = {
        id: uuid.v4(),
        text: action.payload,
      };
      state.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    removeAllTodos: state => {
      state.splice(0, state.length);
    },
  },
});

// export const {login} = authSlice.actions;
export const {addTodo, removeTodo, removeAllTodos} = todoSlice.actions;

export default {todo: todoSlice.reducer};
