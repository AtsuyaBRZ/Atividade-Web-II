import React from 'react';

export default function TaskItem({ id, titulo, concluida, onToggleStatus, onDelete }) {
  return (
    <li>
      <div>
        <strong>
          {titulo}
        </strong>
        <p>
          Status: {concluida ? 'Concluída' : 'Pendente'}
        </p>
      </div>

      <div>
        <button 
          onClick={() => onToggleStatus(id)}
        >
          {concluida ? 'Refazer' : 'Concluir'}
        </button>

        <button 
          onClick={() => onDelete(id)} 
        >
          Excluir
        </button>
      </div>
    </li>
  );
}