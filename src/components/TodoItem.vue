<template>
  <div>
    {{todo.text}}
    <button @click="onCompleteClick(todo.id)">x</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

import Todo from '@/todo';

@Component
export default class TodoItem extends Vue {
  @Prop() private todo?: Todo;

  @Emit('complete')
  private onCompleteClick(id: number) { }
}
</script>
