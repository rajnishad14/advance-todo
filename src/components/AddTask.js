import React, { useContext, useState } from 'react'
import { TodoContext } from '../context'

const AddTask = () => {
  const [task, setTask] = useState('')
  const [desc, setDesc] = useState('')
  const { addTask, taskList } = useContext(TodoContext)
  const handleClick = () => {
    const find = taskList.find((ele) => ele.task === task)
    if (!find) {
      const newTask = {
        id: new Date().getTime().toString(),
        task,
        desc,
        bgcolor: true,
        sub: [],
      }
      addTask(newTask)
      setTask('')
      setDesc('')
    }
  }
  return (
    <div className="add-task">
      <h1>Add Task</h1>
      Task title:
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      Task description:
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <button onClick={() => handleClick()}>Save</button>
    </div>
  )
}

export default AddTask
