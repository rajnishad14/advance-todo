import React, { useContext } from 'react'
import { TodoContext } from '../context'
import SingleTask from './SingleTask'

const DisplayTask = () => {
  const { taskList } = useContext(TodoContext)
  return (
    <div className="display-task">
      <h1>Task List</h1>
      <div>
        {taskList.map((ele) => {
          return <SingleTask key={ele.id} {...ele} />
        })}
      </div>
    </div>
  )
}

export default DisplayTask
