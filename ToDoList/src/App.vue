<template>
  <div class="toDo">
    <h1 class="title">Список задачь</h1>
    <TaskList />
    
  </div>
</template>

<script setup>
import TaskList from "./components/TaskList.vue";
</script>


<style lang="scss" scoped>
.todolist {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #fcfeff, #eef6fb, #dbeaf5);
  padding: 20px;
}

.title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

</style>