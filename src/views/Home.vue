<template>
  <div>
    <div>
      <form>
        <input v-model="newTodo"
               placeholder="New todo...">
        <button @click.prevent="onAddTodo">+</button>
      </form>
    </div>
    <div>
      <TodoItem v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
                @complete="onCompleteTodo" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Action } from 'vuex-class';

import { ActionFunction } from '@/store';
import Todo from '@/todo';
import TodoItem from '@/components/TodoItem.vue';

@Component({
  components: {
    TodoItem,
  },
})
export default class Home extends Vue {
  @State('todos')
  private todos: Todo[];
  @Action('addTodo')
  private addTodo: ActionFunction;
  @Action('completeTodo')
  private completeTodo: ActionFunction;

  private newTodo: string = '';

  private onAddTodo() {
    this.addTodo({ text: this.newTodo });
    this.newTodo = '';
  }

  private onCompleteTodo(id: number) {
    this.completeTodo({ id });
  }
}
</script>
