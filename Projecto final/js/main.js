const shopContent = document.getElementById("shopContent");
const vercarrito = document.getElementById("vercarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = [ ];

product.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.Nombre}</h3>
    <p class="price">${product.Precio} $ </p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
      const repeat = carrito.some ((repeatProduct) => repeatProduct.id === product.id);

      if (repeat){
        carrito.map((prod) => {
          if (prod.id === product.id){
            prod.Cantidad++;
          }
        })
      } else {
        carrito.push({
            id : product.id,
            img : product.img,
            Precio : product.Precio,
            Cantidad : product.Cantidad,
        });
      }
        console.log(carrito);
        carritoCounter();
    });
});