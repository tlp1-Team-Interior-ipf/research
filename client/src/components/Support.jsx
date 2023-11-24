export const Support = () => {
    return (
        <main>
        <div className="shadow p-3 mb-5 bg-body rounded">
          <div className="d-flex justify-content-center">
          <img className="img-fluid" src="/img/image.png" alt="Imagen de taxi" height="300" width="300"/>
          </div>
            <form id="formulario">
              <div className="d-flex justify-content-center">
              <h1 className="h3 mb-3 fw-normal">¿Necesitas ayuda? Contáctanos por mail.</h1>
              </div>
              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput1" placeholder="name@example.com"/>
                <label for="floatingInput1">Correo Electrónico</label>
              </div>
              <br />
              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput2" placeholder="name@example.com"/>
                <label for="floatingInput2">Nombre de usuario</label>
              </div>
              <br />
              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput3" placeholder="name@example.com"/>
                <label for="floatingInput3">Nombre y Apellido</label>
              </div>
              <br />
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Asunto</label>
              </div>
              <br />
              <div className="form-floating">
                <textarea className="form-control" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Aquí su mensaje...</label>
              </div>
              <br />
              <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-secondary">Enviar consulta</button>
              </div>
            </form>
          </div>
      </main>
    )
}