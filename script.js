// Variable para almacenar los productos en el carrito
let productosEnCarrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
  // Buscar el producto en el carrito por su ID
  let producto = productosEnCarrito.find(function(item) {
    return item.id === idProducto;
  });

  // Si el producto no existe en el carrito, agregarlo con cantidad 1
  if (!producto) {
    productosEnCarrito.push({ id: idProducto, cantidad: 1 });
  } else {
    // Si el producto ya existe, incrementar la cantidad
    producto.cantidad++;
  }

  // Actualizar el carrito en la página
  actualizarCarrito();
}

function quitarDelCarrito(idProducto) {
    // Buscar el producto en el carrito por su ID
    let indiceProducto = productosEnCarrito.findIndex(function(item) {
      return item.id === idProducto;
    });
  
    // Si el producto existe en el carrito, reducir la cantidad
    if (indiceProducto !== -1) {
      productosEnCarrito[indiceProducto].cantidad--;
  
      // Si el producto esta solo una vez, eliminar el producto del carrito
      if (productosEnCarrito[indiceProducto].cantidad === 0) {
        productosEnCarrito.splice(indiceProducto, 1);
      }
    }
  
    // Actualizar el carrito en la página
    actualizarCarrito();
  }
  

// Función para actualizar el carrito en la página
function actualizarCarrito() {
    let elementoProductosEnCarrito = document.getElementById('productos-en-carrito');
    let precioTotal = 0;
  
    // Limpiar el contenido actual del carrito
    elementoProductosEnCarrito.innerHTML = '';
  
    // Recorrer los productos en el carrito y agregarlos al HTML
    productosEnCarrito.forEach(function(item) {
        let producto = obtenerProductoPorId(item.id);
        let precioProducto = calcularPrecioProducto(producto, item.cantidad);
        precioTotal += precioProducto;
    
        let li = document.createElement('li');
        li.textContent = producto.nombre + ' x ' + item.cantidad + ' - $' + precioProducto.toFixed(2);
        li.classList.add("elemento-Carrito")
    
        // Agrega un botón de eliminación al elemento li
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.setAttribute('data-id-producto', item.id);
        botonEliminar.classList.add("elemento-Eliminar")
        botonEliminar.addEventListener('click', function() {
        let idProducto = parseInt(this.getAttribute('data-id-producto'));
        quitarDelCarrito(idProducto);
        });
  
        li.appendChild(botonEliminar);
        elementoProductosEnCarrito.appendChild(li);
    });
  
  
    // Mostrar el precio total acumulado en el carrito
    let elementoTotal = document.createElement('ul');
    elementoTotal.textContent = 'Total: $' + precioTotal.toFixed(2);
    elementoProductosEnCarrito.appendChild(elementoTotal);
  }
  
// Función auxiliar para obtener un producto por su ID
function obtenerProductoPorId(idProducto) {
    let productos = [
      { id: 1, nombre: 'Camiseta Titular', precio: 41999 },
      { id: 2, nombre: 'Camiseta Suplente', precio: 41999 },
      { id: 3, nombre: 'Camiseta Alternativa', precio: 41999 },
      { id: 4, nombre: 'Camiseta Suplente 2022', precio: 32999 },
      { id: 5, nombre: 'Short Titular', precio: 23999 },
      { id: 6, nombre: 'Short Suplente', precio: 23999 },
      { id: 7, nombre: 'Short Alternativo', precio: 23999 },
      { id: 8, nombre: 'Short Suplente 2022', precio: 19099 },
      { id: 9, nombre: 'Medias', precio: 7999 },
      { id: 10, nombre: 'Buzo Azul', precio: 58999 },
      { id: 11, nombre: 'Camperon', precio: 108999 },
      { id: 12, nombre: 'Campera', precio: 51999 }
    ];
  
    return productos.find(function(producto) {
      return producto.id === idProducto;
    });
  }
  

// Función auxiliar para calcular el precio de un producto en función de su cantidad
function calcularPrecioProducto(producto, cantidad) {
  return producto.precio * cantidad;
}

function vaciarCarrito() {
    // Vaciar el arreglo de productos en el carrito
    productosEnCarrito = [];
  
    // Actualizar el carrito en la página
    actualizarCarrito();
}

function finalizarCompra() {
    // Verificar si el carrito está vacío
    if (productosEnCarrito.length === 0) {
      alert("El carrito está vacío");
      return; // Salir de la función sin continuar con la finalización de la compra
    }
      
    // Mostrar un mensaje al usuario
    alert("Su compra se ha realizado con éxito");
  
    // Vaciar el carrito
    vaciarCarrito();
  }