let nome = prompt('Quale é il tuo nome?');
let cognome = prompt('Quale é il tuo cognome?');
let colorePreferito = prompt('Quale é il tuo colore preferito?');
const annoCorrente = 2023;
let annoNascita = prompt('Quale é il tuo anno di nascita?');
let età = annoCorrente - annoNascita;


let passWord = document.getElementById('password');
passWord.innerHTML = '\nEcco la tua password:\n' + nomeUtente + cognomeUtente + coloreUtente + 21;