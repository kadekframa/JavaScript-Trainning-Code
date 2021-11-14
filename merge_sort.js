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
    if(data.length <= 1) return data;
    if(data === 2){
        if(data[0] < data[1]) return data;
        return [data[1], data[0]];
    }
    const mid = data.length >> 1;
    const left = data.slice(0,mid);
    const right = data.slice(mid);
    const sortedLeft = sort(left);
    const sortedRight = sort(right);
    return merge(sortedLeft, sortedRight);
}

let array = [5,4,3,2,1];

console.log(sort(array).toString());