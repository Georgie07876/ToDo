<script setup lang = 'ts'>
import TodoItem from './components/todo/TodoItem.vue'
import { ref } from 'vue'

const tasks = ref([{ id: 1, title: 'первая задача', status: 'pending' }])
</script>

<template>
  <TodoItem :task="tasks[0]"/>
</template>

<style>

</style>