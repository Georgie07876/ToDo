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
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
  padding: 20px;

  h1 {
    color:whitesmoke;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    
  }
}

.title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

</style>