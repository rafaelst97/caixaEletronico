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

    let bankNotes = [100, 50, 20, 10, 5, 1];
    let bankNotesCounted = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < bankNotes.length; i++){
        bankNotesCounted[i] = counter (value, bankNotes[i]);
        value = value - (bankNotesCounted[i] * bankNotes[i]);
    }

    for (let i = 0; i < bankNotesCounted.length; i++){
        console.log(`Cédula de: ${bankNotes[i]} : ${bankNotesCounted[i]}`)
    }

    for (let i = 0; i < bankNotesCounted.length; i++){
        
        let printNote = document.querySelector(`.bankNotes${bankNotes[i]}`);
        printNote.textContent = bankNotesCounted[i];

    }

    //Colocando o valor calculado no HTML
    //let bankNotes = document.querySelector(".bankNotes100");
    //bankNotes.textContent = bankNotes[1];
    //
    //bankNotes = document.querySelector(".bankNotes50");
    //bankNotes.textContent = bankNotes[2];
//
    //bankNotes = document.querySelector(".bankNotes5");
    //bankNotes.textContent = bankNote[5];
//
    //bankNotes = document.querySelector(".bankNotes10");
    //bankNotes.textContent = bankNotes[3];
//
    //bankNotes = document.querySelector(".bankNotes5");
    //bankNotes.textContent = bankNote5;
//
    //bankNotes = document.querySelector(".bankNotes1");
    //bankNotes.textContent = bankNote1;
}

//Início do programa coletando o valor digitado após o clique no botão Enter 
var enter = document.querySelector("#enter");
enter.addEventListener("click", function (event){
    event.preventDefault();

    var form = document.querySelector("#inputForm");
    toWithdraw(form.input.value);
})