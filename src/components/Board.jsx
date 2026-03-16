import Column from './Column'

function Board({ tasks }) {
  return (
    <main className="board">
      <Column title="Por fazer" tasks={tasks.filter(task => task.status === "por-fazer")}></Column>
      <Column title="Em andamento" tasks={tasks.filter(task => task.status === "em-andamento")}></Column>
      <Column title="Finalizado" tasks={tasks.filter(task => task.status === "finalizado")} ></Column>
    </main>
  )
}

export default Board