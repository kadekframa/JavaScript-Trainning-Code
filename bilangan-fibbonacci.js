// Bilangan Fibonacci

let tampung_fibbonacci = [];
let n1 = 0;
let n2 = 1;

for(let i = 0; i <= 10; i++){
    if(i === 0 || i === 1){
        tampung_fibbonacci.push(i);
    }else{
        let total = n1 + n2;
        tampung_fibbonacci.push(total);
        n1 = n2;
        n2 = total;
    }
}

document.writeln(`<p>bilangan fibbonacci dari 10 adalah : ${tampung_fibbonacci}</p>`);