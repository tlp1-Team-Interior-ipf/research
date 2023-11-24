import React from 'react';
import './empresa.css';
import Swal from 'sweetalert2'

export const EmpresasDisp = ({
    montoRealLibertad,
    montoRealMontecarlo,
    montoRealNapoleon,
    enviarDatosAlServidor // Recibe la función para enviar datos al servidor
}) => {
  const handleSolicitarViaje = (idEmpresa) => {
      enviarDatosAlServidor(idEmpresa); // Llama a la función para enviar datos al servidor
      Swal.fire({
          icon: 'success',
          title: 'Viaje confirmado',
          text: 'El viaje ha sido confirmado exitosamente',
        });
  };

    return (
        <main>
  <div className="letras">
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <h2>Empresas disponibles</h2>
        <br />
        <div className="card-grid">
          <div className="card shadow-sm">
            <img src="/img/remises libertad.jpg" alt="Remises Libertad" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Remises Libertad</h5>
              <p className="card-text">Av. Gutnisky 2133</p>
              <button className="btn btn-primary" onClick={() => handleSolicitarViaje(1)}>Solicitar Viaje</button>
              <p className="monto-aproximado">Monto aproximado: ${montoRealLibertad.toFixed(2) || 'Calculando...'}</p>
            </div>
          </div>
          <div className="card shadow-sm">
            <img src="/img/remises montecarlo.jpg" alt="Remises Montecarlo" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Remises Montecarlo</h5>
              <p className="card-text">Trinidad González 629, P3600 Formosa</p>
              <button className="btn btn-primary" onClick={() => handleSolicitarViaje(2)}>Solicitar Viaje</button>
              <p className="monto-aproximado">Monto aproximado: ${montoRealMontecarlo || 'Calculando...'}</p>
            </div>
          </div>
          <div className="card shadow-sm">
            <img src="/img/remises napoleón.jpg" alt="Remises Napoleón" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Remises Napoleón</h5>
              <p className="card-text">Av. Napoleón Uriburu 1645, P3600 DQY, Formosa.</p>
              <button className="btn btn-primary" onClick={() => handleSolicitarViaje(3)}>Solicitar Viaje</button>
              <p className="monto-aproximado">Monto aproximado: ${montoRealNapoleon || 'Calculando...'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
    );
}