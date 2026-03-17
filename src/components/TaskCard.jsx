function TaskCard({ task, atualizarStatus, excluirTask }) {
    return (
        <div className="task-card">
            <h3>{task.titulo}</h3>
            <p>{task.descricao}</p>
            <button className="button-todo" onClick={() => atualizarStatus(task.id, "por-fazer")}>Por fazer</button>
            <button className="button-in-progress" onClick={() => atualizarStatus(task.id, "em-andamento")}>Em andamento</button>
            <button className="button-done" onClick={() => atualizarStatus(task.id, "finalizado")}>Finalizado</button>
            <button className="delete-button" onClick={() => excluirTask(task.id)}>Excluir</button>
        </div>
    )
}

export default TaskCard