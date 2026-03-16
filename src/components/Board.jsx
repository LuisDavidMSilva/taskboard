import Column from './Column'

function Board({ tasks, atualizarStatus, excluirTask }) {
  return (
    <main className="board">
      <Column title="Por fazer" tasks={tasks.filter(task => task.status === "por-fazer")} atualizarStatus={atualizarStatus} excluirTask={excluirTask}></Column>
      <Column title="Em andamento" tasks={tasks.filter(task => task.status === "em-andamento")} atualizarStatus={atualizarStatus} excluirTask={excluirTask}></Column>
      <Column title="Finalizado" tasks={tasks.filter(task => task.status === "finalizado")} atualizarStatus={atualizarStatus} excluirTask={excluirTask}></Column>
    </main>
  )
}

export default Board