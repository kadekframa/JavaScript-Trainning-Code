


let tampung_bilanganPrima = [];

function bilanganPrima(value){
    for(let i = 1; i <= value; i++){
        let bilangan = 0;
        for(let a = 1; a <= i; a++){
            if(i % a == 0){
                bilangan = bilangan + 1;
            }
        }
        if(bilangan == 2){
            tampung_bilanganPrima.push(i);
        }
    };
    
    document.writeln(`<p>Bilangan Prima yang kurang dari ${value} itu adalah : </p>`);
    for (const character of tampung_bilanganPrima) {
        document.writeln(`<p>${character}</p>`);
    }
    
};

bilanganPrima(24);