import React, {useState} from 'react'

import TaskItem from './../taskItem/TaskItem'
import groupIcon from '../../assets/booking-features.svg'
import completedIcon from '../../assets/booking-ok.svg'
import arrowIcon from '../../assets/arrow-line-down.svg'
import './TaskGroup.scss'

function TaskGroup({ group }) {
  const [showTasks, setShowTasks] = useState(false)
  const isGroupCompleted = group.tasks.every(task => task.checked)

  return (
    <div className="task-group">
      <div className="group-title" onClick={() => setShowTasks(!showTasks)}>
        <div className="group-text">
          <img src={isGroupCompleted ? completedIcon : groupIcon} alt="group-icon" className="group-icon" />
          <span className={isGroupCompleted ? 'group-completed' : 'group-text'}>{group.name}</span>
        </div>
        <div className="hide-and-show">
          <span>{showTasks ? 'Hide' : 'Show'}</span>
          <img src={arrowIcon} alt="arrow-icon" className={showTasks ? 'toggle-icon rotated' : 'toggle-icon'} />
        </div>
      </div>
      {showTasks && <div className="task-items">
        {group.tasks.map((task, index) => (
          <TaskItem key={task.description} task={task} groupName={group.name} />
        ))}
      </div>}
    </div>
  )
}

export default TaskGroup
