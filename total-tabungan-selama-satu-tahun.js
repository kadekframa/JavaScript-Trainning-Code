// Mencari total-tabungan-selama-satu-tahun

// Soal:
/* Andi menabung dengan uang 750000 dibulan pertama dan mendapatkan bunga sebesar
   6% pada bulan berikutnya, setiap bulan berikutnya andi menyisihkan 3% dari
   tabungannya dan maksimal yang disisihkan 3% dari 800000. Berapakah total tabungan
   andi selama 1 tahun ?
*/ 

let uangAndi = 750000;
let hasil = "";

for(let i = 1; i <= 12; i++){
    let bunga = 0;
    let sisih = 0;
    if(i > 1){
        bunga = uangAndi * 6/100;
        if(uangAndi+bunga > 800000){
            sisih = 800000 * 3/100;
        }else{
            sisih = (uangAndi + bunga) * 3/100;
        }
    }

    hasil = hasil + `Tabungan bulan ke ${i} : ${uangAndi.toFixed(2)} \n Bunga : ${bunga.toFixed(2)} \n Sisih : ${sisih.toFixed(2)} \n`;
    uangAndi = (uangAndi + bunga) - sisih;
}

document.writeln(hasil);
console.log(hasil);