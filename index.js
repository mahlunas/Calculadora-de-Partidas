const rl = require('readline-sync');

function verificaNivel(saldoVitorias){
    let nivel;
    if(saldoVitorias<=10){
        nivel = "Ferro";
    } else if(saldoVitorias<=20){
        nivel = "Bronze";
    } else if(saldoVitorias<=50){
        nivel = "Prata";
    } else if(saldoVitorias<=80){
        nivel = "Ouro";
    } else if(saldoVitorias<=90){
        nivel = "Diamante";
    } else if(saldoVitorias<=100){
        nivel = "Lendário";
    } else{
        nivel = "Imortal";
    }
    return nivel;
}

console.log("Bem-vindo a calculadora de partidas");
let vitorias = rl.questionInt('Insira a quantidade de Vitórias:');
let derrotas = rl.questionInt('Insira a quantidade de derrotas:');
let saldoVitorias = vitorias - derrotas;

console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de " + verificaNivel(saldoVitorias));