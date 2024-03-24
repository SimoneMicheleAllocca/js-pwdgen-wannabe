//TEST
// alert("Ciao")


// PROCEDIMENTO:
// CHIEDIAMO ALL'UTENTE IL SUO NOME
let userName = prompt("Ciao utente, come ti chiami?") //string
console.log(userName, typeof userName);

// CHIEDIAMO ALL'UTENTE IL SUO COGNOME
let userSurname = prompt("Qual è il tuo cognome?") //string
console.log(userSurname, typeof userSurname);

// CHIEDIAMO ALL'UTENTE IL SUO COLORE PREFERITO
let userColor = prompt("Qual è il tuo colore preferito?") //string
console.log(userColor, typeof userColor);


// BONUS
const randomNumber= Math.floor(Math.random() * 100); //number
console.log(randomNumber, typeof randomNumber);



//LOGICA
const password = userName + userSurname + userColor + randomNumber; //string
console.log(password, typeof password);

// STAMPIAMO NOMECOGNOMECOLOREBONUS
const resultMessage = `La tua password è: ${password}`; //string
console.log(resultMessage);


document.getElementById("result").innerHTML = resultMessage;