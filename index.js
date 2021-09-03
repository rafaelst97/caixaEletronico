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