// Definir una variable global para almacenar el carrito de compras
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(idProducto, nombre, precio) {
    const producto = {
        id: idProducto,
        nombre: nombre,
        precio: precio
    };

    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar la lista de productos en el carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');

    // Limpiar la lista de carrito antes de actualizar
    listaCarrito.innerHTML = '';

    // Calcular el total de la compra
    let total = 0;

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);

        total += producto.precio;
    });

    // Actualizar el total en la interfaz
    totalElement.textContent = `Total: $${total.toFixed(2)}`;

    // Mostrar o ocultar el carrito según si hay productos
    const carritoElement = document.getElementById('carrito');
    carritoElement.style.display = carrito.length > 0 ? 'block' : 'none';
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// Función para simular la compra (puedes mejorar esto según tus necesidades)
function realizarCompra() {
    alert('Gracias por tu compra. ¡Vuelve pronto!');
    vaciarCarrito();
}

// Función para mostrar detalles de un producto
function mostrarDetallesProducto(idProducto) {
    // Aquí puedes agregar lógica para cargar los detalles del producto desde una fuente de datos
    const nombre = `Producto ${idProducto}`;
    const descripcion = `Descripción detallada del ${nombre}.`;
    const precio = Math.random() * 100 + 50; // Precio aleatorio para fines de demostración

    // Actualizar la interfaz con los detalles del producto
    document.getElementById('nombre-detalle').textContent = nombre;
    document.getElementById('descripcion-detalle').textContent = descripcion;
    document.getElementById('precio-detalle').textContent = `$${precio.toFixed(2)}`;
    document.getElementById('imagen-detalle').src = `producto${idProducto}.jpg`;

    // Mostrar la sección de detalles del producto
    const detallesProducto = document.getElementById('detalles-producto');
    detallesProducto.classList.remove('oculto');
}

// Función para cerrar la sección de detalles del producto
function cerrarDetallesProducto() {
    const detallesProducto = document.getElementById('detalles-producto');
    detallesProducto.classList.add('oculto');
}
