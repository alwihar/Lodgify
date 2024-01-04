import { TASK_ACTIONS } from '../../../constants/actions'

export const tasksReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TASK_ACTIONS.SET_TASKS:
      return {
        ...state,
        tasks: payload
      }

    case TASK_ACTIONS.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(group => ({
          ...group,
          tasks: group.tasks.map(task =>
            task.description === payload.description && group.name === payload.groupName
              ? { ...task, checked: !task.checked }
              : task
          )
        }))
      }

    default:
      return state
  }
}

const INITIAL_STATE = {
  tasks: []
}
