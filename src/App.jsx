import './App.css'
import Header from './components/Header'
import Board from './components/Board'
import Footer from './components/Footer'
import TaskModal from './components/TaskModal'
import EditTask from './components/EditTask'
import { useState, useEffect } from 'react'

function App() {

  const [modalOpen, setModalOpen] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:5174/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [])

  async function buscarTasks() {
    const response = await fetch('http://localhost:5174/tasks')
    const data = await response.json()
    setTasks(data)
  }


  async function adicionarTask(novaTask) {
    const response = await fetch('http://localhost:5174/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novaTask)
    })
    buscarTasks()
  }

  async function atualizarStatus(id, novoStatus) {
    const response = await fetch(`http://localhost:5174/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: novoStatus })
    })
    const data = await response.json()
    const tarefasAtualizadas = tasks.map(task => {
      if (task.id === id) {
        return { ...task, status: data.status }
      }
      return task
    })
    setTasks(tarefasAtualizadas)
  }

  async function atualizarTask(id, dadosAtualizados) {
    const response = await fetch(`http://localhost:5174/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosAtualizados)
    })
    const data = await response.json()
    const tarefasAtualizadas = tasks.map(task => {
      if (task.id === id) {
        return { ...task, ...data }
      }
      return task
    })
    setTasks(tarefasAtualizadas)
  }

  async function excluirTask(id) {
    const response = await fetch(`http://localhost:5174/tasks/${id}`, {
      method: 'DELETE'
    })
    if (response.ok) {
      const tarefasAtualizadas = tasks.filter(task => task.id !== id)
      setTasks(tarefasAtualizadas)
    }
  }

  return (
    <div>
      <Header classname="header">
        <h1>Taskboard</h1>
      </Header>
      <Board className="board" tasks={tasks} atualizarStatus={atualizarStatus} excluirTask={excluirTask} atualizarTask={atualizarTask} />
      <button onClick={() => setModalOpen(true)} className="add-task-button">✏️</button>
      {modalOpen && <TaskModal onClose={() => setModalOpen(false)} adicionarTask={adicionarTask} />}
      <Footer className="footer">
        <p>© 2026 Taskboard. All rights reserved.</p>
      </Footer>

    </div>
  )
}

export default App
