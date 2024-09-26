// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um 
// número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const n = parseInt(prompt("Digite um numero positivo de 1 até 10: "))
let numero1 = 0, numero2 = 1, proximoNumero;

proximoNumero = numero1 + numero2;

while (proximoNumero <= n) {
    console.log(proximoNumero);

    numero1 = numero2;
    numero2 = proximoNumero;
    proximoNumero = numero1 + numero2;
} 

console.log(proximoNumero);

if (proximoNumero == 0,1,2,3,5,8,13) {
    console.log("O número " + proximoNumero + " pertence a sequência Fibonacci!")
}
