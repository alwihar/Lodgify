import { TASK_ACTIONS } from '../../../constants/actions'

export const setTasks = tasks => ({
  type: TASK_ACTIONS.SET_TASKS,
  payload: tasks
})

export const toggleTask = (groupName, taskDescription) => ({
  type: TASK_ACTIONS.TOGGLE_TASK,
  payload: { groupName, description: taskDescription }
})
