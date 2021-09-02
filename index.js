//Função contadora
function counter(value, bankNote){
    
    let counter = 0;

    do{
        value = value - bankNote;
        if (value >= 0){
            counter++
        }
    }while(value >=0);

    return counter;
}

//Função de saque
function withdraw (value){

    let bankNote100 = counter(value, 100);
    value = value - (bankNote100 * 100);
    let bankNote50 = counter(value, 50);
    value = value - (bankNote50 * 50);
    let bankNote10 = counter(value, 10);
    value = value - (bankNote10 * 10);
    let bankNote5 = counter(value, 5);
    value = value - (bankNote5 * 5);
    let bankNote1 = counter(value, 1);
    value = value - (bankNote1 * 1);

    console.log(`Nota de 100: ${bankNote100}`);
    console.log(`Nota de 50: ${bankNote50}`);
    console.log(`Nota de 10: ${bankNote10}`);
    console.log(`Nota de 5: ${bankNote5}`);
    console.log(`Nota de 1: ${bankNote1}`);

}

withdraw(85461);


// Desenvolva um programa que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico. Os requisitos básicos são os seguintes:
// •	Entregar o menor número de notas;
// •	É possível sacar o valor solicitado com as notas de $1, $5, $10, $50 e $100;
// •	Não se preocupe com o saldo. Ele é infinito.
// •	Não se preocupe com a quantidade de cada nota no caixa eletrônico. Elas também são infinitas.
// •	Os saques são sempre inteiros. Não se preocupe com casas decimais.
// •	A saída pode ser simples ou gráfica. Isso será de sua escolha.
// 
// Exemplos:
// 
// Valor do saque: $30
// Resultado esperado: 3 notas de $10.
// 
// Valor do saque: $75
// Resultado esperado: 1 nota de $50. 2 notas de $10. 1 nota de $5.
// 
// Valor do saque: $163
// Resultado esperado: 1 nota de $100. 1 nota de $50. 1 nota de $10. 3 notas de $1.
