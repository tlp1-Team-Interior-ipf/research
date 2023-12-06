export const Login = () => {
    return (
        <main>
        <div>
          <img className="img-fluid" src="/img/image.png" alt="Imagen de taxi" height="300" width="300"/>
            <div className="col-6 mx-auto">
              <h5>Elige cómo quieres iniciar sesión</h5>
              <div className="d-flex">
              <a href="/inicioSesion"><button className="btn btn-warning"type="button">Pasajero</button></a>
              <a href="/inicioSesionChofer"><button className="btn btn-warning mx-3" type="button">Chofer</button></a>
              </div>
            </div>
          </div>
      </main>
    )
}