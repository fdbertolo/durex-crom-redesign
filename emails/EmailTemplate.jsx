import * as React from 'react';

export const EmailTemplate = ({ name, email, phone, company, message }) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#f4f4f4' }}>
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#002f5a' }}>Nueva Consulta de Durex-Crom</h1>
      <p style={{ fontSize: '16px', color: '#333' }}>Has recibido un nuevo mensaje a través del formulario de contacto.</p>
      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />
      <h2 style={{ color: '#002f5a' }}>Detalles del Contacto:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}><strong>Nombre:</strong> {name}</li>
        <li style={{ marginBottom: '10px' }}><strong>Email:</strong> {email}</li>
        <li style={{ marginBottom: '10px' }}><strong>Teléfono:</strong> {phone}</li>
        <li style={{ marginBottom: '10px' }}><strong>Empresa:</strong> {company}</li>
      </ul>
      <h2 style={{ color: '#002f5a' }}>Mensaje:</h2>
      <p style={{ whiteSpace: 'pre-line', fontSize: '16px', color: '#333' }}>{message}</p>
    </div>
  </div>
);