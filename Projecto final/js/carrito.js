const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
     const modalHeader = document.createElement ("div");
      modalHeader.className = "modal-header";
      modalHeader.innerHTML = `
        <h1 class ="modal-header-title">Carrito</h1> 
        `;
      modalContainer.append(modalHeader);
 
      const modalbutton = document.createElement("h1");
      modalbutton.innerText = "x";
      modalbutton.className ="modal-header-button";
 
      modalbutton.addEventListener("click", () => { 
         modalContainer.style.display ="none";
      });
 
      modalHeader.append(modalbutton);
 
      carrito.forEach((product) => {
         let carritoContent = document.createElement("div");
         carritoContent.className = "modal-content";
         carritoContent.innerHTML = `
         <img src="${product.img}">
         <h3>${product.Nombre} </h3>
         <p>${product.Precio} $ </p>
         <p> Cantidad: ${product.Cantidad} </p>
         <p> Total: ${product.Cantidad * product.Precio};
         `;
 
         modalContainer.append(carritoContent);




         let eliminar = document.createElement("span");
         eliminar.innerText = "❌";
         eliminar.className = "delete product";
         carritoContent.append(eliminar);

         eliminar.addEventListener("click", eliminarProducto);
      });
      
      const total = carrito.reduce((acc, el) => acc + el.Precio * el.Cantidad, 0);
 
      const totalBuying = document.createElement("div");
      totalBuying.className = "total-content";
      totalBuying.innerText = `total a pagar: ${total} $`;
      modalContainer.append(totalBuying);
 };
  
vercarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () =>{
    const foundId = carrito.find((Element) => Element.id)
    
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    })

    carritoCounter();
    pintarCarrito ()
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
}