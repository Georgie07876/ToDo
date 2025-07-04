<template>
  <div class="to-do">
    <h1 class="title">Список задач</h1>
    <TaskList />
    
  </div>
</template>

<script setup>
import TaskList from "./components/TaskList.vue";
</script>


<style lang="scss" scoped>
.to-do {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #458b3c, #87a236, #b18e1b);
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