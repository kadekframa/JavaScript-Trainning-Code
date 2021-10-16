// array(1,4,5,3,2,5,3,4,8,5,4,3,6,0,4,3,2,1,5,9,9,4,3,1,3,0,2,2,4,6,2,4,7,4)
// Pertanyaan:
// - Tampilkan angka secara tunggal dan total angka apabila ditunggalkan.
// - Tampilkan total dari masing-masing angka.

function tampilkanData(...data){
    let total = 0;
    for (const character of data) {

        document.writeln(`<p></p>`);
        document.writeln(`<p>tampil data : ${character}</p>`);
        total = total + character;
    }

    
    document.writeln(`<h2>Total angka apabila dijumlahkan dari keseluruhan adalah : ${total}</h2>`);
    document.writeln(`<h2>Total jumlah angka yang ada adalah : ${arrayData.length}</h2>`);
    document.writeln(`<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>`);
}

let arrayData = [1,4,5,3,2,5,3,4,8,5,4,3,6,0,4,3,2,1,5,9,9,4,3,1,3,0,2,2,4,6,2,4,7,4];
tampilkanData(...arrayData);