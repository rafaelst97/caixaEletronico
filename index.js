//Contador de cédulas
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
function toWithdraw (value){

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

    //Colocando o valor calculado no HTML
    let bankNotes = document.querySelector(".bankNotes100");
    bankNotes.textContent = bankNote100;

    bankNotes = document.querySelector(".bankNotes50");
    bankNotes.textContent = bankNote50;

    bankNotes = document.querySelector(".bankNotes10");
    bankNotes.textContent = bankNote10;

    bankNotes = document.querySelector(".bankNotes5");
    bankNotes.textContent = bankNote5;

    bankNotes = document.querySelector(".bankNotes1");
    bankNotes.textContent = bankNote1;
}

//Início do programa coletando o valor digitado após o clique no botão
var enter = document.querySelector("#enter");
enter.addEventListener("click", function (event){
    event.preventDefault();

    var form = document.querySelector("#inputForm");
    toWithdraw(form.input.value);

})