function TaskCard({ task, atualizarStatus, excluirTask }) {
    return (
        <div className="task-card">
            <h3>{task.titulo}</h3>
            <p>{task.descricao}</p>
            <button onClick={() => atualizarStatus(task.id, "por-fazer")}>Por fazer</button>
            <button onClick={() => atualizarStatus(task.id, "em-andamento")}>Em andamento</button>
            <button onClick={() => atualizarStatus(task.id, "finalizado")}>Finalizado</button> 
            <button onClick={() => excluirTask(task.id)} className="delete-button">Excluir</button>
        </div>
    )
}

export default TaskCard