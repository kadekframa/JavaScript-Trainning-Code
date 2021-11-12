

const tampil = document.getElementById('tampil');

function nilaiHasilPangkat(){
    let bil_pokok, bil_pangkat;

    bil_pokok = document.getElementById("angkaPokok");
    bil_pangkat = document.getElementById("angkaPangkat");

    let pokok = Number(bil_pokok.value);
    let pangkat = Number(bil_pangkat.value);


    function hitungHasil(x,y){
    
        if(x != 0 && y == 0){
            return 1;
            
        }else if(x == 0 && y != 0){
            return 0;
        }else if(x == "" || y == ""){
            return "Mohon input data nya terlebih dahulu ya!";
        }else{
            return x * hitungHasil(x, y-1);
        }
    };
    
    
    let tampilkanKeWindow = hitungHasil(pokok, pangkat);
    tampil.insertAdjacentHTML('afterbegin', `<p>${tampilkanKeWindow}</p>`);
};

