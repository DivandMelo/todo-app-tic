import { create } from 'zustand';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { persist, createJSONStorage } from 'zustand/middleware';

export type Todo = {
  checked: boolean;
  id: string;
  title: string;
  date: Date;
  note: string;
};

type Store = {
  todos: Todo[];
  addTodo: (d: Todo) => void;
  checkTodo: (id: string, d: boolean) => void;
}

export const useBoundStore = create(
  persist<Store>(
    (set, get) => ({
      todos: [],
      addTodo: (data: Todo) => set({ todos: [...get().todos, data] }),
      checkTodo: (id: string, checked: boolean) => set({
        todos:
          get().todos.map((todo) => todo.id === id ? { ...todo, checked } : todo),
      })
    }),
    {
      name: 'todo',
      storage: createJSONStorage(() => AsyncStorage)
    },
  )
)
