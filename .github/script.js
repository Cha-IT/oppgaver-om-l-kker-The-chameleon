// Oppgave 1: Telle fra 1 til 10

// Telle fra 1 til 10 med while-løkke
function telleMedWhile() {
    let i = 1;
    let resultat = "";
    while (i <= 10) {
        resultat += i + "<br>";
        i++;
    }
    document.getElementById("while-lokke-resultat").innerHTML = resultat;
}

// Telle fra 1 til 10 med for-løkke
function telleMedFor() {
    let resultat = "";
    for (let i = 1; i <= 10; i++) {
        resultat += i + "<br>";
    }
    document.getElementById("for-lokke-resultat").innerHTML = resultat;
}

// Kjør begge funksjonene når siden lastes
telleMedWhile();
telleMedFor();

// Oppgave 2: Passordbeskyttelse

// a) Ubegrensede forsøk på passord
/*
function sjekkPassordUbegrenset() {
    const korrektPassord = "hemmelig123";
    let passord = "";

    while (passord !== korrektPassord) {
        passord = prompt("Skriv inn passord:");
    }

    alert("Riktig passord!");
}
*/
// b) Maks tre forsøk på passord
function sjekkPassordTreForsok() {
    const korrektPassord = "hemmelig123";
    let passord = "";
    let forsok = 0;
    const maksForsok = 3;

    while (passord !== korrektPassord && forsok < maksForsok) {
        passord = prompt("Skriv inn passord:");
        forsok++;
    }

    if (passord === korrektPassord) {
        alert("Riktig passord!");
    } else {
        alert("For mange forsøk! Tilgang nektet.");
    }
}

// Kjør passordbeskyttelsen (du kan velge hvilken du vil bruke)
//sjekkPassordUbegrenset(); // Bruk denne for ubegrensede forsøk
 sjekkPassordTreForsok(); // Bruk denne for maks tre forsøk

// Oppgave 3: Oddetall og partall
let choice = prompt("Vil du se oddetall eller partall? (odd/part): ").trim().toLowerCase();
let outputDiv = document.getElementById('oddpar');

function writeToOutput(message) {
    let newMessage = document.createElement('p');
    newMessage.textContent = message;
    outputDiv.appendChild(newMessage);
}

if (choice === "odd") {
    for (let b = 1; b <= 100; b += 2) {
        writeToOutput(b);
    }
} else if (choice === "part") {
    for (let a = 0; a <= 100; a += 2) {
        writeToOutput(a);
    }
} else {
    writeToOutput("Ugyldig valg.");
}

// Oppgave 4: Gangetabellen
let resultContainer = document.getElementById('gangetabellen');

function displayMessage(message) {
    let newMessage = document.createElement('p');
    newMessage.textContent = message;
    resultContainer.appendChild(newMessage);
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        displayMessage(`${i} x ${j} = ${i * j}`);
    }
}