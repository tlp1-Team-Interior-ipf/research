import React, { useState, useEffect } from "react";

const ChoferView = () => {
  const [travels, setTravels] = useState([]);
  const [choferEmpresaId, setChoferEmpresaId] = useState(
    "ID_DE_LA_EMPRESA_DEL_CHOFER"
  );

  

  // {user1: {
  //   name: "David",
  //   Origen: "C. Siempre viva",
  //   Destino: "Av. 25 De Mayo",
  //   CostoDeViaje:  3031
  // },
  // user2: {
  //   name: "Facundo",
  //   Origen: "C. Maipu",
  //   Destino: "Av. 25 De Mayo",
  //   CostoDeViaje: 3031
  // },
  // user3: {
  //   name: "Álvaro",
  //   Origen: "C. 9 Julio",
  //   Destino: "Av. 25 De Mayo3",
  //   CostoDeViaje: 5151
  // }}

  useEffect(() => {
    // Llamada a la API para obtener los viajes desde el backend
    fetch(`URL_DE_TU_API/travels`) // Reemplaza 'URL_DE_TU_API' por la URL real de tu API
      .then((response) => response.json())
      .then((data) => {
        // Filtrar viajes según el ID de la empresa del chofer
        const viajesChofer = data.filter(
          (viaje) => viaje.id_empresa === choferEmpresaId
        );
        setTravels(viajesChofer);
      })
      .catch((error) => {
        console.error("Error al obtener los viajes:", error);
      });
  }, [choferEmpresaId]);

  return (
    <div className="container">
      <h3>Pedidos de viajes</h3>
      <h5>Selecciona uno para obtener más detalles</h5>

      <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal0"
          >
            Notificaciones
      </button>

          <div
            className="modal fade "
            id="exampleModal0"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl d-flex overflow-y-auto" style={{height:'600px'}}>
              <div className="modal-content overflow-y-auto">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Confirmación de viaje
                  </h1>
                </div>

                <div className="modal-footer justify-content-between alert alert-primary m-2">
                  <div>

                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    User 1
                  </h1>
                  <img src="/img/user.jpg" width={'100px'} alt="" />
                  </div>

                  <ul>
                    <li >
                      Name: Facundo <br />
                      Origen: "C. Siempre viva"
                      <br />
                      Destino: "Av. 25 De Mayo"
                      <br />
                      CostoDeViaje: $3031 <br />
                      <button className="btn btn-danger">Rechazar viaje</button>
                      <button className="btn btn-success">Aceptar viaje</button>
                    </li>
                  </ul>
                </div>

                <div className="modal-footer justify-content-between alert alert-primary m-2">
                  <div>

                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    User 2
                  </h1>
                  <img src="/img/user.jpg" width={'100px'} alt="" />
                  </div>

                  <ul>
                    <li >
                      Name: Facundo <br />
                      Origen: "C. Siempre viva"
                      <br />
                      Destino: "Av. 9 Julio"
                      <br />
                      CostoDeViaje: $3031 <br />
                      <button className="btn btn-danger">Rechazar viaje</button>
                      <button className="btn btn-success">Aceptar viaje</button>
                    </li>
                  </ul>
                </div>

                <div className="modal-footer justify-content-between alert alert-primary m-2">
                  <div>

                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    User 3
                  </h1>
                  <img src="/img/user.jpg" width={'100px'} alt="" />
                  </div>

                  <ul>
                    <li >
                      Name: David <br />
                      Origen: "C. Siempre viva"
                      <br />
                      Destino: "Av. Mapi"
                      <br />
                      CostoDeViaje: $5031 <br />
                      <button className="btn btn-danger">Rechazar viaje</button>
                      <button className="btn btn-success">Aceptar viaje</button>
                    </li>
                  </ul>
                </div>

                <div className="modal-body">
                  <i></i>
                </div>
              </div>
            </div>

          </div>

     
    </div>
  );
};

export default ChoferView;
