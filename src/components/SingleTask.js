import React, { useContext, useState } from 'react'
import { TodoContext } from '../context'

const SingleTAsk = ({ id, task, desc, sub, bgcolor }) => {
  const [subTask, setSubTask] = useState('')
  const { addSub, deleteTask } = useContext(TodoContext)
  const [show, setShow] = useState(false)
  const changeStyle = (id, eleId) => {
    const selected = document.getElementById(`${id}`)
    if (selected.className === 'strike') {
      selected.className = 'normal'
    } else {
      selected.className = 'strike'
    }
  }

  return (
    <div className={bgcolor ? 'single-task' : 'single-task complete'}>
      <div className="head">
        <h2>{task}</h2>
        <span>
          <button onClick={() => setShow(true)}>+</button>
          <button
            onClick={() => {
              deleteTask(id)
            }}
          >
            X
          </button>
        </span>
        <p>{desc}</p>
      </div>
      <ul>
        {sub.map((ele, i) => {
          return (
            <li key={i}>
              <input
                type="checkbox"
                onClick={() => {
                  changeStyle(ele.val, id)
                  ele.complete = !ele.complete
                }}
              />
              <span id={ele.val}>{ele.val}</span>
            </li>
          )
        })}
      </ul>
      <div>
        {show && (
          <>
            <input
              type="text"
              value={subTask}
              onChange={(e) => setSubTask(e.target.value)}
            />
            <button
              onClick={() => {
                if (subTask) {
                  addSub(id, subTask)
                  setSubTask('')
                  setShow(false)
                }
              }}
            >
              add
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default SingleTAsk
