const ask = () => {
    //Leer Pregunta
    const questionInput = document.getElementById("question");
    const answerInput = document.getElementById('answer');

    const ask = function(){
        let pregunta = questionInput.value;
        if (pregunta){
            //Recibir respuesta al preguntar a bola mágina
            let respuesta = magicBall();
            //Imprimir Resultado
            answerInput.value = respuesta;
        } else {
            answerInput.value = "Nose responder eso";
        }
    }
    
};

//Función Bola Mágica
const magicBall = () => {
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    switch (randomNumber){
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    }
    return eightBall;
};