export function counter(value, bankNote){
    
    let counter = 0;

    do{
        value = value - bankNote;
        if (value >= 0){
            counter++
        }
    }while(value >=0);

    return counter;
}
