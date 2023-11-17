import './form.css'
import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/authContext"; 




export const LoginUser = () => {

  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch ('http://localhost:3000/passenger/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!resp.ok) {
        // Si la respuesta no es exitosa, manejar los errores
        const errorData = await resp.json();
        if (errorData && errorData.errors) {
          // Si hay errores de validación, mostrar los mensajes de error
          const errorMessages = errorData.errors.map((error) => error.msg);
          Swal.fire({
            icon: "error",
            title: "Error de validación",
            text: errorMessages.join("\n"),
          });
        } 
      } else {
        // Si la respuesta es exitosa, continuar con el flujo de inicio de sesión
        const userData = await resp.json();
      
        // Persistencia
        localStorage.setItem('token', JSON.stringify(userData.token));

        // Actualizar el contexto de autenticación
        dispatch({ type: "LOGIN", payload: userData });

        // Redirige a la página de 'menu' después de 2 segundos
        setTimeout(() => {
          return navigate("/home");
        }, 2000);
      }
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
