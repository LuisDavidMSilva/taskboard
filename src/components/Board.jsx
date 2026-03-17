import Column from './Column'

function Board({ tasks, atualizarStatus, excluirTask, atualizarTask }) {
  return (
    <main className="board">
      <Column title="Por fazer" className="column-todo"tasks={tasks.filter(task => task.status === "por-fazer")} atualizarStatus={atualizarStatus} excluirTask={excluirTask} atualizarTask={atualizarTask}></Column>
      <Column title="Em andamento" className="column-in-progress" tasks={tasks.filter(task => task.status === "em-andamento")} atualizarStatus={atualizarStatus} excluirTask={excluirTask} atualizarTask={atualizarTask}></Column>
      <Column title="Finalizado" className="column-done" tasks={tasks.filter(task => task.status === "finalizado")} atualizarStatus={atualizarStatus} excluirTask={excluirTask} atualizarTask={atualizarTask}></Column>
    </main>
  )
}

export default Board