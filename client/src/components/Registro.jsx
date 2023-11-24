export const Registro = () => {
    return (
        <main>
        <div>
          <img className="img-fluid" src="/img/image.png" alt="Imagen de taxi" height="300" width="300"/>
            <div className="col-6 mx-auto">
                <h5>Elige cómo quieres registrarte</h5>
                <div className="d-flex justify-content-around">
                <a href="/signin"><button className="btn btn-warning" type="button">Usuario</button></a>
                <a href="/"><button className="btn btn-warning" type="button">Chofer</button></a>
                </div>
              </div>
        </div>
      </main>
    )
}