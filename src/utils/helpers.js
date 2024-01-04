export const calculateProgress = (taskGroups) => {
  const totalValue = taskGroups.reduce((sum, group) =>
    sum + group.tasks.reduce((groupSum, task) => groupSum + task.value, 0), 0)
  if (totalValue === 0) return 0
  const checkedValue = taskGroups.reduce((sum, group) =>
    sum + group.tasks.reduce((groupSum, task) => task.checked ? groupSum + task.value : groupSum, 0), 0)
  return Math.floor(checkedValue * 100 / totalValue)
}
