import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutationTypes';
import Todo from './todo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: <Todo[]>[],
    nextTodoId: 1,
  },
  mutations: {
    [mutations.addTodo](state, payload: { text: string }): void {
      const todo = new Todo(state.nextTodoId++, payload.text);
      state.todos.push(todo);
    },
  },
  actions: {
  },
  getters: {
    todos: state => {
      return state.todos;
    },
  }
});
