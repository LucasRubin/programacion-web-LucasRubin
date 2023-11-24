
let productosEnCarrito = [];


function agregarAlCarrito(idProducto) {
  
  let producto = productosEnCarrito.find(function(item) {
    return item.id === idProducto;
  });

  
  if (!producto) {
    productosEnCarrito.push({ id: idProducto, cantidad: 1 });
  } else {
    
    producto.cantidad++;
  }

  
  actualizarCarrito();
}

function quitarDelCarrito(idProducto) {
    
    let indiceProducto = productosEnCarrito.findIndex(function(item) {
      return item.id === idProducto;
    });
  
    
    if (indiceProducto !== -1) {
      productosEnCarrito[indiceProducto].cantidad--;
  
      
      if (productosEnCarrito[indiceProducto].cantidad === 0) {
        productosEnCarrito.splice(indiceProducto, 1);
      }
    }
  
    
    actualizarCarrito();
  }
  


function actualizarCarrito() {
    let elementoProductosEnCarrito = document.getElementById('productos-en-carrito');
    let precioTotal = 0;
  
    elementoProductosEnCarrito.innerHTML = '';
  
    productosEnCarrito.forEach(function(item) {
        let producto = obtenerProductoPorId(item.id);
        let precioProducto = calcularPrecioProducto(producto, item.cantidad);
        precioTotal += precioProducto;
    
        let li = document.createElement('li');
        li.textContent = producto.nombre + ' x ' + item.cantidad + ' - $' + precioProducto.toFixed(2);
        li.classList.add("elemento-Carrito")
    
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
  

    let elementoTotal = document.createElement('ul');
    elementoTotal.textContent = 'Total: $' + precioTotal.toFixed(2);
    elementoProductosEnCarrito.appendChild(elementoTotal);
  }
  

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
  

function calcularPrecioProducto(producto, cantidad) {
  return producto.precio * cantidad;
}

function vaciarCarrito() {
   
    productosEnCarrito = [];
  
    actualizarCarrito();
}

function finalizarCompra() {
    
    if (productosEnCarrito.length === 0) {
      alert("El carrito está vacío");
      return; 
    }
      
    
    alert("Su compra se ha realizado con éxito");
  
    
    vaciarCarrito();
  }