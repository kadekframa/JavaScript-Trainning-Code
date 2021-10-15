// pisahkan genap dan ganjil dari angka 1 s/d 100.
let genap = [];
let ganjil = [];
for(let i = 0; i <= 100; i++){
    if(i % 2 == 1){
        ganjil.push(i);
    }else{
        genap.push(i);
    }
};

document.writeln(`<p>Ini angka ganjil yaa ${ganjil}</p>`);
document.writeln(`Ini angka yang genap yaa ${genap}`);