import React from 'react';

export default function Header({ titulo, descricao }) {
  return (
    <header style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1>{titulo}</h1>
      <p>{descricao}</p>
    </header>
  );
}