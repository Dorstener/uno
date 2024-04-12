/* VARIABLES */

let notaEjercicioUno = 0;
const ejercicioUno = document.getElementById("ejercicioUno");
const respuestasCorrectas = {

    respuestaUno: "Cuándo ",
    respuestaDos: "Cómo ",
    respuestaTres: "Dónde ",
    respuestaCuatro: "Qué ",
    respuestaCinco: "Por qué ",
}
const respuestasAceptables = {

    respuestaUno: ["Cuándo", "Cuando ", "Cuando"],
    respuestaDos: ["Cómo", "Como", "Como "],
    respuestaTres: ["Dónde", "Donde", "Donde "],
    respuestaCuatro: ["Qué", "Que", "Que "],
    respuestaCinco: ["Por qué", "Por que", "Por que "],
}

/* FUNCTIONS */

function validacion(userInput) {
    console.log(userInput);
}

function displayFeedback(inputID, feedbackType) {
    const feedbackElements = {
        correcto: 'correcto${inputID}',
        parcial: 'parcial${inputId}',
        incorrecto: 'incorrecto${inputID}',
    };

    for (const type in feedbackElements) {
        const element = document.getElementById(feedbackElements[type]);
        if (type === feedbackType) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    }
}

document.getElementById("validar").addEventListener('click', function (event) {
    event.preventDefault();

    for (const inputID in respuestasCorrectas) {
        const input = document.getElementById(inputID);
        const respuesta = input.value;
        validacion(respuesta);

        if (respuesta === respuestasCorrectas[inputID]) {
            notaEjercicioUno += 1
            displayFeedback(inputID, "correcto");

        } else if (respuestasAceptables[inputID].includes(respuesta)) {
            notaEjercicioUno += 0.5;
            displayFeedback(inputID, "parcial");
        } else {
            displayFeedback(inputID, "incorrecto");
        }
    }

    console.log("Tu nota final es = " + notaEjercicioUno);
});



/*
for (let pregunta of preguntas) {
    while (intentos < maxIntentos) {
        let respuesta = prompt(pregunta.pregunta);

        if (respuesta === pregunta.respuesta) {
            alert("Respuesta correcta. Sumaste 1 punto. Pase a la siguiente pregunta");
            console.log ("Respuesta Correcta: " + respuesta);
            notaFinal++;
            break;
        } else { 
            intentos++;
            contador--;

            alert("Respuesta incorrecta, tienes " + contador + " intentos más.");
            console.log ("Intento incorrecto. Respuesta proporcionada: " + respuesta);
        }
    }

    if (intentos === maxIntentos) {
        alert("Has agotado tus " + maxIntentos + " intentos. La respuesta correcta era: " + pregunta.respuesta)
    }

    intentos = 0;
    contador = maxIntentos;
}

alert("Terminaste el ejercicio. Tu nota final es " + notaFinal + " .Promedio del examen= " + ((notaFinal/preguntas.length)*100) + "%");
console.log ("Nota final " + notaFinal); */

