<template>
  <div class="task-filter">
    <button
      v-for="opt in options"
      :key="opt"
      :class="{ active: opt === current }"
      @click="$emit('update', opt)"
    >
      {{ labels[opt] }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FilterType } from '../composables/useTaskFilter'

const props = defineProps<{ current: FilterType }>()
const emit = defineEmits<(e: 'update', val: FilterType) => void>()

const options: FilterType[] = ['all', 'active', 'completed']
const labels = { all: 'Все', active: 'Активные', completed: 'Выполненные' }
</script>

<style lang="scss" scoped>

.task-filter {
    padding-top: 40px ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction:row;

    button {
        padding: 12px 20px;
        color: #fff;
        background: #409eff;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        border: none;
        transition: background-color 0.3s ease;
        
        &:hover {
            cursor: pointer;
            background-color: #337ecc;
        }
    }

}

</style>