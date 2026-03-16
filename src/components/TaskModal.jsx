function TaskModal({onClose}) {
    return (
    <div className="modal-overlay">
        <div className="modal-content">
            <h2>Adicionar Tarefa</h2>
            <form>
                <button onClick={onClose} className="close-button">X</button>
                <input type="text" placeholder="Título da tarefa" />
                <textarea placeholder="Descrição da tarefa"></textarea>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    </div>
    )
}

export default TaskModal