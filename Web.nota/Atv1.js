var entrada = require("readline-sync");

var numAle = Math.floor(Math.random() * 100);
console.log(numAle)
var num;
var desistir;
var ten=1;

while (numAle !== num) {
    num = parseInt(entrada.question('Digite um numero entre 1 e 100: '));
    if (num == numAle) {
        console.log(`Parabéns, você acertou! levou ${ten}`);
        break
    }
    else if (num > numAle) {
        console.log(`Continue tentando advinhar o numero correto!`)
        console.log(`O numero digitado é maior do que a resposta correta!`);
    }
    else {
        console.log(`O numero digitado é menor que a resposta correta!`);
        console.log(`Continue tentando advinhar o numero correto!`)
    }
    desistir= entrada.question(`voce quer desistir? S/N`).toUpperCase();
    while (desistir!=='S'){
        if(desistir =='S') {
            console.log(`Voce desistiu`);
            numAle=num
            break
        } else if (desistir=='N') {
            console.log(`Voce decidiu continuar`);
            break
        } else {
            console.log(`Digite uma opção valida`)
            desistir= entrada.question(`voce quer desistir? S/N`);
        }
    }
    ten++
}


