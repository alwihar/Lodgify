import React from 'react'

import './ProgressBar.scss'

function ProgressBar({ completion }) {
  return (
    <div className="progress-bar">
      <div style={{ width: `${completion}%` }} className="completed-bar">
        <span>{completion}%</span>
      </div>
    </div>
  )
}

export default ProgressBar