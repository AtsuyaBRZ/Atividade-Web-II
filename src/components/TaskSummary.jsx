import React from 'react';

export default function TaskSummary({ total, concluidas, pendentes }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Resumo</h2>
      <p><strong>Total:</strong> {total}</p>
      <p><strong>Concluídas:</strong> {concluidas}</p>
      <p><strong>Pendentes:</strong> {pendentes}</p>
      <hr />

      {pendentes === 0 ? (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          Parabéns! Todas as tarefas foram concluídas!
        </p>
      ) : (
        <p style={{ color: 'orange', fontWeight: 'bold' }}>
          Você ainda possui tarefas pendentes.
        </p>
      )}
    </div>
  );
}