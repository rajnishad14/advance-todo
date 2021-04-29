import React, { useState } from 'react'
const TodoContext = React.createContext()
const TodoContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([])
  const addTask = (val) => {
    setTaskList([...taskList, val])
  }
  const addSub = (id, val) => {
    const taskListCopy = [...taskList]
    taskListCopy.find((ele) => ele.id === id).sub.push({ val, complete: false })
    setTaskList([...taskListCopy])
  }
  const deleteTask = (id) => {
    let copyTaskList = [...taskList]
    copyTaskList = copyTaskList.filter((ele) => ele.id !== id)
    setTaskList(copyTaskList)
  }
  return (
    <TodoContext.Provider
      value={{ taskList, addTask, addSub, setTaskList, deleteTask }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoContextProvider }
