import Column from './Column'
import { DndContext } from '@dnd-kit/core'

function Board({ tasks, atualizarStatus, excluirTask, atualizarTask }) {

  function handleDragEnd(event) {
    const { active, over } = event
    if (over && active.id !== over.id) {
      atualizarStatus(active.id, over.id)
    }
  }

  return (
    <main className="board">
      <DndContext onDragEnd={handleDragEnd}>
      <Column title="Por fazer" className="column-todo" status="por-fazer" tasks={tasks.filter(task => task.status === "por-fazer")} atualizarStatus={atualizarStatus} excluirTask={excluirTask} atualizarTask={atualizarTask}></Column>
      <Column title="Em andamento" className="column-in-progress" status="em-andamento" tasks={tasks.filter(task => task.status === "em-andamento")} atualizarStatus={atualizarStatus} excluirTask={excluirTask} atualizarTask={atualizarTask}></Column>
      <Column title="Finalizado" className="column-done" status="finalizado" tasks={tasks.filter(task => task.status === "finalizado")} atualizarStatus={atualizarStatus} excluirTask={excluirTask} atualizarTask={atualizarTask}></Column>
      </DndContext>
    </main>
  )
}

export default Board