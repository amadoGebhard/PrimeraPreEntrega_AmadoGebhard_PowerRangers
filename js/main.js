function selecRanger () {
 
    alert("Juego Seleccionador de PowerRangers. \a ¿Qué PowerRanger serías?");

    let nombre;
    while (!nombre) {
        nombre = prompt ("Hola, ¿Cuál es tu nombre?");
        if (!nombre) {
            alert("Para continuar, ingresa tu nombre.");
        }
    }

    console.log("Bienvenido estimado" + " " + nombre);

    let numero = null;
    while (true) {
        numero = parseInt(prompt(nombre + "¿Quieres saber a qué PowerRanger perteneces?\nElije un número del 1 al 6, y veré cuales son tus parecidos..."));
        if (isNaN(numero)) {
            alert("Debes ingresar un número. Recuerda, del 1 al 6.");
        } else if (numero >= 1 && numero <= 6) {
            break;
        } else {
            alert("Vuelve a intentarlo.\nDebes ingresar un número del 1 al 6.");
        }
    }

    console.log("Número elegido por" + " " + nombre + ":" + " " + numero);

    let ranger;

    if (numero === 1) {
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        if (numeroAleatorio === 1) {
            ranger = "Azul 🔵";
        } else if (numeroAleatorio === 2) {
            ranger = "Rosado 🌺";
        } else if (numeroAleatorio === 3) {
            ranger = "Rojo 🔴"; 
        } else if (numeroAleatorio === 4) {
            ranger = "Negro ⚫"; 
        } else if (numeroAleatorio === 5) {
            ranger = "Amarillo 🟡"; 
        } else {
            ranger = "Verde 🟢";
        }
    } else if (numero === 2) {
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        if (numeroAleatorio === 1) {
            ranger = "Azul 🔵";
        } else if (numeroAleatorio === 2) {
            ranger = "Rosado 🌺";
        } else if (numeroAleatorio === 3) {
            ranger = "Rojo 🔴"; 
        } else if (numeroAleatorio === 4) {
            ranger = "Negro ⚫"; 
        } else if (numeroAleatorio === 5) {
            ranger = "Amarillo 🟡"; 
        } else {
            ranger = "Verde 🟢";
        }
    } else if (numero === 3) {
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        if (numeroAleatorio === 1) {
            ranger = "Azul 🔵";
        } else if (numeroAleatorio === 2) {
            ranger = "Rosado 🌺";
        } else if (numeroAleatorio === 3) {
            ranger = "Rojo 🔴"; 
        } else if (numeroAleatorio === 4) {
            ranger = "Negro ⚫"; 
        } else if (numeroAleatorio === 5) {
            ranger = "Amarillo 🟡"; 
        } else {
            ranger = "Verde 🟢";
        }
    } else if (numero === 4) {
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        if (numeroAleatorio === 1) {
            ranger = "Azul 🔵";
        } else if (numeroAleatorio === 2) {
            ranger = "Rosado 🌺";
        } else if (numeroAleatorio === 3) {
            ranger = "Rojo 🔴"; 
        } else if (numeroAleatorio === 4) {
            ranger = "Negro ⚫"; 
        } else if (numeroAleatorio === 5) {
            ranger = "Amarillo 🟡"; 
        } else {
            ranger = "Verde 🟢";
        }
    } else if (numero === 5) {
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        if (numeroAleatorio === 1) {
            ranger = "Azul 🔵";
        } else if (numeroAleatorio === 2) {
            ranger = "Rosado 🌺";
        } else if (numeroAleatorio === 3) {
            ranger = "Rojo 🔴"; 
        } else if (numeroAleatorio === 4) {
            ranger = "Negro ⚫"; 
        } else if (numeroAleatorio === 5) {
            ranger = "Amarillo 🟡"; 
        } else {
            ranger = "Verde 🟢";
        }    
    } else (numero === 6); {
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        if (numeroAleatorio === 1) {
            ranger = "Azul 🔵";
        } else if (numeroAleatorio === 2) {
            ranger = "Rosado 🌺";
        } else if (numeroAleatorio === 3) {
            ranger = "Rojo 🔴"; 
        } else if (numeroAleatorio === 4) {
            ranger = "Negro ⚫"; 
        } else if (numeroAleatorio === 5) {
            ranger = "Amarillo 🟡"; 
        } else {
            ranger = "Verde 🟢";
        }
    }    

    alert("Dejame procesar tus instintos...");
    console.log("Dejame procesar tus instintos...");
    alert("Veo que eres valiente y tienes mucho coraje.");
    console.log("Veo que eres valiente y tienes mucho coraje.");
    alert("Tu apariencia me suena mucho...");
    console.log("tu apariencia me suena mucho...");
    alert("Tu eres el PowerRanger..." + ranger.toUpperCase() + "!");
    console.log("Tu eres el PowerRanger..." + ranger.toUpperCase() + "!");

}

selecRanger();