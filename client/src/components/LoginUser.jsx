import './form.css'
import { useNavigate } from "react-router-dom";



import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/authContext"; 


export const LoginUser = () => {

  const { state, dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/passenger/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("La contraseña o el email son incorrectos");
      }

      const data = await response.json();

      if (!data) {
        throw new Error("No hay datos");
      }
      
      dispatch({ type: "LOGIN", payload: data });
      
      localStorage.setItem("token", data.token);

      // Redirige a la página de 'menu' después de 2 segundos
      return navigate("/home", { replace: true });

    } catch (error) {
      console.error(error);
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <main className="d-flex justify-content-center">
      <div className="shadow p-3 mb-5 bg-body rounded">
        <div className='d-flex justify-content-center'>
        <img
          className="img-fluid"
          src="/img/image.png"
          alt="Imagen de taxi"
          height="300"
          width="300"
        />
        </div>
          <h1 className="mb-3 text-center text-black rounded p-2">Inicio de Sesión</h1>
          <form onSubmit={handleLogin}>
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="form-control" 
              id="validationEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="col-12 col-md-6 mb-3">
            <input
              type="password"
              placeholder="Contraseña"
              className="form-control"
              id="validationPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            
            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Recordarme
              </label>
            </div>
            <div className='d-flex justify-content-center'>
            <button type="submit" className='boton'>
              Iniciar Sesión
            </button>
            </div>
            </div>
          </form>
        </div>
    </main>
  );
};
