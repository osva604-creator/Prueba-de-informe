function validar() {
  const password = 123456;
  const usuario = "dmoya";

  const inputUsuario = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;

  if (inputUsuario === usuario && inputPassword === password) {
    alert("¡Bienvenido! Sacala del ángulo MARCOOOOOOOOOOS!!!");
    window.location.href = "cuerpo.html";
  } else {
    alert("Contraseña o usuario incorrecto");
  }
}


