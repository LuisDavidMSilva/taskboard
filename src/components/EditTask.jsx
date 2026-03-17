import { useState } from 'react'


function EditTask({ onClose, task, atualizarTask }) {

    const [titulo, setTitulo] = useState(task.titulo)
    const [descricao, setDescricao] = useState(task.descricao)

    return (
        <div className="edit-task-modal-overlay">
            <div className='edit-task-modal-content'>
                <h2>Editar Tarefa</h2>
                <form>
                    <button onClick={onClose} className="close-button">X</button>
                    <input value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text" placeholder="Título da tarefa" />
                    <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição da tarefa"></textarea>
                    <button onClick={() => {
                        atualizarTask(task.id, { titulo, descricao })
                        onClose()
                    }}>Salvar</button>
                </form>
            </div>
        </div>
    )
}

export default EditTask