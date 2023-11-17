// Paso 4: Sistema de Gestión de Productos

// Base de datos simulada de productos
let productos = [
    { id: 1, nombre: "Producto 1", precio: 199.99, descripcion: "Descripción del Producto 1", imagen: "producto1.jpg" },
    { id: 2, nombre: "Producto 2", precio: 149.99, descripcion: "Descripción del Producto 2", imagen: "producto2.jpg" },
    // Puedes agregar más productos aquí
];

// Función para mostrar todos los productos en la interfaz
function mostrarProductos() {
    const contenedorProductos = document.getElementById('productos');
    contenedorProductos.innerHTML = ''; // Limpiar el contenido existente

    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.className = 'producto';
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p class="precio">$${producto.precio.toFixed(2)}</p>
            <button onclick="mostrarDetallesProducto(${producto.id})">Ver Detalles</button>
            <button onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio})">Agregar al Carrito</button>
            <button onclick="editarProducto(${producto.id})">Editar</button>
            <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
        `;

        contenedorProductos.appendChild(divProducto);
    });
}

// Función para agregar un nuevo producto
function agregarProducto() {
    const nombre = prompt('Ingrese el nombre del nuevo producto:');
    const precio = parseFloat(prompt('Ingrese el precio del nuevo producto:'));
    const descripcion = prompt('Ingrese la descripción del nuevo producto:');
    const imagen = prompt('Ingrese el nombre de la imagen del nuevo producto (ejemplo: producto3.jpg):');

    const nuevoProducto = {
        id: productos.length + 1,
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        imagen: imagen
    };

    productos.push(nuevoProducto);
    mostrarProductos();
}

// Función para editar un producto existente
function editarProducto(idProducto) {
    const productoEditar = productos.find(producto => producto.id === idProducto);

    const nuevoNombre = prompt('Ingrese el nuevo nombre:', productoEditar.nombre);
    const nuevoPrecio = parseFloat(prompt('Ingrese el nuevo precio:', productoEditar.precio));
    const nuevaDescripcion = prompt('Ingrese la nueva descripción:', productoEditar.descripcion);
    const nuevaImagen = prompt('Ingrese el nuevo nombre de la imagen (ejemplo: producto3.jpg):', productoEditar.imagen);

    productoEditar.nombre = nuevoNombre;
    productoEditar.precio = nuevoPrecio;
    productoEditar.descripcion = nuevaDescripcion;
    productoEditar.imagen = nuevaImagen;

    mostrarProductos();
}

// Función para eliminar un producto
function eliminarProducto(idProducto) {
    productos = productos.filter(producto => producto.id !== idProducto);
    mostrarProductos();
}

// Mostrar los productos iniciales
mostrarProductos();
