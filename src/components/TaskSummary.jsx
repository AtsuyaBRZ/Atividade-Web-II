import React from 'react';

export default function TaskSummary({ total, concluidas, pendentes }) {
  return (
    <div>
      <h2>Resumo</h2>
      <p><strong>Total:</strong> {total}</p>
      <p><strong>Concluídas:</strong> {concluidas}</p>
      <p><strong>Pendentes:</strong> {pendentes}</p>
      <hr />

      {pendentes === 0 ? (
        <p>
          Parabéns! Todas as tarefas foram concluídas!
        </p>
      ) : (
        <p>
          Você ainda possui tarefas pendentes.
        </p>
      )}
    </div>
  );
}