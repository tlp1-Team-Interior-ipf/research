import React from 'react'
import taxi from './assets/taxi.svg'

export const App = () => {
  return (
    <div className="cover-container d-flex w-100 h-100 flex-column">
      
      <nav className="navbar navbar-expand-md navbar-dark bg-warning mb-4">
        <div className="container-fluid" style={{display: 'flex', flexDirection:'column'}}>
          
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse w-100" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0 w-100 navbar-items">
              <li className="nav-item">
                <a className="btn btn-outline-light m-2" aria-current="page" href="/empresa">Empresa</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-light m-2" href="/support">Soporte</a>
              </li>

              <li className="nav-item">
                <a className="btn btn-outline-light m-2" aria-current="page" href="/registro">Registrarse</a>
              
              </li>

              <li className="nav-item">
                <a className="btn btn-outline-light m-2" aria-current="page" href="/login">Ingresar</a>

              </li>
            </ul>
    
          </div>
        </div>
      </nav>
    
      <main >
        <div>
          
          <div className="text-center">
          <h1 className="display-1 text-warning">tuRemo</h1>
          <picture>
            <img src={taxi} alt="" style={{width: '300px', height: '300px'}}/>
          </picture>
        
          <h3 className="display-6 text-warning">¿Necesitas un remis?</h3>
          <a className="btn btn-warning text-light" href="/home/usuario" type="button">Ingresa Aquí</a>
        </div>
        </div>
      </main>

       <footer style={{padding: '10px'}}>
        <div className="text-center" style={{borderTop: '1px solid #000'}}>
          © Copyright - Derechos Reservados - Team Interior 2023 - tuRemo
        </div>
      </footer> 
    </div> 
  )
}
