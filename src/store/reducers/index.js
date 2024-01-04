import { combineReducers } from '@reduxjs/toolkit'
import { tasksReducer } from './tasks/taskReducer'

const rootReducer = combineReducers({
  tasks: tasksReducer
})

export default rootReducer