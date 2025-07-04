import { computed, ref } from "vue";   
import { useTaskStore } from "../store/useTaskStore";

export type FilterType = "all" | "completed" | "active";
export function useTaskFilter() {
  const store = useTaskStore()
  const filter = ref<FilterType>('all')

  const filteredTasks = computed(() => {
    switch (filter.value) {
      case 'active':
        return store.tasks.filter(t => !t.done)
      case 'completed':
        return store.tasks.filter(t => t.done)
      default:
        return store.tasks
    }
  })

  function setFilter(type: FilterType) {
    filter.value = type
  }

  return {
    filteredTasks,
    filter,
    setFilter,
  };
}