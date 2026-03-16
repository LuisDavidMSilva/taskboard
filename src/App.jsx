import './App.css'
import Header from './components/Header'
import Board from './components/Board'
import Footer from './components/Footer'
import TaskModal from './components/TaskModal'
import { useState } from 'react'

function App() {

  const [modalOpen, setModalOpen] = useState(false)

  const [tasks, setTasks] = useState([
    { id: 1, titulo: "Estudar React", descricao: "Ver documentação oficial", status: "por-fazer" },
    { id: 2, titulo: "Fazer exercícios", descricao: "Resolver exercícios do curso", status: "em-andamento" },
    { id: 3, titulo: "Criar projeto", descricao: "Desenvolver um projeto usando React", status: "finalizado" }
  ])

  return (
    <div>
      <Header classname="header">
        <h1>Taskboard</h1>
      </Header>
      <Board className="board" tasks={tasks} />
      <button onClick={() => setModalOpen(true)} className="add-task-button">✏️</button>
      {modalOpen && <TaskModal onClose={() => setModalOpen(false)} />}
      <Footer className="footer">
        <p>© 2026 Taskboard. All rights reserved.</p>
      </Footer>

    </div>
  )
}

export default App
