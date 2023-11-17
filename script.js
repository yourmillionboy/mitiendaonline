// Base de datos simulada de productos
let productos = [
    { id: 1, nombre: "Zapatillas de Running", precio: 199.99, descripcion: "Diseño aerodinámico para un rendimiento óptimo", imagen: "zapatillas.jpg" },
    { id: 2, nombre: "Bolso de Cuero", precio: 599.99, descripcion: "Hecho a mano con cuero genuino", imagen: "bolso.jpg" },
    // Agrega más productos según sea necesario
];

// Estado de inicio de sesión
let usuarioAutenticado = false;

// Función para mostrar el formulario de inicio de sesión
function mostrarFormularioLogin() {
    const formularioLogin = document.getElementById('formulario-login');
    formularioLogin.classList.remove('oculto');
}

// Función para ocultar el formulario de inicio de sesión
function ocultarFormularioLogin() {
    const formularioLogin = document.getElementById('formulario-login');
    formularioLogin.classList.add('oculto');
}

// Función para cerrar el formulario de inicio de sesión
function cerrarFormularioLogin() {
    ocultarFormularioLogin();
}

// Función para iniciar sesión (simulada)
function iniciarSesion() {
    const usuarioInput = document.getElementById('usuario');
    const contrasenaInput = document.getElementById('contrasena');

    // Verifica si el usuario y la contraseña son válidos (simulados)
    if (usuarioInput.value === 'usuario' && contrasenaInput.value === 'contrasena') {
        usuarioAutenticado = true;
        ocultarFormularioLogin();
        alert('Inicio de sesión exitoso. ¡Bienvenido!');
    } else {
        alert('Inicio de sesión fallido. Usuario o contraseña incorrectos.');
    }

    // Limpia los campos del formulario
    usuarioInput.value = '';
    contrasenaInput.value = '';
}

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
            <button class="boton-accion" onclick="mostrarDetallesProducto(${producto.id})">Ver Detalles</button>
            <button class="boton-accion" onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio})">Agregar al Carrito</button>
            <button class="boton-accion" onclick="editarProducto(${producto.id})">Editar</button>
            <button class="boton-accion" onclick="eliminarProducto(${producto.id})">Eliminar</button>
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

// Función para mostrar detalles de un producto
function mostrarDetallesProducto(idProducto) {
    // Aquí puedes agregar lógica para cargar los detalles del producto desde una fuente de datos
    const nombre = `Producto ${idProducto}`;
    const descripcion = `Descripción detallada del ${nombre}.`;
    const precio = Math.random() * 100 + 50;

    // Mostrar detalles en la interfaz
    const imagenDetalle = document.getElementById('imagen-detalle');
    const nombreDetalle = document.getElementById('nombre-detalle');
    const descripcionDetalle = document.getElementById('descripcion-detalle');
    const precioDetalle = document.getElementById('precio-detalle');

    imagenDetalle.src = `imagen_${idProducto}.jpg`; // Ajusta la ruta según tus necesidades
    nombreDetalle.textContent = nombre;
    descripcionDetalle.textContent = descripcion;
    precioDetalle.textContent = `Precio: $${precio.toFixed(2)}`;

    const detallesProducto = document.getElementById('detalles-producto');
    detallesProducto.classList.remove('oculto');
}
