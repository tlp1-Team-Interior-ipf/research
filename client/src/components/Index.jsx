export const Index = () => {
    return (
        <main className="d-flex align-items-center justify-content-center">
        <div>
          <img className="img-fluid" src="img/image.png" alt="Imagen de taxi" height="300" width="300"/>
          <div className="letras">
          <h1 className="display-1">tuRemo</h1>
          <h3 className="display-6">¿Necesitas un remis?</h3>
          <a className="btn btn-warning d-grid gap-2 col-6 mx-auto" href="/pedidoViaje" type="button">Pedir Aquí</a>
        </div>
        </div>
      </main>
    )
}