import React from 'react'
import { useDispatch } from 'react-redux'

import { toggleTask } from '../../store/actions/tasks/taskActions'
import './TaskItem.scss'

function TaskItem({ groupName, task }) {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(toggleTask(groupName, task.description))
  }

  return (
    <div className="task-item">
      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={task.checked}
            onChange={handleCheckboxClick}
          />
          <div className="custom-checkbox"/>
          {task.description}
        </label>
      </div>
    </div>
  );
}

export default TaskItem
