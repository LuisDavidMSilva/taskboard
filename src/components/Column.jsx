import TaskCard from "./TaskCard"
import { useDroppable } from "@dnd-kit/core"

function Column({ title, tasks, className, atualizarStatus, excluirTask, atualizarTask, status }) {
  const { setNodeRef } = useDroppable({
    id: status
  })

  return (
    <div className={`column ${className}`} ref={setNodeRef}>
      <h2>{title}</h2>
      <ul>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} atualizarStatus={atualizarStatus} excluirTask={excluirTask} atualizarTask={atualizarTask}></TaskCard>
        ))}
      </ul>
    </div>
  )
}

export default Column