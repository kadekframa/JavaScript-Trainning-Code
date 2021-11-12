//Kode Program Javascript

const tampil = document.getElementById('tampil');
function faktorial(){
    let i, no;

    no = document.getElementById("angka");
    let angka = Number(no.value);

    // Function Rekursive
    function factorialRecursive(value){
        if(value === 1){
            return 1;
        }else if(value == ""){
            return "Mohon inputkan terlebih dauhulu bilangannya yaa!";
        }else{
            return value * factorialRecursive(value - 1);       // proses pemanggilan method rekursive kembali (Function memanggil dirinya sendiri).
        }
    };

    
    let tampilkan = factorialRecursive(angka);      // memanggil funtion factorialRecursive() dengan berisi parameter berupa inputan angka.
    tampil.insertAdjacentHTML('afterbegin', `<p>${tampilkan}</p>`);
};