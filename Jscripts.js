const boton = document.querySelector('#botoncito');
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');

var getData = function(){
    var nomb = document.getElementById("nomb").value;
    var telf = document.getElementById("telf").value;
    var email = document.getElementById("email").value;
    console.log (nomb, ", ", telf, ", ", email);
}
    
console.log("hola, probando el JS");
const crearusuario = async() =>{
    const url ='https://randomuser.me/api/';
    const rpta= await fetch(url);
    const { results } = await rpta.json();
    const datos=results[0];
    console.log(datos);
    
    foto.src = datos.picture.medium;
    nombre.textContent=datos.name.first +" "+ datos.name.last; 
    telefono.textContent = datos.phone;
    correo.textContent = datos.email;
}
boton.addEventListener('click', crearusuario);
document.addEventListener('DOMContentLoaded', crearusuario);
document.getElementById("sobre").addEventListener('click', function(){
    document.getElementById("sobremi").style.display="block";
    document.getElementById("formacion").style.display="none";
    document.getElementById("experiencia").style.display="none";
    document.getElementById("habilidades").style.display="none";
});
document.getElementById("forma").addEventListener('click', function(){
    document.getElementById("sobremi").style.display="none";
    document.getElementById("formacion").style.display="block";
    document.getElementById("experiencia").style.display="none";
    document.getElementById("habilidades").style.display="none";
});


document.getElementById("xper").addEventListener('click', function(){
    document.getElementById("sobremi").style.display="none";
    document.getElementById("formacion").style.display="none";
    document.getElementById("experiencia").style.display="block";
    document.getElementById("habilidades").style.display="none";
});

document.getElementById("habil").addEventListener('click', function(){
    document.getElementById("sobremi").style.display="none";
    document.getElementById("formacion").style.display="none";
    document.getElementById("experiencia").style.display="none";
    document.getElementById("habilidades").style.display="block";
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}