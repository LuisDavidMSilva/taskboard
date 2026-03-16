import TaskCard from "./TaskCard"

function Column({ title, tasks, className, atualizarStatus, excluirTask }) {
  return (
    <div className={`column ${className}`}>
      <h2>{title}</h2>
      <ul>
        {tasks.map(task => (
         <TaskCard key={task.id} task={task} atualizarStatus={atualizarStatus} excluirTask={excluirTask}></TaskCard>
        ))}
      </ul>
    </div>
  )
}

export default Column