import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setTasks } from '../../store/actions/tasks/taskActions'
import TaskGroup from './../taskGroup/TaskGroup'
import { tasksApi } from '../../constants/api'
import ProgressBar from '../progressBar/ProgressBar'
import { calculateProgress } from '../../utils/helpers'
import './MainWidget.scss'

function MainWidget() {
  const dispatch = useDispatch()
  const taskGroups = useSelector(state => state.tasks.tasks)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(tasksApi)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        dispatch(setTasks(data))
      } catch (error) {
        console.error("Fetching error: ", error)
      }
    }

    fetchData()
  }, [dispatch])

  useEffect(() => {
    const newProgress = calculateProgress(taskGroups)
    setProgress(newProgress)
  }, [taskGroups])

  return (
    <div className="main-widget">
      <div className="progress">
        <p className="progress-title">Lodgify Grouped Tasks</p>
        <ProgressBar completion={progress} />
      </div>
      <div className="task-groups">
        {taskGroups.map((group, index) => (
          <TaskGroup key={index} group={group} />
        ))}
      </div>
    </div>
  )
}

export default MainWidget
