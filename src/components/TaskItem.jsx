import React from 'react';

export default function TaskItem({ id, titulo, concluida, onToggleStatus, onDelete }) {
  return (
    <li style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '10px', 
      borderBottom: '1px solid #eee' 
    }}>
      <div>
        <strong style={{ textDecoration: concluida ? 'line-through' : 'none' }}>
          {titulo}
        </strong>
        <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#666' }}>
          Status: {concluida ? 'Concluída' : 'Pendente'}
        </p>
      </div>

      <div>
        <button 
          onClick={() => onToggleStatus(id)}
          style={{ marginRight: '8px', cursor: 'pointer' }}
        >
          {concluida ? 'Refazer' : 'Concluir'}
        </button>

        <button 
          onClick={() => onDelete(id)} 
          style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
        >
          Excluir
        </button>
      </div>
    </li>
  );
}