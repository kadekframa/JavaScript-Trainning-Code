// Kode program Javascript menggunakan for loop

const tampil = document.getElementById('tampil');

function nilaiHasilPangkat(){
    let hasil, bil_pokok, bil_pangkat;
    hasil = 1;

    bil_pokok = document.getElementById("angkaPokok");
    bil_pangkat = document.getElementById("angkaPangkat");

    let pokok = Number(bil_pokok.value);
    let pangkat = Number(bil_pangkat.value);


    if(pokok != "" && pangkat != "" ){
        for(let i = 1; i <= pangkat; i++){
            hasil = hasil * pokok;
        }
    }else if(pokok == "" && pangkat != ""){
        hasil = 0;
    }else if(pokok != "" && pangkat == ""){
        hasil = 1;
    }else if(pokok == "" && pangkat == ""){
        hasil = "Mohon input data nya terlebih dahulu ya!";
    }else{
        hasil = "Dicoba lagi yaa!";
    }

    
    let tampilkanKeWindow = hasil;
    tampil.insertAdjacentHTML('afterbegin', `<p>${tampilkanKeWindow}</p>`);
};
