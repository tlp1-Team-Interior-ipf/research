import taxi from "../assets/taxi.svg";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import Swal from "sweetalert2";
import React, { useState } from "react";

export const Signinuser = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleRegistro = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden",
      });
      return;
    }

    const data = {
      name,
      surname,
      email,
      phone_number,
      password,
      date_birth: dateOfBirth,
    };

    try {
      const response = await fetch("http://localhost:3000/passenger/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData && errorData.errors) {
          const errorMessages = errorData.errors.map((error) => error.msg);
          Swal.fire({
            icon: "error",
            title: "Error de validación",
            text: errorMessages.join("\n"),
          });
        } else {
          console.log(Error)
          throw new Error("Error en el registro");
        }
      } else {
        Swal.fire({
          icon: "success",
          title: "Usuario creado",
        });
        setTimeout(() => {
          window.location.href = "/inicioSesion";
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  return (
    <>
      <NavBar />

      <main>
      <div className="was-validated shadow p-3 mb-5 bg-body rounded border">
        <div className='d-flex justify-content-center'>
        <img
          className="img-fluid"
          src="/img/image.png"
          alt="Imagen de taxi"
          height="300"
          width="300"
        />
        </div>
          <form onSubmit={handleRegistro}>
            <h1 className="mb-3 text-center text-black rounded p-2">Registrarse</h1>
            <div className="row">
            <div className="col-12 col-md-6 mb-3">
            <label htmlFor="validationEmail" className="form-label">Correo Electrónico</label>
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="form-control" 
                id="validationEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
            <label htmlFor="validationPassword" className="form-label">Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                className="form-control"
                id="validationPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
            <label htmlFor="validationConfirmPassword" className="form-label">Confirmar Contraseña</label>
              <input
                type="password"
                placeholder="Confirmar Contraseña"
                className="form-control" 
                id="validationConfirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
            <label htmlFor="validationNombre" className="form-label">Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                className="form-control" 
                id="validationNombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
            <label htmlFor="validationApellido" className="form-label">Apellido</label>
              <input
                type="text"
                placeholder="Apellido"
                className="form-control" 
                id="validationApellido"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
            <label htmlFor="validationTelefono" className="form-label">Teléfono</label>
              <input
                type="number"
                placeholder="Teléfono"
                className="form-control" 
                id="validationTelefono"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
                required
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
            <label htmlFor="validationDate" className="form-label">Fecha de Nacimiento</label>
              <input
                type="date"
                placeholder="Fecha de Nacimiento"
                className="form-control" 
                id="validationDate"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label>
                Recordarme
              </label>
            </div>
            <div className='d-flex justify-content-center'>
            <button type="submit" className='boton'>
              Registrarme
            </button>
            </div>
            </div>
          </form>
        </div>
    </main>

      <Footer />
    </>
  );
};
