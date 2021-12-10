//Contador de cédulas
function counter(value, bankNote) {

    let counter = 0;

    do {
        value = value - bankNote;
        if (value >= 0) {
            counter++
        }
    } while (value >= 0);

    return counter;
}


//Função de saque
function toWithdraw(value) {

    let bankNotes = [100, 50, 20, 10, 5, 2, 1]; //Tipos de cédulas suportadas
    let bankNotesCounted = []; //Zera contador para cada cédula
    for (let i = 0; i < bankNotesCounted.length; i++) {
        bankNotesCounted.push(0);
    }

    //Entra no contador de cédulas e subtrai o valor do usuário
    for (let i = 0; i < bankNotes.length; i++) {
        bankNotesCounted[i] = counter(value, bankNotes[i]);
        value = value - (bankNotesCounted[i] * bankNotes[i]);
    }

    let valueOfBankNotes = document.querySelector("#valueOfBankNotes"); //Cabeça da tabela
    let numberOfBankNotes = document.querySelector("#numberOfBankNotes"); //Corpo da tabela
    valueOfBankNotes.lastChild.remove(); // Limpa a tela
    numberOfBankNotes.lastChild.remove(); // Limpa a tela
    let valueTr = document.createElement("tr"); // Criação da linha responsável por ficar os tipos de cédulas
    let countedTr = document.createElement("tr"); // Criação da linha responsável pelo contador de cada cédula

    //Percorre o vetor com a contagem de cada cédula
    for (let i = 0; i < bankNotesCounted.length; i++) {

        let valueTh = document.createElement("th"); // Células do topo da planilha com os valores de cada cédula
        let countedTd = document.createElement("td"); // Células com o contador de cada cédula
        valueTh.textContent = `Nota de ${bankNotes[i]}`; // Passagem do valor de cada cédula para o topo da tabela
        countedTd.textContent = bankNotesCounted[i]; //Passagem da contagem de notas para o corpo da tabela       
        valueTr.appendChild(valueTh);
        countedTr.appendChild(countedTd)
        valueOfBankNotes.appendChild(valueTr);
        numberOfBankNotes.appendChild(countedTr);
    }
}

//Início do programa coletando o valor digitado após o clique no botão Enter 
var enter = document.querySelector("#enter");
enter.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#inputForm");
    toWithdraw(form.input.value);
})