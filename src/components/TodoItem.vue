<template>
  <div>
    {{todo.text}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Todo from '@/todo';

@Component
export default class TodoItem extends Vue {
  @Prop() todo: Todo;
}
</script>
