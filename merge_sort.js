//Kode Program Javascript

const tampil = document.getElementById('tampil');

function urutkan(){
    let i, no;

    no = document.getElementById("arrayAngka").value;
    angkaInput = no.split(',').map(Number);


    function merge(left, right) {
        let arr = []
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                arr.push(left.shift())  
            } else {
                arr.push(right.shift()) 
            }
            
        }
        return arr.concat(left.length? left : right)
    }
    
    function sort(data){
        if(data.length <= 1){
            return data;
        }else if(data === 2){
            if(data[0] < data[1]){
                return data;
            }
            return [data[1], data[0]];
        }
        const mid = data.length/2;
        const left = data.slice(0,mid);
        const right = data.slice(mid);
        const sortedLeft = sort(left);
        const sortedRight = sort(right);
        return merge(sortedLeft, sortedRight);
    }

    
    let tampilkan = sort(angkaInput);
    tampil.insertAdjacentHTML('afterbegin', `<p>Hasil Merge Sort: <b>${tampilkan}</b></p>`);

}

