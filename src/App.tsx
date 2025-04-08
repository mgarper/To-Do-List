import { useState } from 'react'
import './App.css'
import Button from './components/buttons/Button.tsx'
import ButtonFilter from './components/buttons/ButtonFilter.tsx'
import ListElement from './components/list_element/ListElement.tsx'

type taskType = {
  id: number;
  name: string;
  completed: boolean;
}

function App() {
  const [taskName, setTaskName] = useState("")
  const [tasks, setTasks] = useState<taskType[]>([])
  const [filter, setFilter] = useState<string[]>([])

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value)
  }

  const addTask = () => {
    let newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    }
    setTasks([...tasks, newTask])
    setTaskName("")
  }

  const toggleCompleted = (id: number) => {
    let taskList = [...tasks]
    console.log(taskList)
    let taskIndex = taskList.findIndex((task) => task.id === id)
    taskList[taskIndex].completed = !taskList[taskIndex].completed
    console.log(taskList)
    setTasks(taskList)
  }

  const filterCompleted = () => {
    if (filter.includes("completed")) {
      setFilter(filter.filter((f) => f !== "completed"))
    } else {
      setFilter([...filter, "completed"])
    }
  }

  const filterPending = () => {
    if (filter.includes("pending")) {
      setFilter(filter.filter((f) => f !== "pending"))
    } else {
      setFilter([...filter, "pending"])
    }
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => id !== task.id))
  }

  return (
    <>
      <h2>To-Do List</h2>
      <div className='task-form'>
        <input type="text" onChange={handleTaskNameChange} value={taskName}/>
        <Button text="Add task" onClick={addTask} disabled={taskName === ""}/>
      </div>
      {tasks.length === 0 ? <p>No tasks are registered</p> : (
        <div className='filter-buttons'>
          <Button text="Delete all" onClick={() => setTasks([])}/>
          <ButtonFilter text='Show completed' onClick={filterCompleted} isActive={false}/>
          <ButtonFilter text='Show pending' onClick={filterPending} isActive={false}/>
        </div>
      )}
      <div className='task-gallery'>
        {tasks.map((task, index) => {
          if (filter.length === 1) {
            if (filter.includes("completed") && !task.completed) {
              return null
            }
            if (filter.includes("pending") && task.completed) {
              return null
            }
            return (
              <ListElement 
                key={task.id}
                element_number={index + 1}
                text={task.name}
                class_name="task"
                isCompleted={task.completed}
                onChange={() => toggleCompleted(task.id)}
                onClick={() => deleteTask(task.id)}
              />
            )
          } else {
            return (
              <ListElement 
                key={task.id}
                element_number={index + 1}
                text={task.name}
                class_name="task"
                isCompleted={task.completed}
                onChange={() => toggleCompleted(task.id)}
                onClick={() => deleteTask(task.id)}
              />
            )
          }
        })}
      </div>
    </>
  )
}

export default App
