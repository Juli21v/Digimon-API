const API = "https://digimon-api.vercel.app/api/digimon";
let button = document.getElementById("button");
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
const getData = (api) => {
  return fetch(api)
    .then((Response) => Response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((Error) => {
      console.log("Error in the API", Error);
    });
};

const fillData = (data) => {
  let html = "";
  let limit = 100;
  for (let i = 0; i < limit; i++) {
    html += '<div class="col">';
    html += '<div class="card h-100 mt-3 border-danger">';
    html += `<img src="${data[i].img}" class="card-img-top" alt="${data[i].name}">`;
    html += '<div class="card-body text-danger">'
    html += `<h5 class="card-title">${data[i].name}</h5>`
    html += '<div class="card-footer">'
    html += `<small class="text-muted">Level :${data[i].level}</small>`
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
  }
  document.getElementById("dataPeople").innerHTML = html;
};

login.onclick = function () {
    iniciarSesion();
  };
  logout.onclick = function () {
    cerrarSesion();
  };
  
button.onclick = function () {
  getData(API);
};
