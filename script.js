// Base de datos simulada de productos
let productos = [
    { id: 1, nombre: "Zapatillas de Running", precio: 199.99, descripcion: "Diseño aerodinámico para un rendimiento óptimo", imagen: "zapatillas.jpg" },
    { id: 2, nombre: "Bolso de Cuero", precio: 599.99, descripcion: "Hecho a mano con cuero genuino", imagen: "bolso.jpg" },
    // Agrega más productos según sea necesario
];

// Estado del carrito de compras
let carrito = [];

// Función para mostrar todos los productos en la interfaz
function mostrarProductos() {
    const contenedorProductos = document.getElementById('productos');
    contenedorProductos.innerHTML = '';

    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.className = 'producto';
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p class="precio">$${producto.precio.toFixed(2)}</p>
            <button class="boton-accion" onclick="mostrarDetallesProducto(${producto.id})">Ver Detalles</button>
            <button class="boton-accion" onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio})">Agregar al Carrito</button>
        `;

        contenedorProductos.appendChild(divProducto);
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto, nombre, precio) {
    const cantidad = parseInt(prompt(`Ingrese la cantidad de ${nombre} que desea agregar al carrito:`)) || 1;

    const productoEnCarrito = carrito.find(item => item.id === idProducto);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
    } else {
        carrito.push({ id: idProducto, nombre: nombre, precio: precio, cantidad: cantidad });
    }

    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total');

    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}`;
        listaCarrito.appendChild(li);
        total += item.precio * item.cantidad;
    });

    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;

    const carritoElemento = document.getElementById('carrito');
    carritoElemento.classList.remove('oculto');
}

// Función para mostrar detalles de un producto
function mostrarDetallesProducto(idProducto) {
    // Esta función puede expandirse para cargar detalles del producto desde una fuente de datos
    const productoSeleccionado = productos.find(producto => producto.id === idProducto);

    if (productoSeleccionado) {
        const imagenDetalle = document.getElementById('imagen-detalle');
        const nombreDetalle = document.getElementById('nombre-detalle');
        const descripcionDetalle = document.getElementById('descripcion-detalle');
        const precioDetalle = document.getElementById('precio-detalle');

        imagenDetalle.src = productoSeleccionado.imagen;
        nombreDetalle.textContent = productoSeleccionado.nombre;
        descripcionDetalle.textContent = productoSeleccionado.descripcion;
        precioDetalle.textContent = `Precio: $${productoSeleccionado.precio.toFixed(2)}`;

        const detallesProducto = document.getElementById('detalles-producto');
        detallesProducto.classList.remove('oculto');
    } else {
        alert('No se encontraron detalles para el producto seleccionado.');
    }
}

// Función para cerrar los detalles del producto
function cerrarDetallesProducto() {
    const detallesProducto = document.getElementById('detalles-producto');
    detallesProducto.classList.add('oculto');
}

// ... (Otras funciones según sea necesario)

// Inicializar la página mostrando los productos
mostrarProductos();
