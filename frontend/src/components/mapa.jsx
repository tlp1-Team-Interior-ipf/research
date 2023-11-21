import { NavBar } from "./navbar";
import Maping from "./maping";
export const Mapa = () => {
  return (
    <>
      <NavBar />

      <span className="input-group-text">Origen</span>
      <span className="input-group-text">Destino</span>

      <div className="container d-flex justify-content-center">
        <Maping />
      </div>

      <div className="d-flex justify-content-center">
        <button className="btn btn-danger m-1">Finalizar viaje</button>
      </div>
    </>
  );
};
