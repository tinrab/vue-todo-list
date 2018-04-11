import Vue from 'vue';
import Vuex from 'vuex';

import Todo from './todo';

Vue.use(Vuex);

export type ActionFunction = (payload: any) => void;

export const store = new Vuex.Store({
  state: {
    todos: [] as Todo[],
    nextTodoId: 1,
  },
  mutations: {
    addTodo(state, payload: { text: string }) {
      const todo = new Todo(state.nextTodoId++, payload.text);
      state.todos.push(todo);
    },
    completeTodo(state, payload: { id: number }) {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    }
  },
  actions: {
    addTodo({ commit }, payload: { text: string }) {
      commit('addTodo', payload);
    },
    completeTodo({ commit }, payload: { id: number }) {
      commit('completeTodo', payload);
    }
  },
  getters: {
    todos: (state) => {
      return state.todos;
    },
  }
});
