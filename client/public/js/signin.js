const NuevoUsuario = document.querySelector('#formulario');

NuevoUsuario.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#contraseña').value;
  const confirmpassword = document.querySelector('#confirmcontraseña').value;
  const name = document.querySelector('#nombre').value;
  const surname = document.querySelector('#apellido').value;
  const phone_number = document.querySelector('#telefono').value;
  const date_birth = document.querySelector('#fecha_nac').value;

  if (password !== confirmpassword) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las contraseñas no coinciden',
    });
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/passenger/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        surname,
        email,
        phone_number,
        password,
        date_birth,
      }),
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const respToJson = await response.json();

    Swal.fire({
      icon: 'success',
      title: 'Usuario creado',
      text: respToJson.message,
    });

    console.log(respToJson.message);

    NuevoUsuario.reset();

    setTimeout(() => {
      window.location.href = 'http://127.0.0.1:5500/client/loginusuario.html';
    }, 2000);
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
  }
});
