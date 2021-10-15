// Bilangan Prima Kurang dari 100


let tampung_prima = [];
for(let i = 1; i <= 100; i++){
    let bilangan = 0;
    for(let a = 1; a <= i; a++){
        if(i % a == 0){
            bilangan = bilangan + 1;
        }
    }

    if(bilangan == 2){
        tampung_prima.push(i);
    }
};

document.writeln(`<p>Bilangan Prima Kurang dari 100 adalah : ${tampung_prima}</p>`);