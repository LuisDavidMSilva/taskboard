function Column({ title, tasks }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.titulo}</h3>
            <p>{task.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Column