import React, { useState } from 'react'

function TaskModal({onClose, adicionarTask}) {
    
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    
    return (
    <div className="modal-overlay">
        <div className="modal-content">
            <h2>Adicionar Tarefa</h2>
            <form>
                <button onClick={onClose} className="close-button">X</button>
                <input value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text" placeholder="Título da tarefa" />
                <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição da tarefa"></textarea>
                <button className="modal-add-task-button" type="submit" onClick={(e) => {
                    e.preventDefault()
                    adicionarTask(titulo, descricao)
                    onClose()
                }}>Adicionar</button>
            </form>
        </div>
    </div>
    )
}

export default TaskModal