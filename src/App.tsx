import { useState } from 'react'
import './App.css'
import Button from './components/buttons/Button.tsx'
import ListElement from './components/list_element/ListElement.tsx'

function App() {
  const [taskName, setTaskName] = useState("")
  const [tasks, setTasks] = useState([] as string[])

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value)
  }

  const addTask = () => {
    setTasks([...tasks, taskName])
    setTaskName("")
  }

  const deleteTask = (pos: number) => {
    setTasks(tasks.filter((_, i) => i !== pos))
  }

  return (
    <>
      <h2>To-Do List</h2>
      <div className='task-form'>
        <input type="text" onChange={handleTaskNameChange} value={taskName}/>
        <Button text="Click me" onClick={addTask} disabled={taskName === ""}/>
      </div>
      <div className='task-gallery'>
        {tasks.map((task, index) => (
          <ListElement key={index} element_number={index} text={task} class_name="task" onClick={() => deleteTask(index)}/>
        ))}
      </div>
    </>
  )
}

export default App
