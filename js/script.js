
function openMenu(){
document.getElementById("menuModal").style.display="flex";
}

function closeMenu(){
document.getElementById("menuModal").style.display="none";
}

window.onclick=function(event){
const modal=document.getElementById("menuModal");
if(event.target==modal){
modal.style.display="none";
}
}

// NAVAR SCROLL

window.addEventListener("scroll",function(){

const nav=document.querySelector("nav")

if(window.scrollY>50){
nav.style.background="#000";
}else{
nav.style.background="#000000b1";
}

})



//NUEVO MODAL

const categorias = [

{
titulo:"Entradas",
items:[
{nombre:"Bruschetta con Tomate",precio:"$8"},
{nombre:"Provoleta a la Parrilla",precio:"$9"},
{nombre:"Empanadas Caseras",precio:"$7"},
{nombre:"Ensalada César",precio:"$9"}
]
},

{
titulo:"Platos Principales",
items:[
{nombre:"Ojo de Bife con Papas",precio:"$18"},
{nombre:"Salmón Grillado",precio:"$17"},
{nombre:"Pollo al Limón",precio:"$15"},
{nombre:"Ñoquis Caseros",precio:"$14"}
]
},

{
titulo:"Postres",
items:[
{nombre:"Tiramisu",precio:"$7"},
{nombre:"Cheesecake",precio:"$8"},
{nombre:"Flan Casero",precio:"$7"}
]
}

]

let categoriaActual = 0

function mostrarCategoria(){

const contenedor = document.getElementById("menuContainer")
const titulo = document.getElementById("categoriaTitulo")

contenedor.innerHTML = ""

titulo.textContent = categorias[categoriaActual].titulo

categorias[categoriaActual].items.forEach(item => {

contenedor.innerHTML += `
<div class="menu-item">
<p>${item.nombre}</p>
<span>${item.precio}</span>
</div>
`

})

}

function cambiarCategoria(direccion){

categoriaActual += direccion

if(categoriaActual < 0){
categoriaActual = categorias.length -1
}

if(categoriaActual >= categorias.length){
categoriaActual = 0
}

mostrarCategoria()

}

mostrarCategoria()
