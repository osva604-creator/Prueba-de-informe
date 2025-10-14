function validar() {
  const password = "admin";
  const usuario = "admin";

  const inputUsuario = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;

  if (inputUsuario === usuario && inputPassword === password) {
    alert("¡Bienvenido!");
    window.location.href = "acerca de.html";
  } else {
    alert("Contraseña o usuario incorrecto");
  }
}


