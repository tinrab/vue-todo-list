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
                :todo="todo" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mutations from '@/mutationTypes';
import Todo from '@/todo';
import TodoItem from '@/components/TodoItem.vue';

@Component({
  components: {
    TodoItem,
  },
})
export default class Home extends Vue {
  newTodo: String = '';

  onAddTodo(): void {
    this.$store.commit(mutations.addTodo, {
      text: this.newTodo,
    });
    this.newTodo = '';
  }

  get todos(): Todo[] {
    console.log(this.$store.getters.todos);
    return this.$store.getters.todos;
  }
}
</script>
