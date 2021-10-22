const login = document.getElementById("login");
const logout = document.getElementById("logout");
const loginuser = document.getElementById("loginuser");

const iniciarSesion = () => {
  let usuario = prompt("Ingresa el nombre de tu Dígimon favorito");
  localStorage.setItem("name", usuario);
  loginuser.innerHTML = usuario;
};
if (localStorage.getItem("name")) {
  loginuser.innerHTML = localStorage.getItem("name");
}
const cerrarSesion = () => {
  loginuser.innerHTML = " ";
  localStorage.clear();
};
login.onclick = function () {
  iniciarSesion();
};
logout.onclick = function () {
  cerrarSesion();
};
