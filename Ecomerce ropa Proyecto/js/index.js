const retornarCardHTML (producto) {
     return `<div class="card">
     <div class="card-image"> ${producto.imagen}</div>
     <div class="card-name">${producto.nombre}</div>
     <div class="card-price">$${producto.precio}</div>
     <div class="card-button">
         <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
     </div>
 </div>`
}


const cargarProductos (array) =>{
    const contenedor=document.querySelector(".container")
    array.forEach(producto => {
        const card = retornarCardHTML(producto)
        contenedor.innerHTML += card
        
    });
}



const manza =[{
    imagen: "🍅",
    nombre: "Tomates",
    precio: 140 }
]
 
cargarProductos (manza)