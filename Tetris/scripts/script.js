"use strict"

document.addEventListener("DOMContentLoaded", function () {

    // Figuras
    const arrayFiguras = [
        [[1, 1, 1, 1]],         // Palo
        [[1, 1], [1, 1]],       // Cuadrado
        [[0, 1, 0], [1, 1, 1]], // Pincho
        [[0, 1, 1], [1, 1, 0]], // Ese
        [[1, 1, 0], [0, 1, 1]], // Zeta
        [[1, 0, 0], [1, 1, 1]], // Jota
        [[0, 0, 1], [1, 1, 1]]  // Ele
    ];

    //Fondo
    document.body.style.backgroundImage = "url('./recursos/imagenes/space.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    //Div general
    const divGeneral = document.getElementById("contenedorCompleto");
    divGeneral.style.width = "90%";
    divGeneral.style.height = "925px";
    divGeneral.style.marginLeft = "5%";
    divGeneral.style.display = "flex";

    //Div cuentaPiezas
    const cuentaPiezas = document.createElement("div");
    cuentaPiezas.id = "cuentaPiezas";
    cuentaPiezas.style.width = "30%";
    cuentaPiezas.style.height = "100%";
    divGeneral.appendChild(cuentaPiezas);

    //Div titulo estadisicas
    const tituloEstadisticas = document.createElement("div");
    tituloEstadisticas.id = "tituloEstadisticas";
    tituloEstadisticas.style.height = "10%";
    tituloEstadisticas.style.display = "flex";
    tituloEstadisticas.style.justifyContent = "center";
    tituloEstadisticas.style.alignItems = "center";
    cuentaPiezas.appendChild(tituloEstadisticas);

    //Titulo estadisticas
    const titulo = document.createElement("h1");
    titulo.innerHTML = "ESTADISTICAS";
    titulo.style.color = "#CC3A1F";
    tituloEstadisticas.appendChild(titulo);

    //Div piezas y cantidad
    const piezasCantidad = document.createElement("div");
    piezasCantidad.id = "piezasCantidad";
    piezasCantidad.style.height = "90%";
    piezasCantidad.style.display = "flex";
    cuentaPiezas.appendChild(piezasCantidad);

    //div mostrarPiezas
    const mostrarPiezas = document.createElement("div");
    mostrarPiezas.id = "mostrarPiezas";
    mostrarPiezas.style.width = "70%";
    mostrarPiezas.style.height = "100%";
    mostrarPiezas.style.display = "flex";
    mostrarPiezas.style.flexDirection = "column";
    mostrarPiezas.style.justifyContent = "center";
    mostrarPiezas.style.alignItems = "center";
    piezasCantidad.appendChild(mostrarPiezas);

    // div mostrarPalo
    const mostrarPalo = document.createElement("div");
    mostrarPalo.id = "mostrarPalo";
    mostrarPalo.style.width = "100%";
    mostrarPalo.style.height = "14%";
    mostrarPalo.style.display = "flex";
    mostrarPalo.style.justifyContent = "center";
    mostrarPalo.style.alignItems = "center";
    mostrarPiezas.appendChild(mostrarPalo);

    //Dibujo palo
    for (let i = 0; i < 4; i++) {
        const dibujoPalo = document.createElement("div");
        dibujoPalo.classList.add("dibujoPalo");
        dibujoPalo.style.width = "42px";
        dibujoPalo.style.height = "42px";
        dibujoPalo.style.border = "1px solid white";
        dibujoPalo.style.backgroundColor = "#2a3c64";
        mostrarPalo.appendChild(dibujoPalo);
    }

    // div mostrarCuadrado
    const mostrarCuadrado = document.createElement("div");
    mostrarCuadrado.id = "mostrarCuadrado";
    mostrarCuadrado.style.width = "100%";
    mostrarCuadrado.style.height = "14%";
    mostrarCuadrado.style.display = "flex";
    mostrarCuadrado.style.flexDirection = "column";
    mostrarCuadrado.style.justifyContent = "center";
    mostrarCuadrado.style.alignItems = "center";
    mostrarPiezas.appendChild(mostrarCuadrado);

    // Dibujar cuadrado
    for (let i = 0; i < 2; i++) {
        const fila = document.createElement("div");
        fila.style.display = "flex";
        for (let j = 0; j < 2; j++) {
            const dibujoCuadrado = document.createElement("div");
            dibujoCuadrado.classList.add("dibujoCuadrado");
            dibujoCuadrado.style.width = "42px";
            dibujoCuadrado.style.height = "42px";
            dibujoCuadrado.style.backgroundColor = "#f1d300";
            dibujoCuadrado.style.border = "1px solid white";
            fila.appendChild(dibujoCuadrado);
        }
        mostrarCuadrado.appendChild(fila);
    }

    // div mostrarPincho
    const mostrarPincho = document.createElement("div");
    mostrarPincho.id = "mostrarPincho";
    mostrarPincho.style.width = "100%";
    mostrarPincho.style.height = "14%";
    mostrarPincho.style.display = "flex";
    mostrarPincho.style.flexDirection = "column";
    mostrarPincho.style.justifyContent = "center";
    mostrarPincho.style.alignItems = "center";
    mostrarPiezas.appendChild(mostrarPincho);

    // Dibujar pincho
    for (let i = 0; i < arrayFiguras[2].length; i++) {
        const fila = arrayFiguras[2][i];
        const filaDiv = document.createElement("div");
        filaDiv.style.display = "flex";
        for (let j = 0; j < fila.length; j++) {
            const celda = fila[j];
            const celdaDiv = document.createElement("div");
            celdaDiv.style.width = "42px";
            celdaDiv.style.height = "42px";
            celdaDiv.style.backgroundColor = celda === 1 ? "#7a4f9d" : "transparent";  // el valor de la celda define el color
            // Eliminar el borde que no quiero
            if (i === 0 && (j === 0 || j === 2)) {
                celdaDiv.style.border = "none";
            } else {
                celdaDiv.style.border = "1px solid white";
            }
            filaDiv.appendChild(celdaDiv);
        }
        mostrarPincho.appendChild(filaDiv);
    }

    // div mostrarEse
    const mostrarEse = document.createElement("div");
    mostrarEse.id = "mostrarPalo";
    mostrarEse.style.width = "100%";
    mostrarEse.style.height = "14%";
    mostrarEse.style.display = "flex";
    mostrarEse.style.flexDirection = "column";
    mostrarEse.style.justifyContent = "center";
    mostrarEse.style.alignItems = "center";
    mostrarPiezas.appendChild(mostrarEse);

    // Dibujar Ese
    for (let i = 0; i < arrayFiguras[3].length; i++) {
        const fila = arrayFiguras[3][i];
        const filaDiv = document.createElement("div");
        filaDiv.style.display = "flex";
        filaDiv.style.margin = "0"; // Eliminar margen de filas
        filaDiv.style.padding = "0"; // Eliminar padding de filas

        for (let j = 0; j < fila.length; j++) {
            const celda = fila[j];
            const celdaDiv = document.createElement("div");
            celdaDiv.style.width = "42px";
            celdaDiv.style.height = "42px";
            celdaDiv.style.backgroundColor = celda === 1 ? "#00ff87" : "transparent";
            celdaDiv.style.boxSizing = "border-box"; // Para asegurarse que los bordes no alteren el tamaño
            // Eliminar bordes
            if ((i === 0 && j === 0) || (i === 1 && j === 2)) {
                celdaDiv.style.border = "none";
            } else {
                celdaDiv.style.border = "1px solid white";
            }

            filaDiv.appendChild(celdaDiv);
        }
        mostrarEse.appendChild(filaDiv);
    }

    // div mostrarZeta
    const mostrarZeta = document.createElement("div");
    mostrarZeta.id = "mostrarZeta";
    mostrarZeta.style.width = "100%";
    mostrarZeta.style.height = "14%";
    mostrarZeta.style.display = "flex";
    mostrarZeta.style.flexDirection = "column";
    mostrarZeta.style.justifyContent = "center";
    mostrarZeta.style.alignItems = "center";
    mostrarPiezas.appendChild(mostrarZeta);

    // Dibujar Zeta
    for (let i = 0; i < arrayFiguras[4].length; i++) {
        const fila = arrayFiguras[4][i];
        const filaDiv = document.createElement("div");
        filaDiv.style.display = "flex";
        filaDiv.style.margin = "0";
        filaDiv.style.padding = "0";
        for (let j = 0; j < fila.length; j++) {
            const celda = fila[j];
            const celdaDiv = document.createElement("div");
            celdaDiv.style.width = "42px";
            celdaDiv.style.height = "42px";
            celdaDiv.style.backgroundColor = celda === 1 ? "#d54b30" : "transparent";
            celdaDiv.style.boxSizing = "border-box";
            // Eliminar bordes
            if ((i === 0 && j === 2) || (i === 1 && j === 0)) {
                celdaDiv.style.border = "none";
            } else {
                celdaDiv.style.border = "1px solid white";
            }
            filaDiv.appendChild(celdaDiv);
        }
        mostrarZeta.appendChild(filaDiv);
    }

    // div mostrarJota
    const mostrarJota = document.createElement("div");
    mostrarJota.id = "mostrarJota";
    mostrarJota.style.width = "100%";
    mostrarJota.style.height = "14%";
    mostrarJota.style.display = "flex";
    mostrarJota.style.flexDirection = "column";
    mostrarJota.style.justifyContent = "center";
    mostrarJota.style.alignItems = "center";
    mostrarPiezas.appendChild(mostrarJota);

    // Dibujar Jota
    for (let i = 0; i < arrayFiguras[5].length; i++) {
        const fila = arrayFiguras[5][i];
        const filaDiv = document.createElement("div");
        filaDiv.style.display = "flex";
        filaDiv.style.margin = "0";
        filaDiv.style.padding = "0";

        for (let j = 0; j < fila.length; j++) {
            const celda = fila[j];
            const celdaDiv = document.createElement("div");
            celdaDiv.style.width = "42px";
            celdaDiv.style.height = "42px";
            celdaDiv.style.backgroundColor = celda === 1 ? "#a3c8f0" : "transparent";
            celdaDiv.style.boxSizing = "border-box";
            // Eliminar bordes
            if ((i === 0 && j === 1) || (i === 0 && j === 2)) {
                celdaDiv.style.border = "none";
            } else {
                celdaDiv.style.border = "1px solid white";
            }
            filaDiv.appendChild(celdaDiv);
        }
        mostrarJota.appendChild(filaDiv);
    }

    // div mostrarEle
    const mostrarEle = document.createElement("div");
    mostrarEle.id = "mostrarEle";
    mostrarEle.style.width = "100%";
    mostrarEle.style.height = "14%";
    mostrarEle.style.display = "flex";
    mostrarEle.style.flexDirection = "column";
    mostrarEle.style.justifyContent = "center";
    mostrarEle.style.alignItems = "center";
    mostrarPiezas.appendChild(mostrarEle);

    // Dibujar Ele
    for (let i = 0; i < arrayFiguras[6].length; i++) {
        const fila = arrayFiguras[6][i];
        const filaDiv = document.createElement("div");
        filaDiv.style.display = "flex";
        filaDiv.style.margin = "0";
        filaDiv.style.padding = "0";

        for (let j = 0; j < fila.length; j++) {
            const celda = fila[j];
            const celdaDiv = document.createElement("div");
            celdaDiv.style.width = "42px";
            celdaDiv.style.height = "42px";
            celdaDiv.style.backgroundColor = celda === 1 ? "#ff6d00" : "transparent";
            celdaDiv.style.boxSizing = "border-box";
            // Eliminar bordes
            if ((i === 0 && j === 0) || (i === 0 && j === 1)) {
                celdaDiv.style.border = "none";
            } else {
                celdaDiv.style.border = "1px solid white";
            }
            filaDiv.appendChild(celdaDiv);
        }
        mostrarEle.appendChild(filaDiv);
    }

    //Div mostrarCantidades
    const mostrarCantidades = document.createElement("div");
    mostrarCantidades.id = "mostrarCantidades";
    mostrarCantidades.style.width = "30%";
    mostrarCantidades.style.height = "100%";
    mostrarCantidades.style.display = "flex";
    mostrarCantidades.style.flexDirection = "column";
    mostrarCantidades.style.justifyContent = "center";
    mostrarCantidades.style.alignItems = "center";
    piezasCantidad.appendChild(mostrarCantidades);

    //Div contadorPalo
    const contadorPalo = document.createElement("div");
    contadorPalo.id = "contadorPalo";
    contadorPalo.style.width = "100%";
    contadorPalo.style.height = "14%";
    contadorPalo.style.display = "flex";
    contadorPalo.style.justifyContent = "center";
    contadorPalo.style.alignItems = "center";
    mostrarCantidades.appendChild(contadorPalo);

    //cantidadPalo
    const cantidadPalo = document.createElement("h1");
    cantidadPalo.id = "cantidadPalo";
    cantidadPalo.style.fontSize = "50px";
    cantidadPalo.innerHTML = "0";
    cantidadPalo.style.color = "#A7FFFF";
    contadorPalo.appendChild(cantidadPalo);

    //Div contadorCuadrado
    const contadorCuadrado = document.createElement("div");
    contadorCuadrado.id = "contadorCuadrado";
    contadorCuadrado.style.width = "100%";
    contadorCuadrado.style.height = "14%";
    contadorCuadrado.style.display = "flex";
    contadorCuadrado.style.justifyContent = "center";
    contadorCuadrado.style.alignItems = "center";
    mostrarCantidades.appendChild(contadorCuadrado);

    //cantidadCuadrado
    const cantidadCuadrado = document.createElement("h1");
    cantidadCuadrado.id = "cantidadCuadrado";
    cantidadCuadrado.style.fontSize = "50px";
    cantidadCuadrado.innerHTML = "0";
    cantidadCuadrado.style.color = "#A7FFFF";
    contadorCuadrado.appendChild(cantidadCuadrado);

    //Div contadorPincho
    const contadorPincho = document.createElement("div");
    contadorPincho.id = "contadorPincho";
    contadorPincho.style.width = "100%";
    contadorPincho.style.height = "14%";
    contadorPincho.style.display = "flex";
    contadorPincho.style.justifyContent = "center";
    contadorPincho.style.alignItems = "center";
    mostrarCantidades.appendChild(contadorPincho);

    //cantidadPincho
    const cantidadPincho = document.createElement("h1");
    cantidadPincho.id = "cantidadPincho";
    cantidadPincho.style.fontSize = "50px";
    cantidadPincho.innerHTML = "0";
    cantidadPincho.style.color = "#A7FFFF";
    contadorPincho.appendChild(cantidadPincho);

    //Div contadorEse
    const contadorEse = document.createElement("div");
    contadorEse.id = "contadorEse";
    contadorEse.style.width = "100%";
    contadorEse.style.height = "14%";
    contadorEse.style.display = "flex";
    contadorEse.style.justifyContent = "center";
    contadorEse.style.alignItems = "center";
    mostrarCantidades.appendChild(contadorEse);

    //cantidadEse
    const cantidadEse = document.createElement("h1");
    cantidadEse.id = "cantidadEse";
    cantidadEse.style.fontSize = "50px";
    cantidadEse.innerHTML = "0";
    cantidadEse.style.color = "#A7FFFF";
    contadorEse.appendChild(cantidadEse);

    //Div contadorZeta
    const contadorZeta = document.createElement("div");
    contadorZeta.id = "contadorZeta";
    contadorZeta.style.width = "100%";
    contadorZeta.style.height = "14%";
    contadorZeta.style.display = "flex";
    contadorZeta.style.justifyContent = "center";
    contadorZeta.style.alignItems = "center";
    mostrarCantidades.appendChild(contadorZeta);

    //cantidadZeta
    const cantidadZeta = document.createElement("h1");
    cantidadZeta.id = "cantidadZeta";
    cantidadZeta.style.fontSize = "50px";
    cantidadZeta.innerHTML = "0";
    cantidadZeta.style.color = "#A7FFFF";
    contadorZeta.appendChild(cantidadZeta);

    //Div contadorJota
    const contadorJota = document.createElement("div");
    contadorJota.id = "contadorJota";
    contadorJota.style.width = "100%";
    contadorJota.style.height = "14%";
    contadorJota.style.display = "flex";
    contadorJota.style.justifyContent = "center";
    contadorJota.style.alignItems = "center";
    mostrarCantidades.appendChild(contadorJota);

    //cantidadJota
    const cantidadJota = document.createElement("h1");
    cantidadJota.id = "cantidadJota";
    cantidadJota.style.fontSize = "50px";
    cantidadJota.innerHTML = "0";
    cantidadJota.style.color = "#A7FFFF";
    contadorJota.appendChild(cantidadJota);

    //Div contadorEle
    const contadorEle = document.createElement("div");
    contadorEle.id = "contadorEle";
    contadorEle.style.width = "100%";
    contadorEle.style.height = "14%";
    contadorEle.style.display = "flex";
    contadorEle.style.justifyContent = "center";
    contadorEle.style.alignItems = "center";
    mostrarCantidades.appendChild(contadorEle);

    //cantidadEle
    const cantidadEle = document.createElement("h1");
    cantidadEle.id = "cantidadEle";
    cantidadEle.style.fontSize = "50px";
    cantidadEle.innerHTML = "0";
    cantidadEle.style.color = "#A7FFFF";
    contadorEle.appendChild(cantidadEle);

    //Div donde va el tetris
    const divTetris = document.createElement("div");
    divTetris.id = "divTetris";
    divTetris.style.width = "40%";
    divTetris.style.height = "100%";
    divTetris.style.display = "flex";
    divTetris.style.justifyContent = "center";
    divTetris.style.alignItems = "center";
    divGeneral.appendChild(divTetris);

    // Divs que forman la tabla del tetris
    const tablaTetris = document.createElement("div");
    tablaTetris.id = "tablaTetris";

    for (let i = 0; i < 20; i++) {
        const fila = document.createElement("div");
        fila.classList.add("fila");
        fila.style.display = "flex";
        if (i == 0) {
            fila.style.borderTop = "1px solid white";
        } else if (i == 19) {
            fila.style.borderBottom = "1px solid white";
        }
        for (let j = 0; j < 10; j++) {
            const celda = document.createElement("div");
            celda.classList.add("celda");
            celda.style.height = "44px";
            celda.style.width = "44px";
            celda.style.backgroundColor
            if (j == 9) {
                fila.style.borderRight = "1px solid white";
            } else if (j == 0) {
                fila.style.borderLeft = "1px solid white";
            }
            fila.appendChild(celda);
        }
        tablaTetris.appendChild(fila);
    }
    divTetris.appendChild(tablaTetris);

    // Div derecha
    const divDerecha = document.createElement("div");
    divDerecha.id = "divDerecha";
    divDerecha.style.width = "30%";
    divDerecha.style.height = "100%";
    divDerecha.style.display = "flex";
    divDerecha.style.flexDirection = "column";
    divGeneral.appendChild(divDerecha);

    //Div siguientePieza
    const divSiguientePieza = document.createElement("div");
    divSiguientePieza.id = "siguientePieza";
    divSiguientePieza.style.width = "100%";
    divSiguientePieza.style.height = "40%";
    divSiguientePieza.style.display = "flex";
    divSiguientePieza.style.flexDirection = "column";
    divSiguientePieza.style.justifyContent = "space-evenly"
    divSiguientePieza.style.alignItems = "center";
    divDerecha.appendChild(divSiguientePieza);

    // Titulo siguiente pieza
    const tituloSiguiente = document.createElement("h1");
    tituloSiguiente.innerHTML = "SIGUIENTE";
    tituloSiguiente.style.color = "#66FF66";
    divSiguientePieza.appendChild(tituloSiguiente);

    // Divs para mostrar la siguiente pieza
    const tablaMostrarSiguiente = document.createElement("div");
    tablaMostrarSiguiente.id = "tablaMostrarSiguiente";

    for (let i = 0; i < 2; i++) {
        const fila = document.createElement("div");
        fila.classList.add("fila");
        fila.style.display = "flex";
        for (let j = 0; j < 4; j++) {
            const celda = document.createElement("div");
            celda.classList.add("celda");
            celda.style.height = "42px";
            celda.style.width = "42px";
            celda.style.border = "1px";
            celda.style.boxSizing = "border-box";
            fila.appendChild(celda);
        }
        tablaMostrarSiguiente.appendChild(fila);
    }
    divSiguientePieza.appendChild(tablaMostrarSiguiente);

    // Div para botones
    const divBoton = document.createElement("div");
    divBoton.id = "divBoton";
    divBoton.style.width = "100%";
    divBoton.style.height = "20%";
    divBoton.style.display = "flex";
    divBoton.style.justifyContent = "space-evenly";
    divBoton.style.alignItems = "center";
    divDerecha.appendChild(divBoton);

    //Boton para comenzar
    const botonStart = document.createElement("button");
    botonStart.id = "start";
    botonStart.innerHTML = "START";
    botonStart.style.width = "200px";
    botonStart.style.height = "100px";
    botonStart.style.borderRadius = "50px";
    botonStart.style.fontSize = "30px";
    botonStart.style.color = "whitesmoke";
    botonStart.style.backgroundColor = "#1f3d6b";
    botonStart.style.borderColor = "white";
    divBoton.appendChild(botonStart);

    //Boton para reiniciar
    const botonReiniciar = document.createElement("button");
    botonReiniciar.id = "reiniciar";
    botonReiniciar.innerHTML = "REINICIAR";
    botonReiniciar.style.width = "200px";
    botonReiniciar.style.height = "100px";
    botonReiniciar.style.borderRadius = "50px";
    botonReiniciar.style.fontSize = "30px";
    botonReiniciar.style.color = "whitesmoke";
    botonReiniciar.style.backgroundColor = "#1f3d6b";
    botonReiniciar.style.borderColor = "white";
    divBoton.appendChild(botonReiniciar);

    // divPuntuacion
    const divPuntuacion = document.createElement("div");
    divPuntuacion.id = "divPuntuacion";
    divPuntuacion.style.width = "100%";
    divPuntuacion.style.height = "40%";
    divPuntuacion.style.display = "flex";
    divPuntuacion.style.flexDirection = "column";
    divPuntuacion.style.justifyContent = "center";
    divDerecha.appendChild(divPuntuacion);

    //divTituloPuntuacion
    const divTituloPuntuacion = document.createElement("div");
    divTituloPuntuacion.id = "divTituloPuntuacion";
    divTituloPuntuacion.style.height = "40%";
    divTituloPuntuacion.style.display = "flex";
    divTituloPuntuacion.style.alignItems = "center"
    divTituloPuntuacion.style.justifyContent = "center";
    divPuntuacion.appendChild(divTituloPuntuacion);

    const tituloPuntuacion = document.createElement("h1");
    tituloPuntuacion.innerHTML = "PUNTUACIÓN";
    tituloPuntuacion.style.color = "#66FF66";
    divTituloPuntuacion.appendChild(tituloPuntuacion);

    //divCantidadPuntuacion
    const divCantidadPuntuacion = document.createElement("div");
    divCantidadPuntuacion.id = "divCantidadPuntuacion";
    divCantidadPuntuacion.style.height = "60%";
    divCantidadPuntuacion.style.display = "flex";
    divCantidadPuntuacion.style.alignItems = "center"
    divCantidadPuntuacion.style.justifyContent = "center";
    divPuntuacion.appendChild(divCantidadPuntuacion)

    const cantidadPuntuacion = document.createElement("h1");
    cantidadPuntuacion.innerHTML = "0";
    cantidadPuntuacion.style.color = "#A7FFFF";
    cantidadPuntuacion.style.fontSize = "75px";
    divCantidadPuntuacion.appendChild(cantidadPuntuacion);

    //////////////////////////////////////////////////////////////////////////////////////////////

    // Declaración de las variables
    let tablero = Array(20).fill().map(() => Array(10).fill(0));
    let piezaActual;
    let siguientePieza;
    let filaActual = 0;
    let columnaActual = 0;
    const celdasTablero = document.querySelectorAll("#tablaTetris .celda");
    const celdasSiguiente = document.querySelectorAll("#tablaMostrarSiguiente .celda");
    let intervaloCaida;
    let velocidadBajada = 1000;
    let color;
    let ultimoMultiplo = 0;
    const musicaFondo = new Audio("./recursos/musica/espacio.mp3");
    const musicaEliminar = new Audio("./recursos/musica/laser.mp3");
    const musicaFinal = new Audio("./recursos/musica/Ganar.mp3");

    // Función que devuelve una pieza aleatoria
    function piezaAleatoria(arrayFiguras) {
        return arrayFiguras[Math.floor(Math.random() * arrayFiguras.length)];
    }

    // Función para dibujar la siguiente pieza
    function dibujarPiezaSiguiente(pieza) {
        let color = obtenerColorFigura(pieza);
        // Asegúrate de que las celdas estén bien seleccionadas y vacíalas correctamente
        celdasSiguiente.forEach(celda => {
            celda.style.backgroundColor = "transparent";
            celda.style.borderColor = "transparent";
        });
        // Dibujar la pieza siguiente
        const filasSiguiente = document.querySelectorAll("#tablaMostrarSiguiente .fila");
        pieza.forEach((fila, indiceFila) => {
            fila.forEach((celda, indiceColumna) => {
                if (celda === 1) {
                    const celdaSiguiente = filasSiguiente[indiceFila]?.children[indiceColumna];
                    if (celdaSiguiente) {
                        celdaSiguiente.style.backgroundColor = color;
                        celdaSiguiente.style.border = "1px solid white";
                    }
                }
            });
        });
    }

    // Funcion para limpiar la posición de la pieza en el tablero
    function limpiarPosicionPieza(pieza, fila, columna) {
        const filasTablero = document.querySelectorAll("#tablaTetris .fila");
        pieza.forEach((filaPieza, i) => {
            filaPieza.forEach((celdaPieza, j) => {
                if (celdaPieza === 1) {
                    const filaTablero = filasTablero[fila + i];
                    const celdaTablero = filaTablero.children[columna + j];
                    celdaTablero.style.backgroundColor = "transparent";
                    tablero[fila + i][columna + j] = 0;
                }
            });
        });

    }

    // Funcion que comprueba si una pieza puede moverse
    function comprobarColisiones(pieza, fila, columna) {
        for (let i = 0; i < pieza.length; i++) {
            for (let j = 0; j < pieza[i].length; j++) {
                if (pieza[i][j] !== 0) {
                    let nuevaFila = fila + i;
                    let nuevaColumna = columna + j;

                    if (nuevaFila < 0 || nuevaFila >= tablero.length || nuevaColumna < 0 || nuevaColumna >= tablero[0].length) {
                        return false;   // Si la pieza se sale del tablero
                    }

                    if (tablero[nuevaFila][nuevaColumna] !== 0) {
                        return false;   // Si hay una pieza fija en esa posición
                    }
                }
            }
        }
        return true;    //Si no hay colisiones
    }

    // Función para colocar la pieza en el tablero
    function colocarPiezaEnTablero(pieza, fila, columna) {
        let color = obtenerColorFigura(pieza);
        const filasTablero = document.querySelectorAll("#tablaTetris .fila");
        pieza.forEach((filaPieza, i) => {
            filaPieza.forEach((celdaPieza, j) => {
                if (celdaPieza === 1) {
                    const celdaTablero = filasTablero[fila + i].children[columna + j];
                    celdaTablero.style.backgroundColor = color;
                }
            });
        });
    }

    // Función que fija la pieza en el tablero
    function fijarPieza(pieza, fila, columna) {
        const filasTablero = document.querySelectorAll("#tablaTetris .fila");
        pieza.forEach((filaPieza, i) => {
            filaPieza.forEach((celdaPieza, j) => {
                if (celdaPieza === 1) {
                    const celdaTablero = filasTablero[fila + i].children[columna + j];
                    celdaTablero.style.backgroundColor = color;
                    tablero[fila + i][columna + j] = color;
                }
            });
        });

        aumentarPuntuacion(50);
        eliminarLineas();
    }

    // Función para eliminar las filas completas
    function eliminarLineas() {
        for (let i = 0; i < tablero.length; i++) {
            let filaLlena = true;
            for (let j = 0; j < tablero[i].length; j++) {
                if (tablero[i][j] === 0) {
                    filaLlena = false;
                }
            }

            if (filaLlena) {
                tablero.splice(i, 1);
                tablero.unshift(new Array(10).fill(0));
                actualizarTablero();
                aumentarPuntuacion(100);
                musicaEliminar.play();
            }
        }

    }

    // Función para actualizar el tablero visualmente después de eliminar la fila
    function actualizarTablero() {
        const filasTablero = document.querySelectorAll("#tablaTetris .fila");
        for (let i = 0; i < 20; i++) {
            const fila = filasTablero[i];
            for (let j = 0; j < 10; j++) {
                const celda = fila.children[j];
                const colorCelda = tablero[i][j];
                if (colorCelda !== 0) {
                    // Si la celda tiene un color almacenado (diferente de 0), usar ese color
                    celda.style.backgroundColor = colorCelda;
                } else {
                    // Si es 0, mantenerla transparente
                    celda.style.backgroundColor = "transparent";
                }
            }
        }
    }

    // Función que maneja la caida de las piezas
    function bajarYColocarPieza() {
        if (comprobarColisiones(piezaActual, filaActual + 1, columnaActual)) {
            limpiarPosicionPieza(piezaActual, filaActual, columnaActual);
            filaActual++;
            colocarPiezaEnTablero(piezaActual, filaActual, columnaActual);
        } else {
            fijarPieza(piezaActual, filaActual, columnaActual);
            piezaActual = siguientePieza;
            color = obtenerColorFigura(piezaActual);
            actualizarContadorPiezas(piezaActual);
            siguientePieza = piezaAleatoria(arrayFiguras);
            dibujarPiezaSiguiente(siguientePieza);
            // Fila inicio
            filaActual = 0;
            // Centrado horizontal
            columnaActual = Math.floor(10 / 2) - Math.floor(piezaActual[0].length / 2);
            // Colocar la pieza
            colocarPiezaEnTablero(piezaActual, filaActual, columnaActual);

            // Comenzar la caida después de colocar la pieza
            if (!comprobarColisiones(piezaActual, filaActual, columnaActual)) {
                clearInterval(intervaloCaida);
                musicaFinal.play();
                Swal.fire({
                    title: 'Fin de la partida',
                    text: 'Tu puntuacion ha sido de ' + cantidadPuntuacion.textContent + ' puntos',
                    icon: 'info',
                    confirmButtonText: 'Continuar'
                })
            }
        }
        aumentarDificultad();
    }

    // Función rotar piezas
    function rotarPieza(pieza, fila, columna) {
        let piezaGirada = [];

        // Rotar la pieza 90 grados a la derecha
        for (let i = 0; i < pieza[0].length; i++) {
            let nuevaFila = [];
            for (let j = pieza.length - 1; j >= 0; j--) {
                nuevaFila.push(pieza[j][i]);
            }
            piezaGirada.push(nuevaFila);
        }

        let anchoPieza = piezaGirada[0].length;
        let altoPieza = piezaGirada.length;
        let anchoTablero = tablero[0].length;
        let altoTablero = tablero.length;

        // Verificar si la pieza girada cabe dentro del tablero
        if (columna + anchoPieza > anchoTablero || fila + altoPieza > altoTablero) {
            return pieza; // No cabe, devolver la pieza original sin girar
        }

        // Comprobar colisiones antes de colocar la pieza
        if (comprobarColisiones(piezaGirada, fila, columna)) {
            limpiarPosicionPieza(pieza, fila, columna);
            colocarPiezaEnTablero(piezaGirada, fila, columna);
            return piezaGirada;
        }

        // Si no hay espacio, devolver la pieza original
        return pieza;
    }

    // Lógica de control con teclas de dirección
    document.addEventListener('keydown', function (event) {
        if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'ArrowUp' || event.key == 'ArrowDown') {
            event.preventDefault(); // Evita el scroll de la página
            switch (event.key) {
                case 'ArrowLeft':
                    moverPiezaIzquierda();
                    break;
                case 'ArrowRight':
                    moverPiezaDerecha();
                    break;
                case 'ArrowDown':
                    bajarPieza();
                    break;
                case 'ArrowUp':
                    piezaActual = rotarPieza(piezaActual, filaActual, columnaActual);
                    break;
            }
        }
    });

    // Función para mover la pieza a la izquierda
    function moverPiezaIzquierda() {
        if (comprobarColisiones(piezaActual, filaActual, columnaActual - 1)) {
            limpiarPosicionPieza(piezaActual, filaActual, columnaActual);
            columnaActual--;
            colocarPiezaEnTablero(piezaActual, filaActual, columnaActual);
        }
    }

    // Función para mover la pieza a la derecha
    function moverPiezaDerecha() {
        if (comprobarColisiones(piezaActual, filaActual, columnaActual + 1)) {
            limpiarPosicionPieza(piezaActual, filaActual, columnaActual);
            columnaActual++;
            colocarPiezaEnTablero(piezaActual, filaActual, columnaActual);
        }
    }

    // Función para bajar la pieza
    function bajarPieza() {
        if (comprobarColisiones(piezaActual, filaActual + 1, columnaActual)) {
            limpiarPosicionPieza(piezaActual, filaActual, columnaActual);
            filaActual++;
            colocarPiezaEnTablero(piezaActual, filaActual, columnaActual);
        }
    }

    // Función para aumentar la puntuación
    function aumentarPuntuacion(puntos) {
        let cantidadPuntuacion = document.querySelector("#divCantidadPuntuacion h1");
        let puntuacionActual = parseInt(cantidadPuntuacion.innerHTML);
        cantidadPuntuacion.innerHTML = puntuacionActual + puntos;
    }

    function actualizarContadorPiezas(pieza) {
        // Verificar qué tipo de pieza se ha colocado
        if (pieza === arrayFiguras[0]) {
            // Palo
            let cantidadPalo = document.getElementById("cantidadPalo");
            cantidadPalo.innerText = parseInt(cantidadPalo.innerText) + 1;
        } else if (pieza === arrayFiguras[1]) {
            // Cuadrado
            let cantidadCuadrado = document.getElementById("cantidadCuadrado");
            cantidadCuadrado.innerText = parseInt(cantidadCuadrado.innerText) + 1;
        } else if (pieza === arrayFiguras[2]) {
            // Pincho
            let cantidadPincho = document.getElementById("cantidadPincho");
            cantidadPincho.innerText = parseInt(cantidadPincho.innerText) + 1;
        } else if (pieza === arrayFiguras[3]) {
            // Ese
            let cantidadEse = document.getElementById("cantidadEse");
            cantidadEse.innerText = parseInt(cantidadEse.innerText) + 1;
        } else if (pieza === arrayFiguras[4]) {
            // Zeta
            let cantidadZeta = document.getElementById("cantidadZeta");
            cantidadZeta.innerText = parseInt(cantidadZeta.innerText) + 1;
        } else if (pieza === arrayFiguras[5]) {
            // Jota
            let cantidadJota = document.getElementById("cantidadJota");
            cantidadJota.innerText = parseInt(cantidadJota.innerText) + 1;
        } else if (pieza === arrayFiguras[6]) {
            // Ele
            let cantidadEle = document.getElementById("cantidadEle");
            cantidadEle.innerText = parseInt(cantidadEle.innerText) + 1;
        }
    }

    //Funcion para la eleccion de los colores
    function obtenerColorFigura(figura) {

        const variantesFiguras = {
            palo: [
                [[1, 1, 1, 1]], // Horizontal
                [[1], [1], [1], [1]] // Vertical
            ],
            cuadrado: [
                [[1, 1], [1, 1]] // No tiene rotaciones, siempre es igual
            ],
            pincho: [
                [[0, 1, 0], [1, 1, 1]], // 0°
                [[1, 0], [1, 1], [1, 0]], // 90°
                [[1, 1, 1], [0, 1, 0]], // 180°
                [[0, 1], [1, 1], [0, 1]] // 270°
            ],
            j: [
                [[1, 0, 0], [1, 1, 1]], // 0°
                [[1, 1], [1, 0], [1, 0]], // 90°
                [[1, 1, 1], [0, 0, 1]], // 180°
                [[0, 1], [0, 1], [1, 1]] // 270°
            ],
            l: [
                [[0, 0, 1], [1, 1, 1]], // 0°
                [[1, 0], [1, 0], [1, 1]], // 90°
                [[1, 1, 1], [1, 0, 0]], // 180°
                [[1, 1], [0, 1], [0, 1]] // 270°
            ],
            s: [
                [[0, 1, 1], [1, 1, 0]], // 0°
                [[1, 0], [1, 1], [0, 1]] // 90°
            ],
            z: [
                [[1, 1, 0], [0, 1, 1]], // 0°
                [[0, 1], [1, 1], [1, 0]] // 90°
            ]
        };

        if (reconocerFiguras(figura, variantesFiguras.palo[0]) || reconocerFiguras(figura, variantesFiguras.palo[1])) {
            return "#2a3c64"; // Color para el palo
        } else if (reconocerFiguras(figura, variantesFiguras.cuadrado[0])) {
            return "#f1d300"; // Color para el cuadrado
        } else if (
            reconocerFiguras(figura, variantesFiguras.pincho[0]) ||
            reconocerFiguras(figura, variantesFiguras.pincho[1]) ||
            reconocerFiguras(figura, variantesFiguras.pincho[2]) ||
            reconocerFiguras(figura, variantesFiguras.pincho[3])
        ) {
            return "#7a4f9d"; // Color para el pincho
        } else if (
            reconocerFiguras(figura, variantesFiguras.j[0]) ||
            reconocerFiguras(figura, variantesFiguras.j[1]) ||
            reconocerFiguras(figura, variantesFiguras.j[2]) ||
            reconocerFiguras(figura, variantesFiguras.j[3])
        ) {
            return "#a3c8f0"; // Color para la jota
        } else if (
            reconocerFiguras(figura, variantesFiguras.l[0]) ||
            reconocerFiguras(figura, variantesFiguras.l[1]) ||
            reconocerFiguras(figura, variantesFiguras.l[2]) ||
            reconocerFiguras(figura, variantesFiguras.l[3])
        ) {
            return "#ff6d00"; // Color para la ele
        } else if (
            reconocerFiguras(figura, variantesFiguras.s[0]) ||
            reconocerFiguras(figura, variantesFiguras.s[1])
        ) {
            return "#00ff87"; // Color para la ese
        } else if (
            reconocerFiguras(figura, variantesFiguras.z[0]) ||
            reconocerFiguras(figura, variantesFiguras.z[1])
        ) {
            return "#d54b30"; // Color para la zeta
        }

        return null; // Si no se encuentra el color, devolver null
    }

    // Función para comparar dos figuras
    function reconocerFiguras(figura1, figura2) {
        if (figura1.length !== figura2.length) return false;
        for (let i = 0; i < figura1.length; i++) {
            if (figura1[i].length !== figura2[i].length) return false;
            for (let j = 0; j < figura1[i].length; j++) {
                if (figura1[i][j] !== figura2[i][j]) return false;
            }
        }
        return true;
    }

    //Funcion para aumentar la dificultad
    function aumentarDificultad() {
        const puntosActuales = parseInt(cantidadPuntuacion.innerHTML);

        // Calcular el próximo múltiplo de 1000
        const siguienteMultiploDeMil = Math.floor(puntosActuales / 1000) * 1000;

        // Solo actualizamos la dificultad si el siguiente múltiplo de 1000 no ha sido procesado
        if (siguienteMultiploDeMil > ultimoMultiplo) {
            velocidadBajada -= 50;  // Aumentamos la velocidad
            ultimoMultiplo = siguienteMultiploDeMil;    // Actualizamos el último múltiplo procesado
            actualizarIntervaloCaida(); // Se actualiza el intervalo de caída
        }
    }

    function actualizarIntervaloCaida() {
        // Detener el intervalo de caídas actual
        clearInterval(intervaloCaida);
        // Iniciar un nuevo intervalo con la velocidad actualizada
        intervaloCaida = setInterval(() => {
            bajarYColocarPieza();
        }, velocidadBajada);
    }

    // Dar funcionalidad al botonStart
    botonStart.addEventListener("click", function () {
        iniciarJuego();
    });

    //Dar funcionalidad al botonReiniciar
    botonReiniciar.addEventListener("click", function () {
        location.reload();
    });

    //Añadir musica de fondo
    document.body.addEventListener("click", function () {
        musicaFondo.play()
    });

    // Lógica de iniciar el juego
    function iniciarJuego() {
        tablero = Array(20).fill().map(() => Array(10).fill(0));
        celdasTablero.forEach(celda => celda.style.backgroundColor = "transparent");
        piezaActual = piezaAleatoria(arrayFiguras);
        siguientePieza = piezaAleatoria(arrayFiguras);
        filaActual = 0;
        columnaActual = Math.floor(10 / 2) - Math.floor(piezaActual[0].length / 2);
        colocarPiezaEnTablero(piezaActual, filaActual, columnaActual);
        color = obtenerColorFigura(piezaActual);
        actualizarContadorPiezas(piezaActual);
        dibujarPiezaSiguiente(siguientePieza);
        // Iniciamos el intervalo de caida
        intervaloCaida = setInterval(() => {
            bajarYColocarPieza();
        }, velocidadBajada);
    }
});