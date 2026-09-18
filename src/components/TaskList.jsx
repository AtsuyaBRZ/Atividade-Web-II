import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tarefas, onToggleStatus, onDelete }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tarefas.map(tarefa => (
        <TaskItem
          key={tarefa.id}
          id={tarefa.id}
          titulo={tarefa.titulo}
          concluida={tarefa.concluida}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}