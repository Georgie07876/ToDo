<script setup lang = 'ts'>
defineProps<{ 
    task: Task 
}>()
</script>

<template>
    <div class="task">
        {{ task.title }}
    </div>
</template>

<style>

</style>