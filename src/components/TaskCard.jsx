import { useState } from "react"
import EditTask from "./EditTask"
import { useDraggable } from "@dnd-kit/core"
import { Pencil, Trash2 } from "lucide-react"

function TaskCard({ task, excluirTask, atualizarTask }) {

    const [editOpen, setEditOpen] = useState(false)

    const { attributes, setNodeRef, transform, listeners} = useDraggable({
        id: task.id
    })

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
    } : undefined

    return (
        <div className="task-card" ref={setNodeRef} style={style} {...attributes}>
            <h3 {...listeners}>{task.titulo}</h3>
            <p>{task.descricao}</p>
            {editOpen && <EditTask onClose={() => setEditOpen(false)} task={task} atualizarTask={atualizarTask}></EditTask>}
            <button className="edit-button" onClick={(e) => { e.stopPropagation(); setEditOpen(true) }}><Pencil size={16} /></button>
            <button className="delete-button" onClick={(e) => { e.stopPropagation(); excluirTask(task.id) }}><Trash2 size={16} /></button>
        </div>   
)
}

export default TaskCard