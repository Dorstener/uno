let notaEjercicioUno = 0;
const ejercicioUno = document.getElementById("ejercicioUno");


function validacion(userInput) {
console.log (userInput);
}



const respuestasCorrectas =  {

        respuestaUno: "Cuándo ",
        respuestaDos: "Cómo ",
        respuestaTres: "Dónde ",
        respuestaCuatro: "Qué ",
        respuestaCinco: "Por qué ",
    }

const respuestasAceptables = {

    respuestaUno: ["Cuándo", "Cuando ","Cuando"],
    respuestaDos: ["Cómo", "Como", "Como "],
    respuestaTres: ["Dónde", "Donde", "Donde "],
    respuestaCuatro: ["Qué", "Que", "Que "],
    respuestaCinco: ["Por qué", "Por que", "Por que "],
}

console.log ('Before loop');

for (const inputID in respuestasCorrectas) {
    const input = document.getElementById(inputID);
    const respuesta = input.value;
    validacion(respuesta);

    if (respuesta === respuestasCorrectas[inputID]) {
        notaEjercicioUno += 1
        
    } else if (respuestasAceptables[inputID].includes(respuesta)) {
        notaEjercicioUno += 0.5;
        
    }
    console.log("Loop iteration:", inputID);
    console.log("Input element:", input);
    console.log("User input:", respuesta);
    
}




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

